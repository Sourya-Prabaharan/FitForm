/**
 * FitForm Canvas Kinematic Chart Rendering Library
 * High-performance, zero-dependency, retina-ready canvas charts.
 */

window.FitFormCharts = (function() {
  'use strict';

  // Smooth bezier curve helper
  function drawSmoothLine(ctx, points, strokeStyle, lineWidth = 2) {
    if (!points || points.length < 2) return;
    ctx.beginPath();
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length - 1; i++) {
      const xc = (points[i].x + points[i + 1].x) / 2;
      const yc = (points[i].y + points[i + 1].y) / 2;
      ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
    ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
    ctx.stroke();
  }

  /**
   * Draws a time-series waveform chart with rep boundaries and synchronized playhead
   */
  function drawWaveformChart(canvas, exerciseData, currentTime = 0, selectedRep = null) {
    if (!canvas || !exerciseData || !exerciseData.timeSeries) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    // Auto-fit retina resolution
    const rect = canvas.getBoundingClientRect();
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    const w = rect.width;
    const h = rect.height;

    // Clear
    ctx.clearRect(0, 0, w, h);

    const padding = { top: 25, right: 20, bottom: 30, left: 45 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    const series = exerciseData.timeSeries;
    const maxT = exerciseData.duration || 10;
    
    // Determine min/max angles
    let primaryKey = 'kneeAngle';
    let secondaryKey = 'hipAngle';
    if (exerciseData.id === 'bench') {
      primaryKey = 'elbowLeft';
      secondaryKey = 'elbowRight';
    } else if (exerciseData.id === 'deadlift') {
      primaryKey = 'hipAngle';
      secondaryKey = 'kneeAngle';
    }

    let minAngle = 40;
    let maxAngle = 180;

    // Draw Rep Shaded Backgrounds
    const reps = exerciseData.setAnalysis?.reps || [];
    reps.forEach((rep, idx) => {
      const xStart = padding.left + (rep.startTime / maxT) * chartW;
      const xEnd = padding.left + (rep.endTime / maxT) * chartW;
      const isSelected = selectedRep === rep.repIndex;

      ctx.fillStyle = isSelected ? 'rgba(16, 185, 129, 0.15)' : (idx % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.04)');
      ctx.fillRect(xStart, padding.top, xEnd - xStart, chartH);

      // Rep label
      ctx.fillStyle = isSelected ? '#34D399' : 'rgba(255, 255, 255, 0.35)';
      ctx.font = '600 10px monospace';
      ctx.fillText(`REP ${rep.repIndex}`, xStart + 6, padding.top + 14);
    });

    // Draw Grid Lines & Y-Axis Labels
    ctx.strokeStyle = 'rgba(29, 51, 43, 0.6)';
    ctx.lineWidth = 1;
    ctx.fillStyle = 'rgba(148, 163, 184, 0.7)';
    ctx.font = '500 10px monospace';
    ctx.textAlign = 'right';

    const ySteps = 4;
    for (let i = 0; i <= ySteps; i++) {
      const angleVal = Math.round(minAngle + (i / ySteps) * (maxAngle - minAngle));
      const y = padding.top + chartH - (i / ySteps) * chartH;

      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(padding.left + chartW, y);
      ctx.stroke();

      ctx.fillText(`${angleVal}°`, padding.left - 8, y + 3);
    }

    // Map series to screen points
    const primaryPoints = [];
    const secondaryPoints = [];

    series.forEach(item => {
      const x = padding.left + (item.t / maxT) * chartW;
      const y1 = padding.top + chartH - ((item[primaryKey] - minAngle) / (maxAngle - minAngle)) * chartH;
      primaryPoints.push({ x, y: y1 });

      if (item[secondaryKey] !== undefined) {
        const y2 = padding.top + chartH - ((item[secondaryKey] - minAngle) / (maxAngle - minAngle)) * chartH;
        secondaryPoints.push({ x, y: y2 });
      }
    });

    // Draw Secondary Series (Cyan)
    if (secondaryPoints.length > 1) {
      drawSmoothLine(ctx, secondaryPoints, 'rgba(6, 182, 212, 0.7)', 2);
    }

    // Draw Primary Series (Neon Mint)
    if (primaryPoints.length > 1) {
      drawSmoothLine(ctx, primaryPoints, '#10B981', 2.5);
    }

    // Draw Mistakes Flags on Chart
    const mistakes = exerciseData.mistakes || [];
    mistakes.forEach(mistake => {
      if (mistake.timestamp !== undefined) {
        const mX = padding.left + (mistake.timestamp / maxT) * chartW;
        ctx.strokeStyle = '#EF4444';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(mX, padding.top);
        ctx.lineTo(mX, padding.top + chartH);
        ctx.stroke();
        ctx.setLineDash([]);

        // Red fault tag
        ctx.fillStyle = '#EF4444';
        ctx.beginPath();
        ctx.arc(mX, padding.top + 6, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Draw Synchronized Playhead Needle
    const clampedT = Math.max(0, Math.min(maxT, currentTime));
    const playheadX = padding.left + (clampedT / maxT) * chartW;

    ctx.strokeStyle = '#00F5A0';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(playheadX, padding.top - 5);
    ctx.lineTo(playheadX, padding.top + chartH + 5);
    ctx.stroke();

    // Playhead head dot
    ctx.fillStyle = '#00F5A0';
    ctx.beginPath();
    ctx.arc(playheadX, padding.top - 5, 5, 0, Math.PI * 2);
    ctx.fill();

    // Timecode at bottom
    ctx.textAlign = 'center';
    ctx.fillStyle = '#00F5A0';
    ctx.font = '700 10px monospace';
    ctx.fillText(`${clampedT.toFixed(2)}s`, playheadX, padding.top + chartH + 18);

    ctx.restore();
  }

  /**
   * Draws a 2D Movement Path (barbell / center-of-mass)
   */
  function drawPathChart(canvas, exerciseData) {
    if (!canvas || !exerciseData) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    const w = rect.width;
    const h = rect.height;

    ctx.clearRect(0, 0, w, h);

    // Grid center line
    ctx.strokeStyle = 'rgba(29, 51, 43, 0.8)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(w / 2, 10);
    ctx.lineTo(w / 2, h - 10);
    ctx.stroke();
    ctx.setLineDash([]);

    // Path points from poseFrames
    const frames = exerciseData.poseFrames || [];
    if (!frames.length) {
      ctx.restore();
      return;
    }

    const points = [];
    frames.forEach(f => {
      const pt = f.landmarks.left_wrist || f.landmarks.left_hip;
      if (pt) {
        // Map normalized coords
        const x = w / 2 + (pt.x - 0.5) * w * 1.4;
        const y = 20 + pt.y * (h - 40);
        points.push({ x, y });
      }
    });

    // Draw path line
    if (points.length > 1) {
      drawSmoothLine(ctx, points, '#10B981', 2);

      // Draw start and end dots
      ctx.fillStyle = '#34D399';
      ctx.beginPath();
      ctx.arc(points[0].x, points[0].y, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#06B6D4';
      ctx.beginPath();
      ctx.arc(points[points.length - 1].x, points[points.length - 1].y, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  return {
    drawWaveformChart,
    drawPathChart
  };
})();
