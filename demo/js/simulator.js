/**
 * FitForm iPhone Mobile App Simulator Controller
 * Implements full interactive user journey, tab switching,
 * processing animation, and the authentic ResultsScreen UI.
 */

window.FitFormSimulator = (function() {
  'use strict';

  let currentExercise = null;
  let activeTab = 'results'; // 'home', 'capture', 'processing', 'results', 'history', 'profile'
  let inappVideo = null;
  let inappCanvas = null;
  let inappCtx = null;
  let inappOverlayActive = true;
  let animId = null;

  function init(exerciseData) {
    currentExercise = exerciseData;
    inappVideo = document.getElementById('inappVideo');
    inappCanvas = document.getElementById('inappCanvas');
    if (inappCanvas) inappCtx = inappCanvas.getContext('2d');

    bindTabs();
    bindInappVideo();
    renderScreen();
  }

  function loadExercise(exerciseData) {
    currentExercise = exerciseData;
    if (activeTab === 'results') {
      renderScreen();
    }
  }

  function bindTabs() {
    document.querySelectorAll('.ios-tab-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        switchTab(tab);
      });
    });
  }

  function switchTab(tab) {
    activeTab = tab;
    document.querySelectorAll('.ios-tab-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    renderScreen();
  }

  function bindInappVideo() {
    if (!inappVideo) return;
    inappVideo.addEventListener('timeupdate', () => {
      renderInappCanvas();
    });
    inappVideo.addEventListener('play', () => {
      startInappLoop();
    });
    inappVideo.addEventListener('pause', () => {
      cancelAnimationFrame(animId);
      renderInappCanvas();
    });
  }

  function startInappLoop() {
    const loop = () => {
      if (inappVideo && !inappVideo.paused) {
        renderInappCanvas();
        animId = requestAnimationFrame(loop);
      }
    };
    animId = requestAnimationFrame(loop);
  }

  function renderInappCanvas() {
    if (!inappCtx || !inappCanvas || !currentExercise || !inappOverlayActive) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = inappCanvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    if (inappCanvas.width !== rect.width * dpr || inappCanvas.height !== rect.height * dpr) {
      inappCanvas.width = rect.width * dpr;
      inappCanvas.height = rect.height * dpr;
    }

    inappCtx.save();
    inappCtx.scale(dpr, dpr);
    const w = rect.width;
    const h = rect.height;

    inappCtx.clearRect(0, 0, w, h);

    const curTime = inappVideo ? inappVideo.currentTime : 0;
    const poseFrames = currentExercise.poseFrames || [];
    let closest = null;
    let minD = Infinity;

    for (let f of poseFrames) {
      const d = Math.abs(f.t - curTime);
      if (d < minD) {
        minD = d;
        closest = f;
      }
    }

    if (closest && closest.landmarks) {
      const lm = closest.landmarks;
      const bones = [
        ['head', 'left_shoulder'], ['head', 'right_shoulder'],
        ['left_shoulder', 'right_shoulder'],
        ['left_shoulder', 'left_elbow'], ['left_elbow', 'left_wrist'],
        ['right_shoulder', 'right_elbow'], ['right_elbow', 'right_wrist'],
        ['left_shoulder', 'left_hip'], ['right_shoulder', 'right_hip'],
        ['left_hip', 'right_hip'],
        ['left_hip', 'left_knee'], ['left_knee', 'left_ankle'],
        ['right_hip', 'right_knee'], ['right_knee', 'right_ankle']
      ];

      // Draw skeleton lines
      inappCtx.strokeStyle = '#10B981';
      inappCtx.lineWidth = 2;
      inappCtx.lineCap = 'round';

      bones.forEach(([s, e]) => {
        const p1 = lm[s];
        const p2 = lm[e];
        if (p1 && p2 && p1.v > 0.4 && p2.v > 0.4) {
          inappCtx.beginPath();
          inappCtx.moveTo(p1.x * w, p1.y * h);
          inappCtx.lineTo(p2.x * w, p2.y * h);
          inappCtx.stroke();
        }
      });

      // Draw Joint dots
      Object.keys(lm).forEach(k => {
        const p = lm[k];
        if (p && p.v > 0.4) {
          inappCtx.fillStyle = '#00F5A0';
          inappCtx.beginPath();
          inappCtx.arc(p.x * w, p.y * h, 3.5, 0, Math.PI * 2);
          inappCtx.fill();
        }
      });
    }

    inappCtx.restore();
  }

  function renderScreen() {
    const container = document.getElementById('iosAppBody');
    if (!container) return;

    if (activeTab === 'home') {
      renderHomeScreen(container);
    } else if (activeTab === 'capture') {
      renderCaptureScreen(container);
    } else if (activeTab === 'processing') {
      renderProcessingScreen(container);
    } else if (activeTab === 'results') {
      renderResultsScreen(container);
    } else if (activeTab === 'history') {
      renderHistoryScreen(container);
    } else if (activeTab === 'profile') {
      renderProfileScreen(container);
    }
  }

  /* ---------------- Screen: Results (Matches mobile ResultsScreen.tsx) ---------------- */
  function renderResultsScreen(container) {
    if (!currentExercise) return;
    const score = currentExercise.score || 70;
    const scoreClass = score >= 85 ? 'text-mint' : score >= 70 ? 'text-gold' : 'text-coral';
    const breakdown = currentExercise.setAnalysis?.breakdown || {
      stability: 85, symmetry: 80, rangeOfMotion: 90, tempoControl: 75, posture: 70
    };

    container.innerHTML = `
      <div style="padding-top: 4px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 4px;">
          <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--emerald); letter-spacing: 0.05em;">
            ${currentExercise.title}
          </span>
          <span style="font-size: 11px; color: var(--text-muted);">Today</span>
        </div>

        <h2 style="font-size: 28px; font-weight: 900; line-height: 1.1; margin-bottom: 6px;">
          FitScore <span class="${scoreClass}">${score}</span>
        </h2>
        <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.45; margin-bottom: 12px;">
          ${currentExercise.summary}
        </p>

        <!-- Metric Badges -->
        <div class="inapp-metric-row">
          <div class="inapp-metric-chip">
            <div class="inapp-metric-chip-val">${Math.round((currentExercise.confidence || 0.85) * 100)}%</div>
            <div class="inapp-metric-chip-lbl">Pose Visibility</div>
          </div>
          <div class="inapp-metric-chip">
            <div class="inapp-metric-chip-val" style="color: var(--gold);">${currentExercise.repCount || 2}</div>
            <div class="inapp-metric-chip-lbl">Reps Counted</div>
          </div>
          <div class="inapp-metric-chip">
            <div class="inapp-metric-chip-val" style="color: ${currentExercise.stabilityScore > 70 ? 'var(--emerald)' : 'var(--coral)'};">
              ${Math.round(currentExercise.stabilityScore || 75)}
            </div>
            <div class="inapp-metric-chip-lbl">Stability Index</div>
          </div>
        </div>

        <!-- In-App Video Player -->
        <div class="inapp-video-container">
          <video id="inappVideo" class="inapp-video-elem" src="${currentExercise.video}" playsinline loop muted></video>
          <canvas id="inappCanvas" class="inapp-canvas-overlay"></canvas>
          <div class="inapp-video-controls">
            <button id="inappPlayBtn" class="video-ctrl-btn">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </button>
            <button id="inappOverlayToggle" class="overlay-toggle-pill">Pose Mesh: ON</button>
          </div>
        </div>

        <!-- 5-Pillars Breakdown Card -->
        <div style="margin-top: 16px; padding: 14px; background: var(--bg-panel); border: 1px solid var(--border-subtle); border-radius: 8px;">
          <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom: 12px;">
            <span style="font-size: 13px; font-weight: 800; color: white;">FitScore breakdown</span>
            <span style="font-size: 20px; font-weight: 900;" class="${scoreClass}">${score}</span>
          </div>

          <div class="pillar-row">
            <div class="pillar-header"><span>Stability</span><span class="text-mint">${Math.round(breakdown.stability)}</span></div>
            <div class="pillar-bar-bg"><div class="pillar-bar-fill" style="width: ${breakdown.stability}%;"></div></div>
          </div>
          <div class="pillar-row">
            <div class="pillar-header"><span>Symmetry</span><span class="text-mint">${Math.round(breakdown.symmetry)}</span></div>
            <div class="pillar-bar-bg"><div class="pillar-bar-fill" style="width: ${breakdown.symmetry}%;"></div></div>
          </div>
          <div class="pillar-row">
            <div class="pillar-header"><span>Range of Motion</span><span class="text-mint">${Math.round(breakdown.rangeOfMotion)}</span></div>
            <div class="pillar-bar-bg"><div class="pillar-bar-fill" style="width: ${breakdown.rangeOfMotion}%;"></div></div>
          </div>
          <div class="pillar-row">
            <div class="pillar-header"><span>Tempo Control</span><span class="text-mint">${Math.round(breakdown.tempoControl)}</span></div>
            <div class="pillar-bar-bg"><div class="pillar-bar-fill" style="width: ${breakdown.tempoControl}%;"></div></div>
          </div>
          <div class="pillar-row">
            <div class="pillar-header"><span>Posture / Form</span><span class="text-mint">${Math.round(breakdown.posture)}</span></div>
            <div class="pillar-bar-bg"><div class="pillar-bar-fill" style="width: ${breakdown.posture}%;"></div></div>
          </div>
        </div>

        <!-- Rep Quality Cards -->
        <div style="margin-top: 18px;">
          <h4 style="font-size: 13px; font-weight: 800; color: white; margin-bottom: 8px;">Rep Quality (Tap to Seek)</h4>
          ${(currentExercise.setAnalysis?.reps || []).map(r => `
            <div class="rep-quality-card inapp-rep-card" data-start="${r.startTime}">
              <div>
                <div style="font-size: 13px; font-weight: 800; color: white;">Rep ${r.repIndex}</div>
                <div style="font-size: 10px; color: var(--text-muted); margin-top: 2px;">
                  ${r.duration.toFixed(1)}s • ROM ${Math.round(r.rangeOfMotion)}° • Asym ${Math.round(r.asymmetry || 0)}°
                </div>
              </div>
              <div style="font-size: 18px; font-weight: 900;" class="${r.fitScore.overall >= 70 ? 'text-mint' : 'text-gold'}">
                ${Math.round(r.fitScore.overall)}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Detected Biomechanical Faults -->
        ${(currentExercise.mistakes && currentExercise.mistakes.length) ? `
          <div style="margin-top: 18px;">
            <h4 style="font-size: 13px; font-weight: 800; color: white; margin-bottom: 8px;">Detected Faults</h4>
            ${currentExercise.mistakes.map(m => `
              <div class="fault-card">
                <span class="fault-tag">⚠️ ${m.severity.toUpperCase()} PRIORITY</span>
                <div class="fault-title">${m.label}</div>
                <div class="fault-evidence">${m.evidence}</div>
                <div style="font-size: 9px; color: var(--cyan); margin-top: 4px; font-weight: 600;">
                  📚 ${m.reference}
                </div>
              </div>
            `).join('')}
          </div>
        ` : `
          <div style="margin-top: 18px; padding: 12px; background: rgba(16, 185, 129, 0.08); border: 1px solid var(--emerald); border-radius: 8px;">
            <div style="font-size: 12px; font-weight: 800; color: var(--emerald);">✅ Clean Movement Form</div>
            <div style="font-size: 11px; color: var(--text-secondary); margin-top: 2px;">
              No significant biomechanical breakdown or asymmetries detected.
            </div>
          </div>
        `}

        <!-- Actionable Recommendations -->
        <div style="margin-top: 18px;">
          <h4 style="font-size: 13px; font-weight: 800; color: white; margin-bottom: 8px;">Coaching Recommendations</h4>
          <ul style="padding-left: 18px; font-size: 11px; color: var(--text-secondary); line-height: 1.5;">
            ${(currentExercise.recommendations || []).map(rec => `<li style="margin-bottom: 6px;">${rec}</li>`).join('')}
          </ul>
        </div>

        <!-- Retake Button -->
        <button id="inappRetakeBtn" class="btn btn-primary" style="width: 100%; margin-top: 20px; font-size: 13px; padding: 12px;">
          Analyze Another Lift
        </button>
      </div>
    `;

    // Rebind newly rendered video & controls
    inappVideo = document.getElementById('inappVideo');
    inappCanvas = document.getElementById('inappCanvas');
    if (inappCanvas) inappCtx = inappCanvas.getContext('2d');
    bindInappVideo();

    const inappPlayBtn = document.getElementById('inappPlayBtn');
    if (inappPlayBtn && inappVideo) {
      inappPlayBtn.addEventListener('click', () => {
        if (inappVideo.paused) {
          inappVideo.play();
          inappPlayBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;
        } else {
          inappVideo.pause();
          inappPlayBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
        }
      });
    }

    const overlayToggle = document.getElementById('inappOverlayToggle');
    if (overlayToggle) {
      overlayToggle.addEventListener('click', () => {
        inappOverlayActive = !inappOverlayActive;
        overlayToggle.textContent = inappOverlayActive ? 'Pose Mesh: ON' : 'Pose Mesh: OFF';
        if (!inappOverlayActive && inappCtx) inappCtx.clearRect(0, 0, inappCanvas.width, inappCanvas.height);
        else renderInappCanvas();
      });
    }

    // Rep Card Clicks seek video
    container.querySelectorAll('.inapp-rep-card').forEach(card => {
      card.addEventListener('click', () => {
        const startT = parseFloat(card.dataset.start || '0');
        if (inappVideo) {
          inappVideo.currentTime = startT;
          inappVideo.play();
        }
      });
    });

    const retakeBtn = document.getElementById('inappRetakeBtn');
    if (retakeBtn) {
      retakeBtn.addEventListener('click', () => {
        switchTab('capture');
      });
    }
  }

  /* ---------------- Screen: Home Dashboard ---------------- */
  function renderHomeScreen(container) {
    container.innerHTML = `
      <div style="padding-top: 4px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 16px;">
          <div>
            <div style="font-size: 11px; color: var(--text-muted);">Welcome back</div>
            <div style="font-size: 18px; font-weight: 900; color: white;">Sourya P.</div>
          </div>
          <div style="width: 34px; height: 34px; border-radius: 50%; background: var(--emerald); display:flex; align-items:center; justify-content:center; color: #04120C; font-weight: 800; font-size: 14px;">
            SP
          </div>
        </div>

        <!-- Weekly Summary Card -->
        <div style="padding: 16px; background: linear-gradient(135deg, #13271E, #0D1B15); border: 1px solid var(--border-medium); border-radius: 12px; margin-bottom: 20px;">
          <div style="font-size: 11px; font-weight: 700; color: var(--emerald); text-transform: uppercase;">Weekly Biomechanics</div>
          <div style="font-size: 28px; font-weight: 900; color: white; margin: 4px 0;">FitScore 78</div>
          <div style="font-size: 11px; color: var(--text-secondary);">+6% stability improvement over last 14 days</div>
        </div>

        <h4 style="font-size: 13px; font-weight: 800; color: white; margin-bottom: 10px;">Quick Form Check</h4>
        <div style="display: grid; grid-template-columns: 1fr; gap: 8px; margin-bottom: 20px;">
          <div class="rep-quality-card quick-ex-btn" data-ex="squat">
            <div>
              <div style="font-weight: 800; color: white;">🏋️‍♂️ Barbell Squat</div>
              <div style="font-size: 11px; color: var(--text-muted);">Knee flexion & valgus tracking</div>
            </div>
            <button class="btn btn-primary btn-sm">Start</button>
          </div>
          <div class="rep-quality-card quick-ex-btn" data-ex="deadlift">
            <div>
              <div style="font-weight: 800; color: white;">⚡ Conventional Deadlift</div>
              <div style="font-size: 11px; color: var(--text-muted);">Spinal hinge & bar vertical path</div>
            </div>
            <button class="btn btn-primary btn-sm">Start</button>
          </div>
          <div class="rep-quality-card quick-ex-btn" data-ex="bench">
            <div>
              <div style="font-weight: 800; color: white;">💪 Flat Bench Press</div>
              <div style="font-size: 11px; color: var(--text-muted);">Elbow ROM & bilateral symmetry</div>
            </div>
            <button class="btn btn-primary btn-sm">Start</button>
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll('.quick-ex-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const exId = btn.dataset.ex;
        if (window.FITFORM_DATASET && window.FITFORM_DATASET[exId]) {
          window.FitFormMain.selectExercise(exId);
          switchTab('capture');
        }
      });
    });
  }

  /* ---------------- Screen: Capture Studio ---------------- */
  function renderCaptureScreen(container) {
    container.innerHTML = `
      <div style="padding-top: 4px;">
        <h3 style="font-size: 18px; font-weight: 900; color: white; margin-bottom: 4px;">Record or Upload Lift</h3>
        <p style="font-size: 11px; color: var(--text-muted); margin-bottom: 14px;">
          Selected: <strong style="color: var(--emerald);">${currentExercise?.title || 'Squat'}</strong>
        </p>

        <!-- Viewfinder Simulation -->
        <div style="width: 100%; aspect-ratio: 4 / 3; background: #000; border-radius: 10px; border: 1px dashed var(--emerald); position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 16px;">
          <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(16, 185, 129, 0.15); display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
          </div>
          <div style="font-size: 12px; font-weight: 700; color: white;">Camera Ready (VisionCamera)</div>
          <div style="font-size: 10px; color: var(--text-muted); text-align: center; max-width: 220px; margin-top: 4px;">
            Place phone 6-10 ft away at hip height for optimal landmark tracking.
          </div>
        </div>

        <button id="inappRunAnalysisBtn" class="btn btn-primary" style="width: 100%; padding: 14px; font-size: 14px; margin-bottom: 10px;">
          🚀 Analyze Selected Benchmark
        </button>

        <label class="btn btn-outline" style="width: 100%; padding: 12px; font-size: 12px; cursor: pointer; text-align: center; display: block;">
          📁 Choose Custom Video from Device
          <input type="file" id="inappCustomVideoUpload" accept="video/*" style="display: none;">
        </label>
      </div>
    `;

    const runBtn = document.getElementById('inappRunAnalysisBtn');
    if (runBtn) {
      runBtn.addEventListener('click', () => {
        switchTab('processing');
      });
    }

    const uploadInput = document.getElementById('inappCustomVideoUpload');
    if (uploadInput) {
      uploadInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          window.FitFormMain.handleCustomVideoUpload(e.target.files[0]);
          switchTab('processing');
        }
      });
    }
  }

  /* ---------------- Screen: Processing Animation Pipeline ---------------- */
  function renderProcessingScreen(container) {
    container.innerHTML = `
      <div style="padding-top: 40px; text-align: center;">
        <div style="width: 64px; height: 64px; border-radius: 50%; border: 3px solid rgba(16, 185, 129, 0.2); border-top-color: var(--emerald); animation: spin 1s infinite linear; margin: 0 auto 20px;"></div>
        <h3 style="font-size: 18px; font-weight: 900; color: white; margin-bottom: 8px;">Analyzing Kinematics</h3>
        <p style="font-size: 11px; color: var(--text-muted); margin-bottom: 24px;">Executing MediaPipe pose estimation & biomechanical rules engine...</p>

        <div id="pipelineProgressList" style="text-align: left; padding: 14px; background: var(--bg-panel); border: 1px solid var(--border-subtle); border-radius: 8px; font-size: 11px; display: flex; flex-direction: column; gap: 8px;">
          <div id="step1" style="color: var(--emerald); font-weight: 700;">⏳ 1. Decoding video stream (OpenCV)...</div>
          <div id="step2" style="color: var(--text-muted);">○ 2. 33-Keypoint MediaPipe Pose Extraction</div>
          <div id="step3" style="color: var(--text-muted);">○ 3. Joint Angle Trigonometry & Smoothing</div>
          <div id="step4" style="color: var(--text-muted);">○ 4. Rep Phase Peak & Trough Detection</div>
          <div id="step5" style="color: var(--text-muted);">○ 5. Biomechanical Fault Evaluation & FitScore</div>
        </div>
      </div>
      <style>
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      </style>
    `;

    // Simulated stepped progression
    setTimeout(() => {
      const s1 = document.getElementById('step1');
      const s2 = document.getElementById('step2');
      if (s1 && s2) {
        s1.textContent = '✓ 1. Video Decoded (30.0 FPS)';
        s2.textContent = '⏳ 2. 33-Keypoint Pose Extraction...';
        s2.style.color = 'var(--emerald)';
        s2.style.fontWeight = '700';
      }
    }, 600);

    setTimeout(() => {
      const s2 = document.getElementById('step2');
      const s3 = document.getElementById('step3');
      if (s2 && s3) {
        s2.textContent = '✓ 2. Pose Extracted (91% Visibility)';
        s3.textContent = '⏳ 3. Angular Trigonometry & Smoothing...';
        s3.style.color = 'var(--emerald)';
        s3.style.fontWeight = '700';
      }
    }, 1200);

    setTimeout(() => {
      const s3 = document.getElementById('step3');
      const s4 = document.getElementById('step4');
      if (s3 && s4) {
        s3.textContent = '✓ 3. Angular Time-Series Smoothed';
        s4.textContent = '⏳ 4. Rep Phase Peak Detection...';
        s4.style.color = 'var(--emerald)';
        s4.style.fontWeight = '700';
      }
    }, 1800);

    setTimeout(() => {
      const s4 = document.getElementById('step4');
      const s5 = document.getElementById('step5');
      if (s4 && s5) {
        s4.textContent = '✓ 4. 2 Repetitions Segmented';
        s5.textContent = '✓ 5. FitScore & Faults Evaluated';
        s5.style.color = 'var(--emerald)';
        s5.style.fontWeight = '700';
      }
    }, 2400);

    setTimeout(() => {
      switchTab('results');
    }, 2800);
  }

  /* ---------------- Screen: History ---------------- */
  function renderHistoryScreen(container) {
    container.innerHTML = `
      <div style="padding-top: 4px;">
        <h3 style="font-size: 18px; font-weight: 900; color: white; margin-bottom: 12px;">Workout History</h3>
        
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div class="rep-quality-card" onclick="window.FitFormMain.selectExercise('squat'); window.FitFormSimulator.switchTab('results');">
            <div>
              <div style="font-size: 13px; font-weight: 800; color: white;">Barbell Back Squat</div>
              <div style="font-size: 10px; color: var(--text-muted);">Today • 2 reps • Depth check</div>
            </div>
            <div style="font-size: 18px; font-weight: 900; color: var(--gold);">69</div>
          </div>
          <div class="rep-quality-card" onclick="window.FitFormMain.selectExercise('deadlift'); window.FitFormSimulator.switchTab('results');">
            <div>
              <div style="font-size: 13px; font-weight: 800; color: white;">Conventional Deadlift</div>
              <div style="font-size: 10px; color: var(--text-muted);">Yesterday • 2 reps • Clean hinge</div>
            </div>
            <div style="font-size: 18px; font-weight: 900; color: var(--emerald);">60</div>
          </div>
          <div class="rep-quality-card" onclick="window.FitFormMain.selectExercise('bench'); window.FitFormSimulator.switchTab('results');">
            <div>
              <div style="font-size: 13px; font-weight: 800; color: white;">Flat Bench Press</div>
              <div style="font-size: 10px; color: var(--text-muted);">Oct 3 • 2 reps • Asymmetry flag</div>
            </div>
            <div style="font-size: 18px; font-weight: 900; color: var(--coral);">36</div>
          </div>
        </div>
      </div>
    `;
  }

  /* ---------------- Screen: Profile & Settings ---------------- */
  function renderProfileScreen(container) {
    container.innerHTML = `
      <div style="padding-top: 4px;">
        <h3 style="font-size: 18px; font-weight: 900; color: white; margin-bottom: 14px;">Settings & Engine</h3>

        <div style="padding: 14px; background: var(--bg-panel); border: 1px solid var(--border-subtle); border-radius: 8px; margin-bottom: 12px; font-size: 11px;">
          <div style="font-weight: 800; color: white; margin-bottom: 4px;">Kinematic Calibration</div>
          <div style="color: var(--text-muted); margin-bottom: 8px;">Confidence Threshold: 0.55 min tracking</div>
          <div style="color: var(--text-muted);">Smoothing Window: 5-frame moving avg</div>
        </div>

        <div style="padding: 14px; background: var(--bg-panel); border: 1px solid var(--border-subtle); border-radius: 8px; margin-bottom: 12px; font-size: 11px;">
          <div style="font-weight: 800; color: white; margin-bottom: 4px;">App Build Status</div>
          <div style="color: var(--text-muted); margin-bottom: 4px;">Version: 1.0.0 (Production Ready)</div>
          <div style="color: var(--text-muted);">EAS Channel: production-ios</div>
        </div>

        <div style="font-size: 10px; color: var(--text-muted); text-align: center; margin-top: 20px;">
          FitForm Mobile • Developed with Expo React Native, VisionCamera, & Reanimated
        </div>
      </div>
    `;
  }

  return {
    init,
    loadExercise,
    switchTab
  };
})();
