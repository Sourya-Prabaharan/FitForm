/**
 * FitForm Kinematics Lab Workbench Controller
 * Synchronizes HTML5 video with canvas pose overlay, telemetry dials, and waveform charts.
 */

window.FitFormLab = (function() {
  'use strict';

  let currentExercise = null;
  let videoElem = null;
  let canvasElem = null;
  let ctx = null;
  let waveformCanvas = null;

  let isPlaying = false;
  let playbackRate = 1.0;
  let showSkeleton = true;
  let showTrajectory = true;
  let showAngleLabels = true;
  let animFrameId = null;

  let trailHistory = [];

  // DOM Elements
  let playBtn = null;
  let scrubFill = null;
  let scrubBar = null;
  let timecodeDisplay = null;
  let phaseTag = null;
  let dial1Val = null;
  let dial1Lbl = null;
  let dial2Val = null;
  let dial2Lbl = null;
  let dial3Val = null;
  let dial3Lbl = null;

  // Skeletal bone connections
  const BONE_CONNECTIONS = [
    ['head', 'left_shoulder'],
    ['head', 'right_shoulder'],
    ['left_shoulder', 'right_shoulder'],
    ['left_shoulder', 'left_elbow'],
    ['left_elbow', 'left_wrist'],
    ['right_shoulder', 'right_elbow'],
    ['right_elbow', 'right_wrist'],
    ['left_shoulder', 'left_hip'],
    ['right_shoulder', 'right_hip'],
    ['left_hip', 'right_hip'],
    ['left_hip', 'left_knee'],
    ['left_knee', 'left_ankle'],
    ['right_hip', 'right_knee'],
    ['right_knee', 'right_ankle']
  ];

  function init(exerciseData) {
    currentExercise = exerciseData;
    videoElem = document.getElementById('labVideo');
    canvasElem = document.getElementById('labCanvas');
    waveformCanvas = document.getElementById('waveformCanvas');

    if (!videoElem || !canvasElem) return;
    ctx = canvasElem.getContext('2d');

    // Controls
    playBtn = document.getElementById('labPlayBtn');
    scrubBar = document.getElementById('labScrubBar');
    scrubFill = document.getElementById('labScrubFill');
    timecodeDisplay = document.getElementById('labTimecode');
    phaseTag = document.getElementById('labPhaseTag');

    dial1Val = document.getElementById('labDial1Val');
    dial1Lbl = document.getElementById('labDial1Lbl');
    dial2Val = document.getElementById('labDial2Val');
    dial2Lbl = document.getElementById('labDial2Lbl');
    dial3Val = document.getElementById('labDial3Val');
    dial3Lbl = document.getElementById('labDial3Lbl');

    bindEvents();
    loadExercise(exerciseData);
  }

  function bindEvents() {
    if (playBtn) {
      playBtn.addEventListener('click', togglePlay);
    }

    if (videoElem) {
      videoElem.addEventListener('timeupdate', onTimeUpdate);
      videoElem.addEventListener('ended', () => {
        isPlaying = false;
        updatePlayBtn();
      });
      videoElem.addEventListener('play', () => {
        isPlaying = true;
        updatePlayBtn();
        startRenderLoop();
      });
      videoElem.addEventListener('pause', () => {
        isPlaying = false;
        updatePlayBtn();
        cancelAnimationFrame(animFrameId);
        renderCurrentFrame();
      });
    }

    // Custom Scrubber
    if (scrubBar) {
      let isDragging = false;
      const seek = (e) => {
        const rect = scrubBar.getBoundingClientRect();
        const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        if (videoElem && videoElem.duration) {
          videoElem.currentTime = ratio * videoElem.duration;
          renderCurrentFrame();
        }
      };

      scrubBar.addEventListener('mousedown', (e) => {
        isDragging = true;
        seek(e);
      });
      window.addEventListener('mousemove', (e) => {
        if (isDragging) seek(e);
      });
      window.addEventListener('mouseup', () => {
        isDragging = false;
      });
    }

    // Speed Controls
    document.querySelectorAll('.speed-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        playbackRate = parseFloat(btn.dataset.speed || '1.0');
        if (videoElem) videoElem.playbackRate = playbackRate;
      });
    });

    // Step Forward / Back Buttons
    const stepBackBtn = document.getElementById('labStepBack');
    const stepFwdBtn = document.getElementById('labStepFwd');
    if (stepBackBtn) {
      stepBackBtn.addEventListener('click', () => stepFrame(-1));
    }
    if (stepFwdBtn) {
      stepFwdBtn.addEventListener('click', () => stepFrame(1));
    }

    // Toggles
    const toggleSkel = document.getElementById('toggleSkeleton');
    const toggleTraj = document.getElementById('toggleTrajectory');
    const toggleLabels = document.getElementById('toggleLabels');

    if (toggleSkel) {
      toggleSkel.addEventListener('click', () => {
        showSkeleton = !showSkeleton;
        toggleSkel.classList.toggle('active', showSkeleton);
        renderCurrentFrame();
      });
    }
    if (toggleTraj) {
      toggleTraj.addEventListener('click', () => {
        showTrajectory = !showTrajectory;
        toggleTraj.classList.toggle('active', showTrajectory);
        renderCurrentFrame();
      });
    }
    if (toggleLabels) {
      toggleLabels.addEventListener('click', () => {
        showAngleLabels = !showAngleLabels;
        toggleLabels.classList.toggle('active', showAngleLabels);
        renderCurrentFrame();
      });
    }

    // Waveform click to seek
    if (waveformCanvas) {
      waveformCanvas.addEventListener('click', (e) => {
        const rect = waveformCanvas.getBoundingClientRect();
        const padding = { left: 45, right: 20 };
        const chartW = rect.width - padding.left - padding.right;
        const clickX = e.clientX - rect.left - padding.left;
        const ratio = Math.max(0, Math.min(1, clickX / chartW));
        if (videoElem && videoElem.duration) {
          videoElem.currentTime = ratio * videoElem.duration;
          renderCurrentFrame();
        }
      });
    }

    // Keyboard shortcut (Space = Play/Pause)
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        stepFrame(-1);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        stepFrame(1);
      }
    });

    // Resize listener for retina canvas
    window.addEventListener('resize', () => {
      resizeCanvas();
      renderCurrentFrame();
    });
  }

  function resizeCanvas() {
    if (!canvasElem) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvasElem.getBoundingClientRect();
    if (canvasElem.width !== rect.width * dpr || canvasElem.height !== rect.height * dpr) {
      canvasElem.width = rect.width * dpr;
      canvasElem.height = rect.height * dpr;
    }
  }

  function loadExercise(exerciseData) {
    currentExercise = exerciseData;
    trailHistory = [];

    if (videoElem) {
      videoElem.src = exerciseData.video;
      videoElem.playbackRate = playbackRate;
      videoElem.load();
      videoElem.currentTime = 0;
    }

    // Update dial labels based on exercise
    if (dial1Lbl && dial2Lbl && dial3Lbl) {
      if (exerciseData.id === 'bench') {
        dial1Lbl.textContent = 'L-ELBOW';
        dial2Lbl.textContent = 'R-ELBOW';
        dial3Lbl.textContent = 'ASYMMETRY';
      } else if (exerciseData.id === 'deadlift') {
        dial1Lbl.textContent = 'HIP HINGE';
        dial2Lbl.textContent = 'KNEE ANGLE';
        dial3Lbl.textContent = 'TORSO ANGLE';
      } else {
        dial1Lbl.textContent = 'KNEE FLEXION';
        dial2Lbl.textContent = 'HIP ANGLE';
        dial3Lbl.textContent = 'VALGUS RATIO';
      }
    }

    setTimeout(() => {
      resizeCanvas();
      renderCurrentFrame();
    }, 200);
  }

  function togglePlay() {
    if (!videoElem) return;
    if (videoElem.paused) {
      videoElem.play().catch(e => console.log('Autoplay policy prevented:', e));
    } else {
      videoElem.pause();
    }
  }

  function stepFrame(direction) {
    if (!videoElem) return;
    videoElem.pause();
    const frameTime = 1 / (currentExercise?.fps || 30);
    videoElem.currentTime = Math.max(0, Math.min(videoElem.duration || 10, videoElem.currentTime + direction * frameTime));
    renderCurrentFrame();
  }

  function updatePlayBtn() {
    if (!playBtn) return;
    playBtn.innerHTML = isPlaying
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
  }

  function onTimeUpdate() {
    if (!videoElem) return;
    const cur = videoElem.currentTime;
    const dur = videoElem.duration || currentExercise?.duration || 1;

    // Update Scrubber
    if (scrubFill) {
      scrubFill.style.width = `${(cur / dur) * 100}%`;
    }

    // Update Timecode
    if (timecodeDisplay) {
      timecodeDisplay.textContent = `${cur.toFixed(2)}s / ${dur.toFixed(1)}s`;
    }

    renderCurrentFrame();
  }

  function startRenderLoop() {
    const loop = () => {
      if (isPlaying) {
        renderCurrentFrame();
        animFrameId = requestAnimationFrame(loop);
      }
    };
    animFrameId = requestAnimationFrame(loop);
  }

  function renderCurrentFrame() {
    if (!ctx || !canvasElem || !currentExercise) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvasElem.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    if (canvasElem.width !== rect.width * dpr || canvasElem.height !== rect.height * dpr) {
      canvasElem.width = rect.width * dpr;
      canvasElem.height = rect.height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    const w = rect.width;
    const h = rect.height;

    ctx.clearRect(0, 0, w, h);

    const curTime = videoElem ? videoElem.currentTime : 0;

    // Find closest pose frame
    const poseFrames = currentExercise.poseFrames || [];
    let closestFrame = null;
    let minDelta = Infinity;

    for (let f of poseFrames) {
      const delta = Math.abs(f.t - curTime);
      if (delta < minDelta) {
        minDelta = delta;
        closestFrame = f;
      }
    }

    // Find closest time series data point
    const timeSeries = currentExercise.timeSeries || [];
    let closestData = null;
    let minDataDelta = Infinity;

    for (let d of timeSeries) {
      const delta = Math.abs(d.t - curTime);
      if (delta < minDataDelta) {
        minDataDelta = delta;
        closestData = d;
      }
    }

    // Check for fault condition near this timestamp
    let isFaultActive = false;
    let faultLabel = '';
    const mistakes = currentExercise.mistakes || [];
    for (let m of mistakes) {
      if (Math.abs(m.timestamp - curTime) < 1.0) {
        isFaultActive = true;
        faultLabel = m.label;
        break;
      }
    }

    // Update Telemetry Dials
    if (closestData) {
      if (currentExercise.id === 'bench') {
        if (dial1Val) dial1Val.textContent = Math.round(closestData.elbowLeft || 0);
        if (dial2Val) dial2Val.textContent = Math.round(closestData.elbowRight || 0);
        if (dial3Val) dial3Val.textContent = Math.round(closestData.asymmetryDelta || 0);
      } else if (currentExercise.id === 'deadlift') {
        if (dial1Val) dial1Val.textContent = Math.round(closestData.hipAngle || 0);
        if (dial2Val) dial2Val.textContent = Math.round(closestData.kneeAngle || 0);
        if (dial3Val) dial3Val.textContent = Math.round(closestData.torsoAngle || 0);
      } else {
        if (dial1Val) dial1Val.textContent = Math.round(closestData.kneeAngle || 0);
        if (dial2Val) dial2Val.textContent = Math.round(closestData.hipAngle || 0);
        if (dial3Val) dial3Val.textContent = closestData.valgusRatio !== undefined ? closestData.valgusRatio.toFixed(2) : '1.00';
      }

      if (phaseTag) {
        phaseTag.textContent = (closestData.phase || 'SETUP').toUpperCase();
        phaseTag.className = 'hud-badge';
        if (isFaultActive) {
          phaseTag.style.borderColor = '#EF4444';
          phaseTag.style.color = '#EF4444';
        } else {
          phaseTag.style.borderColor = '#1D332B';
          phaseTag.style.color = '#00F5A0';
        }
      }
    }

    // Draw Skeletal Mesh
    if (showSkeleton && closestFrame && closestFrame.landmarks) {
      const lm = closestFrame.landmarks;
      const boneColor = isFaultActive ? '#EF4444' : '#10B981';
      const jointColor = isFaultActive ? '#F87171' : '#00F5A0';

      // Draw Trajectory Trail
      const trackingPoint = lm.left_wrist || lm.left_hip;
      if (trackingPoint) {
        const ptX = trackingPoint.x * w;
        const ptY = trackingPoint.y * h;
        trailHistory.push({ x: ptX, y: ptY, t: curTime });
        if (trailHistory.length > 35) trailHistory.shift();
      }

      if (showTrajectory && trailHistory.length > 1) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.45)';
        ctx.lineWidth = 3;
        ctx.setLineDash([4, 4]);
        ctx.moveTo(trailHistory[0].x, trailHistory[0].y);
        for (let i = 1; i < trailHistory.length; i++) {
          ctx.lineTo(trailHistory[i].x, trailHistory[i].y);
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw Bones
      ctx.strokeStyle = boneColor;
      ctx.lineWidth = isFaultActive ? 3.5 : 2.5;
      ctx.lineCap = 'round';

      BONE_CONNECTIONS.forEach(([startKey, endKey]) => {
        const p1 = lm[startKey];
        const p2 = lm[endKey];
        if (p1 && p2 && p1.v > 0.4 && p2.v > 0.4) {
          ctx.beginPath();
          ctx.moveTo(p1.x * w, p1.y * h);
          ctx.lineTo(p2.x * w, p2.y * h);
          ctx.stroke();
        }
      });

      // Draw Joint Dots
      Object.keys(lm).forEach(key => {
        const p = lm[key];
        if (p && p.v > 0.4) {
          ctx.fillStyle = jointColor;
          ctx.beginPath();
          ctx.arc(p.x * w, p.y * h, 5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#080E0B';
          ctx.beginPath();
          ctx.arc(p.x * w, p.y * h, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw Joint Angle Callout Badges
      if (showAngleLabels && closestData) {
        let labelTarget = lm.left_knee;
        let labelText = `${Math.round(closestData.kneeAngle || 0)}°`;

        if (currentExercise.id === 'bench') {
          labelTarget = lm.left_elbow;
          labelText = `${Math.round(closestData.elbowLeft || 0)}°`;
        } else if (currentExercise.id === 'deadlift') {
          labelTarget = lm.left_hip;
          labelText = `${Math.round(closestData.hipAngle || 0)}°`;
        }

        if (labelTarget) {
          const bX = labelTarget.x * w + 14;
          const bY = labelTarget.y * h - 8;

          ctx.fillStyle = 'rgba(8, 14, 11, 0.85)';
          ctx.strokeStyle = boneColor;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(bX, bY, 44, 22, 4);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#FFFFFF';
          ctx.font = '700 11px monospace';
          ctx.textAlign = 'center';
          ctx.fillText(labelText, bX + 22, bY + 15);
        }
      }

      // Draw Fault Alert Banner if active
      if (isFaultActive) {
        ctx.fillStyle = 'rgba(239, 68, 68, 0.9)';
        ctx.beginPath();
        ctx.roundRect(w / 2 - 140, 20, 280, 28, 6);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '800 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`⚠️ ${faultLabel}`, w / 2, 38);
      }
    }

    ctx.restore();

    // Redraw synchronized Waveform Chart
    if (window.FitFormCharts && waveformCanvas) {
      window.FitFormCharts.drawWaveformChart(waveformCanvas, currentExercise, curTime);
    }
  }

  function seekToTime(timestamp) {
    if (videoElem) {
      videoElem.currentTime = timestamp;
      renderCurrentFrame();
    }
  }

  return {
    init,
    loadExercise,
    seekToTime
  };
})();
