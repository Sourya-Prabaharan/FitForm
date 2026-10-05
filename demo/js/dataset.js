// Automatically generated FitForm benchmark dataset
window.FITFORM_DATASET = {
  "squat": {
    "id": "squat",
    "exercise": "squat",
    "title": "Barbell Back Squat",
    "subtitle": "Kinetics-700 / MMFit Benchmark Dataset (Clip mmfit_w19_rgb)",
    "video": "assets/videos/squat.mp4",
    "duration": 24.0,
    "fps": 30.0,
    "score": 69,
    "confidence": 0.91,
    "repCount": 2,
    "stabilityScore": 98.6,
    "summary": "2 repetitions completed. Knee flexion reached 85\u00b0 on Rep 1 (depth threshold: 90\u00b0 parallel). Moderate dynamic knee valgus detected on Rep 2 ascent.",
    "benchmark": "MMFit Multi-Modal Dataset (University of Bristol)",
    "setAnalysis": {
      "averageFitScore": 69.1,
      "bestRepIndex": 2,
      "worstRepIndex": 1,
      "reps": [
        {
          "repIndex": 1,
          "startTime": 0.0,
          "endTime": 17.6,
          "duration": 17.6,
          "fitScore": {
            "stability": 99.1,
            "symmetry": 76.4,
            "rangeOfMotion": 100.0,
            "tempoControl": 55.8,
            "posture": 50.0,
            "overall": 68.4
          },
          "averageVelocity": 18.4,
          "rangeOfMotion": 84.8,
          "instability": 0.0007,
          "asymmetry": 9.1
        },
        {
          "repIndex": 2,
          "startTime": 17.6,
          "endTime": 21.93,
          "duration": 4.33,
          "fitScore": {
            "stability": 98.2,
            "symmetry": 86.9,
            "rangeOfMotion": 89.7,
            "tempoControl": 66.4,
            "posture": 50.0,
            "overall": 69.8
          },
          "averageVelocity": 30.9,
          "rangeOfMotion": 71.8,
          "instability": 0.0015,
          "asymmetry": 5.0
        }
      ],
      "breakdown": {
        "stability": 98.6,
        "symmetry": 81.6,
        "rangeOfMotion": 94.8,
        "tempoControl": 61.1,
        "posture": 50.0,
        "overall": 69.1
      },
      "fatigue": {
        "fatigueScore": 4.9,
        "fatigueDetected": true,
        "fatigueOnsetRep": 2,
        "velocityDropPercent": 0.0,
        "stabilityDropPercent": 0.9,
        "rangeOfMotionDropPercent": 15.3,
        "fitScoreDropPercent": 0.0,
        "summary": "Movement quality dropped 0% by the end of the set. Reduced range of motion (-15.3%) was the primary fatigue signature."
      }
    },
    "mistakes": [
      {
        "code": "depth_not_reached",
        "label": "Squat depth not reached",
        "severity": "medium",
        "firstFrame": 472,
        "timestamp": 15.7,
        "confidence": 0.84,
        "evidence": "Lowest knee flexion reached 85\u00b0; hip crease stayed above top surface of patella.",
        "reference": "Squat depth knee-flexion ranges (PubMed/ScienceDirect)",
        "refUrl": "https://www.sciencedirect.com/science/article/pii/S0268003301000171"
      },
      {
        "code": "knees_caving",
        "label": "Dynamic knee valgus (knees caving inward)",
        "severity": "high",
        "firstFrame": 610,
        "timestamp": 20.3,
        "confidence": 0.8,
        "evidence": "Knee-to-ankle width ratio dropped to 0.65 during concentric turnaround.",
        "reference": "Squat biomechanics & ACL loading patterns",
        "refUrl": "https://pubmed.ncbi.nlm.nih.gov/38203068/"
      }
    ],
    "recommendations": [
      "Use a controlled descent and aim for hip crease to break parallel with knee joint before initiating concentric drive.",
      "Cue knees out over mid-foot to prevent medial collapse. Supplement with tempo goblet squats and band abductions.",
      "Rep 2 showed best overall rhythm with a FitScore of 70.",
      "Fatigue manifested primarily as shortened ROM (-15.3%) rather than velocity loss."
    ],
    "timeSeries": [
      {
        "t": 0.0,
        "frame": 0,
        "kneeAngle": 172.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 0.07,
        "frame": 2,
        "kneeAngle": 171.8,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 0.13,
        "frame": 4,
        "kneeAngle": 171.7,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 0.2,
        "frame": 6,
        "kneeAngle": 171.5,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 0.27,
        "frame": 8,
        "kneeAngle": 171.4,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 0.33,
        "frame": 10,
        "kneeAngle": 171.2,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 0.4,
        "frame": 12,
        "kneeAngle": 171.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 0.47,
        "frame": 14,
        "kneeAngle": 170.9,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 0.53,
        "frame": 16,
        "kneeAngle": 170.7,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 0.6,
        "frame": 18,
        "kneeAngle": 170.6,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 0.67,
        "frame": 20,
        "kneeAngle": 170.4,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 0.73,
        "frame": 22,
        "kneeAngle": 170.2,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 0.8,
        "frame": 24,
        "kneeAngle": 170.1,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 0.87,
        "frame": 26,
        "kneeAngle": 169.9,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 0.93,
        "frame": 28,
        "kneeAngle": 169.8,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 1.0,
        "frame": 30,
        "kneeAngle": 169.6,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 1.07,
        "frame": 32,
        "kneeAngle": 169.4,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 1.13,
        "frame": 34,
        "kneeAngle": 169.3,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 1.2,
        "frame": 36,
        "kneeAngle": 169.1,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 1.27,
        "frame": 38,
        "kneeAngle": 169.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 1.33,
        "frame": 40,
        "kneeAngle": 168.8,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 1.4,
        "frame": 42,
        "kneeAngle": 168.6,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 1.47,
        "frame": 44,
        "kneeAngle": 168.5,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 1.53,
        "frame": 46,
        "kneeAngle": 168.3,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 1.6,
        "frame": 48,
        "kneeAngle": 168.2,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 1.67,
        "frame": 50,
        "kneeAngle": 168.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 1.73,
        "frame": 52,
        "kneeAngle": 167.8,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 1.8,
        "frame": 54,
        "kneeAngle": 167.7,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 1.87,
        "frame": 56,
        "kneeAngle": 167.5,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 1.93,
        "frame": 58,
        "kneeAngle": 167.4,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 2.0,
        "frame": 60,
        "kneeAngle": 167.2,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 2.07,
        "frame": 62,
        "kneeAngle": 167.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 2.13,
        "frame": 64,
        "kneeAngle": 166.9,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 2.2,
        "frame": 66,
        "kneeAngle": 166.7,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 2.27,
        "frame": 68,
        "kneeAngle": 166.6,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 2.33,
        "frame": 70,
        "kneeAngle": 166.4,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 2.4,
        "frame": 72,
        "kneeAngle": 166.2,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 2.47,
        "frame": 74,
        "kneeAngle": 166.1,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 2.53,
        "frame": 76,
        "kneeAngle": 165.9,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 2.6,
        "frame": 78,
        "kneeAngle": 165.8,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 2.67,
        "frame": 80,
        "kneeAngle": 165.6,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 2.73,
        "frame": 82,
        "kneeAngle": 165.4,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 2.8,
        "frame": 84,
        "kneeAngle": 165.3,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 2.87,
        "frame": 86,
        "kneeAngle": 165.1,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 2.93,
        "frame": 88,
        "kneeAngle": 165.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 3.0,
        "frame": 90,
        "kneeAngle": 164.8,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 3.07,
        "frame": 92,
        "kneeAngle": 164.6,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 3.13,
        "frame": 94,
        "kneeAngle": 164.5,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 3.2,
        "frame": 96,
        "kneeAngle": 164.3,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 3.27,
        "frame": 98,
        "kneeAngle": 164.2,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 3.33,
        "frame": 100,
        "kneeAngle": 164.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 3.4,
        "frame": 102,
        "kneeAngle": 163.8,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 3.47,
        "frame": 104,
        "kneeAngle": 163.7,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 3.53,
        "frame": 106,
        "kneeAngle": 163.5,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 3.6,
        "frame": 108,
        "kneeAngle": 163.4,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 3.67,
        "frame": 110,
        "kneeAngle": 163.2,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 3.73,
        "frame": 112,
        "kneeAngle": 163.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 3.8,
        "frame": 114,
        "kneeAngle": 162.9,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 3.87,
        "frame": 116,
        "kneeAngle": 162.7,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 3.93,
        "frame": 118,
        "kneeAngle": 162.6,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 4.0,
        "frame": 120,
        "kneeAngle": 162.4,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 4.07,
        "frame": 122,
        "kneeAngle": 162.2,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 4.13,
        "frame": 124,
        "kneeAngle": 162.1,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 4.2,
        "frame": 126,
        "kneeAngle": 161.9,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 4.27,
        "frame": 128,
        "kneeAngle": 161.8,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 4.33,
        "frame": 130,
        "kneeAngle": 161.6,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 4.4,
        "frame": 132,
        "kneeAngle": 161.4,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 4.47,
        "frame": 134,
        "kneeAngle": 161.3,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 4.53,
        "frame": 136,
        "kneeAngle": 161.1,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 4.6,
        "frame": 138,
        "kneeAngle": 161.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 4.67,
        "frame": 140,
        "kneeAngle": 160.8,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 4.73,
        "frame": 142,
        "kneeAngle": 160.6,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 4.8,
        "frame": 144,
        "kneeAngle": 160.5,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 4.87,
        "frame": 146,
        "kneeAngle": 160.3,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 4.93,
        "frame": 148,
        "kneeAngle": 160.2,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "setup"
      },
      {
        "t": 5.0,
        "frame": 150,
        "kneeAngle": 160.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 0.98,
        "phase": "eccentric"
      },
      {
        "t": 5.07,
        "frame": 152,
        "kneeAngle": 158.8,
        "hipAngle": 166.8,
        "torsoAngle": 81.6,
        "valgusRatio": 0.98,
        "phase": "eccentric"
      },
      {
        "t": 5.13,
        "frame": 154,
        "kneeAngle": 157.6,
        "hipAngle": 165.6,
        "torsoAngle": 81.3,
        "valgusRatio": 0.98,
        "phase": "eccentric"
      },
      {
        "t": 5.2,
        "frame": 156,
        "kneeAngle": 156.4,
        "hipAngle": 164.4,
        "torsoAngle": 80.9,
        "valgusRatio": 0.98,
        "phase": "eccentric"
      },
      {
        "t": 5.27,
        "frame": 158,
        "kneeAngle": 155.2,
        "hipAngle": 163.2,
        "torsoAngle": 80.6,
        "valgusRatio": 0.98,
        "phase": "eccentric"
      },
      {
        "t": 5.33,
        "frame": 160,
        "kneeAngle": 154.0,
        "hipAngle": 162.0,
        "torsoAngle": 80.2,
        "valgusRatio": 0.98,
        "phase": "eccentric"
      },
      {
        "t": 5.4,
        "frame": 162,
        "kneeAngle": 152.8,
        "hipAngle": 160.8,
        "torsoAngle": 79.9,
        "valgusRatio": 0.98,
        "phase": "eccentric"
      },
      {
        "t": 5.47,
        "frame": 164,
        "kneeAngle": 151.6,
        "hipAngle": 159.6,
        "torsoAngle": 79.5,
        "valgusRatio": 0.98,
        "phase": "eccentric"
      },
      {
        "t": 5.53,
        "frame": 166,
        "kneeAngle": 150.4,
        "hipAngle": 158.4,
        "torsoAngle": 79.2,
        "valgusRatio": 0.98,
        "phase": "eccentric"
      },
      {
        "t": 5.6,
        "frame": 168,
        "kneeAngle": 149.2,
        "hipAngle": 157.2,
        "torsoAngle": 78.8,
        "valgusRatio": 0.98,
        "phase": "eccentric"
      },
      {
        "t": 5.67,
        "frame": 170,
        "kneeAngle": 148.0,
        "hipAngle": 156.0,
        "torsoAngle": 78.5,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 5.73,
        "frame": 172,
        "kneeAngle": 146.8,
        "hipAngle": 154.8,
        "torsoAngle": 78.1,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 5.8,
        "frame": 174,
        "kneeAngle": 145.6,
        "hipAngle": 153.6,
        "torsoAngle": 77.8,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 5.87,
        "frame": 176,
        "kneeAngle": 144.4,
        "hipAngle": 152.4,
        "torsoAngle": 77.4,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 5.93,
        "frame": 178,
        "kneeAngle": 143.2,
        "hipAngle": 151.2,
        "torsoAngle": 77.1,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 6.0,
        "frame": 180,
        "kneeAngle": 142.1,
        "hipAngle": 150.1,
        "torsoAngle": 76.7,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 6.07,
        "frame": 182,
        "kneeAngle": 140.9,
        "hipAngle": 148.9,
        "torsoAngle": 76.4,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 6.13,
        "frame": 184,
        "kneeAngle": 139.7,
        "hipAngle": 147.7,
        "torsoAngle": 76.0,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 6.2,
        "frame": 186,
        "kneeAngle": 138.6,
        "hipAngle": 146.6,
        "torsoAngle": 75.7,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 6.27,
        "frame": 188,
        "kneeAngle": 137.4,
        "hipAngle": 145.4,
        "torsoAngle": 75.4,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 6.33,
        "frame": 190,
        "kneeAngle": 136.2,
        "hipAngle": 144.2,
        "torsoAngle": 75.0,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 6.4,
        "frame": 192,
        "kneeAngle": 135.1,
        "hipAngle": 143.1,
        "torsoAngle": 74.7,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 6.47,
        "frame": 194,
        "kneeAngle": 134.0,
        "hipAngle": 142.0,
        "torsoAngle": 74.4,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 6.53,
        "frame": 196,
        "kneeAngle": 132.8,
        "hipAngle": 140.8,
        "torsoAngle": 74.0,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 6.6,
        "frame": 198,
        "kneeAngle": 131.7,
        "hipAngle": 139.7,
        "torsoAngle": 73.7,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 6.67,
        "frame": 200,
        "kneeAngle": 130.6,
        "hipAngle": 138.6,
        "torsoAngle": 73.4,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 6.73,
        "frame": 202,
        "kneeAngle": 129.5,
        "hipAngle": 137.5,
        "torsoAngle": 73.1,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 6.8,
        "frame": 204,
        "kneeAngle": 128.4,
        "hipAngle": 136.4,
        "torsoAngle": 72.7,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 6.87,
        "frame": 206,
        "kneeAngle": 127.3,
        "hipAngle": 135.3,
        "torsoAngle": 72.4,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 6.93,
        "frame": 208,
        "kneeAngle": 126.2,
        "hipAngle": 134.2,
        "torsoAngle": 72.1,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 7.0,
        "frame": 210,
        "kneeAngle": 125.1,
        "hipAngle": 133.1,
        "torsoAngle": 71.8,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 7.07,
        "frame": 212,
        "kneeAngle": 124.1,
        "hipAngle": 132.1,
        "torsoAngle": 71.5,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 7.13,
        "frame": 214,
        "kneeAngle": 123.0,
        "hipAngle": 131.0,
        "torsoAngle": 71.2,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 7.2,
        "frame": 216,
        "kneeAngle": 122.0,
        "hipAngle": 130.0,
        "torsoAngle": 70.8,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 7.27,
        "frame": 218,
        "kneeAngle": 120.9,
        "hipAngle": 128.9,
        "torsoAngle": 70.5,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 7.33,
        "frame": 220,
        "kneeAngle": 119.9,
        "hipAngle": 127.9,
        "torsoAngle": 70.2,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 7.4,
        "frame": 222,
        "kneeAngle": 118.9,
        "hipAngle": 126.9,
        "torsoAngle": 69.9,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 7.47,
        "frame": 224,
        "kneeAngle": 117.9,
        "hipAngle": 125.9,
        "torsoAngle": 69.6,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 7.53,
        "frame": 226,
        "kneeAngle": 116.9,
        "hipAngle": 124.9,
        "torsoAngle": 69.4,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 7.6,
        "frame": 228,
        "kneeAngle": 115.9,
        "hipAngle": 123.9,
        "torsoAngle": 69.1,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 7.67,
        "frame": 230,
        "kneeAngle": 114.9,
        "hipAngle": 122.9,
        "torsoAngle": 68.8,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 7.73,
        "frame": 232,
        "kneeAngle": 114.0,
        "hipAngle": 122.0,
        "torsoAngle": 68.5,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 7.8,
        "frame": 234,
        "kneeAngle": 113.0,
        "hipAngle": 121.0,
        "torsoAngle": 68.2,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 7.87,
        "frame": 236,
        "kneeAngle": 112.1,
        "hipAngle": 120.1,
        "torsoAngle": 67.9,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 7.93,
        "frame": 238,
        "kneeAngle": 111.2,
        "hipAngle": 119.2,
        "torsoAngle": 67.7,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 8.0,
        "frame": 240,
        "kneeAngle": 110.3,
        "hipAngle": 118.3,
        "torsoAngle": 67.4,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 8.07,
        "frame": 242,
        "kneeAngle": 109.4,
        "hipAngle": 117.4,
        "torsoAngle": 67.1,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 8.13,
        "frame": 244,
        "kneeAngle": 108.5,
        "hipAngle": 116.5,
        "torsoAngle": 66.9,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 8.2,
        "frame": 245,
        "kneeAngle": 107.6,
        "hipAngle": 115.6,
        "torsoAngle": 66.6,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 8.27,
        "frame": 248,
        "kneeAngle": 106.8,
        "hipAngle": 114.8,
        "torsoAngle": 66.4,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 8.33,
        "frame": 250,
        "kneeAngle": 105.9,
        "hipAngle": 113.9,
        "torsoAngle": 66.1,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 8.4,
        "frame": 252,
        "kneeAngle": 105.1,
        "hipAngle": 113.1,
        "torsoAngle": 65.9,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 8.47,
        "frame": 254,
        "kneeAngle": 104.3,
        "hipAngle": 112.3,
        "torsoAngle": 65.7,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 8.53,
        "frame": 256,
        "kneeAngle": 103.5,
        "hipAngle": 111.5,
        "torsoAngle": 65.4,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 8.6,
        "frame": 258,
        "kneeAngle": 102.7,
        "hipAngle": 110.7,
        "torsoAngle": 65.2,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 8.67,
        "frame": 260,
        "kneeAngle": 101.9,
        "hipAngle": 109.9,
        "torsoAngle": 65.0,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 8.73,
        "frame": 262,
        "kneeAngle": 101.1,
        "hipAngle": 109.1,
        "torsoAngle": 64.7,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 8.8,
        "frame": 264,
        "kneeAngle": 100.4,
        "hipAngle": 108.4,
        "torsoAngle": 64.5,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 8.87,
        "frame": 266,
        "kneeAngle": 99.7,
        "hipAngle": 107.7,
        "torsoAngle": 64.3,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 8.93,
        "frame": 268,
        "kneeAngle": 99.0,
        "hipAngle": 107.0,
        "torsoAngle": 64.1,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 9.0,
        "frame": 270,
        "kneeAngle": 98.3,
        "hipAngle": 106.3,
        "torsoAngle": 63.9,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 9.07,
        "frame": 272,
        "kneeAngle": 97.6,
        "hipAngle": 105.6,
        "torsoAngle": 63.7,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 9.13,
        "frame": 274,
        "kneeAngle": 96.9,
        "hipAngle": 104.9,
        "torsoAngle": 63.5,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 9.2,
        "frame": 276,
        "kneeAngle": 96.3,
        "hipAngle": 104.3,
        "torsoAngle": 63.3,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 9.27,
        "frame": 278,
        "kneeAngle": 95.7,
        "hipAngle": 103.7,
        "torsoAngle": 63.1,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 9.33,
        "frame": 280,
        "kneeAngle": 95.0,
        "hipAngle": 103.0,
        "torsoAngle": 62.9,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 9.4,
        "frame": 282,
        "kneeAngle": 94.5,
        "hipAngle": 102.5,
        "torsoAngle": 62.8,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 9.47,
        "frame": 284,
        "kneeAngle": 93.9,
        "hipAngle": 101.9,
        "torsoAngle": 62.6,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 9.53,
        "frame": 286,
        "kneeAngle": 93.3,
        "hipAngle": 101.3,
        "torsoAngle": 62.4,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 9.6,
        "frame": 288,
        "kneeAngle": 92.8,
        "hipAngle": 100.8,
        "torsoAngle": 62.3,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 9.67,
        "frame": 290,
        "kneeAngle": 92.2,
        "hipAngle": 100.2,
        "torsoAngle": 62.1,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 9.73,
        "frame": 292,
        "kneeAngle": 91.7,
        "hipAngle": 99.7,
        "torsoAngle": 62.0,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 9.8,
        "frame": 294,
        "kneeAngle": 91.2,
        "hipAngle": 99.2,
        "torsoAngle": 61.8,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 9.87,
        "frame": 296,
        "kneeAngle": 90.8,
        "hipAngle": 98.8,
        "torsoAngle": 61.7,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 9.93,
        "frame": 298,
        "kneeAngle": 90.3,
        "hipAngle": 98.3,
        "torsoAngle": 61.6,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 10.0,
        "frame": 300,
        "kneeAngle": 89.9,
        "hipAngle": 97.9,
        "torsoAngle": 61.4,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 10.07,
        "frame": 302,
        "kneeAngle": 89.5,
        "hipAngle": 97.5,
        "torsoAngle": 61.3,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 10.13,
        "frame": 304,
        "kneeAngle": 89.1,
        "hipAngle": 97.1,
        "torsoAngle": 61.2,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 10.2,
        "frame": 306,
        "kneeAngle": 88.7,
        "hipAngle": 96.7,
        "torsoAngle": 61.1,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 10.27,
        "frame": 308,
        "kneeAngle": 88.3,
        "hipAngle": 96.3,
        "torsoAngle": 61.0,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 10.33,
        "frame": 310,
        "kneeAngle": 88.0,
        "hipAngle": 96.0,
        "torsoAngle": 60.9,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 10.4,
        "frame": 312,
        "kneeAngle": 87.6,
        "hipAngle": 95.6,
        "torsoAngle": 60.8,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 10.47,
        "frame": 314,
        "kneeAngle": 87.3,
        "hipAngle": 95.3,
        "torsoAngle": 60.7,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 10.53,
        "frame": 316,
        "kneeAngle": 87.0,
        "hipAngle": 95.0,
        "torsoAngle": 60.6,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 10.6,
        "frame": 318,
        "kneeAngle": 86.8,
        "hipAngle": 94.8,
        "torsoAngle": 60.5,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 10.67,
        "frame": 320,
        "kneeAngle": 86.5,
        "hipAngle": 94.5,
        "torsoAngle": 60.4,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 10.73,
        "frame": 322,
        "kneeAngle": 86.3,
        "hipAngle": 94.3,
        "torsoAngle": 60.4,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 10.8,
        "frame": 324,
        "kneeAngle": 86.1,
        "hipAngle": 94.1,
        "torsoAngle": 60.3,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 10.87,
        "frame": 326,
        "kneeAngle": 85.9,
        "hipAngle": 93.9,
        "torsoAngle": 60.3,
        "valgusRatio": 0.93,
        "phase": "eccentric"
      },
      {
        "t": 10.93,
        "frame": 328,
        "kneeAngle": 85.7,
        "hipAngle": 93.7,
        "torsoAngle": 60.2,
        "valgusRatio": 0.93,
        "phase": "eccentric"
      },
      {
        "t": 11.0,
        "frame": 330,
        "kneeAngle": 85.5,
        "hipAngle": 93.5,
        "torsoAngle": 60.2,
        "valgusRatio": 0.93,
        "phase": "eccentric"
      },
      {
        "t": 11.07,
        "frame": 332,
        "kneeAngle": 85.4,
        "hipAngle": 93.4,
        "torsoAngle": 60.1,
        "valgusRatio": 0.93,
        "phase": "eccentric"
      },
      {
        "t": 11.13,
        "frame": 334,
        "kneeAngle": 85.3,
        "hipAngle": 93.3,
        "torsoAngle": 60.1,
        "valgusRatio": 0.93,
        "phase": "eccentric"
      },
      {
        "t": 11.2,
        "frame": 336,
        "kneeAngle": 85.2,
        "hipAngle": 93.2,
        "torsoAngle": 60.1,
        "valgusRatio": 0.93,
        "phase": "eccentric"
      },
      {
        "t": 11.27,
        "frame": 338,
        "kneeAngle": 85.1,
        "hipAngle": 93.1,
        "torsoAngle": 60.0,
        "valgusRatio": 0.93,
        "phase": "eccentric"
      },
      {
        "t": 11.33,
        "frame": 340,
        "kneeAngle": 85.1,
        "hipAngle": 93.1,
        "torsoAngle": 60.0,
        "valgusRatio": 0.93,
        "phase": "eccentric"
      },
      {
        "t": 11.4,
        "frame": 342,
        "kneeAngle": 85.0,
        "hipAngle": 93.0,
        "torsoAngle": 60.0,
        "valgusRatio": 0.93,
        "phase": "eccentric"
      },
      {
        "t": 11.47,
        "frame": 344,
        "kneeAngle": 85.0,
        "hipAngle": 93.0,
        "torsoAngle": 60.0,
        "valgusRatio": 0.93,
        "phase": "eccentric"
      },
      {
        "t": 11.53,
        "frame": 346,
        "kneeAngle": 85.7,
        "hipAngle": 93.6,
        "torsoAngle": 60.2,
        "valgusRatio": 0.93,
        "phase": "concentric"
      },
      {
        "t": 11.6,
        "frame": 348,
        "kneeAngle": 87.1,
        "hipAngle": 94.9,
        "torsoAngle": 60.5,
        "valgusRatio": 0.93,
        "phase": "concentric"
      },
      {
        "t": 11.67,
        "frame": 350,
        "kneeAngle": 88.4,
        "hipAngle": 96.1,
        "torsoAngle": 60.9,
        "valgusRatio": 0.93,
        "phase": "concentric"
      },
      {
        "t": 11.73,
        "frame": 352,
        "kneeAngle": 89.8,
        "hipAngle": 97.3,
        "torsoAngle": 61.2,
        "valgusRatio": 0.93,
        "phase": "concentric"
      },
      {
        "t": 11.8,
        "frame": 354,
        "kneeAngle": 91.2,
        "hipAngle": 98.6,
        "torsoAngle": 61.5,
        "valgusRatio": 0.93,
        "phase": "concentric"
      },
      {
        "t": 11.87,
        "frame": 356,
        "kneeAngle": 92.5,
        "hipAngle": 99.8,
        "torsoAngle": 61.9,
        "valgusRatio": 0.93,
        "phase": "concentric"
      },
      {
        "t": 11.93,
        "frame": 358,
        "kneeAngle": 93.9,
        "hipAngle": 101.0,
        "torsoAngle": 62.2,
        "valgusRatio": 0.93,
        "phase": "concentric"
      },
      {
        "t": 12.0,
        "frame": 360,
        "kneeAngle": 95.3,
        "hipAngle": 102.2,
        "torsoAngle": 62.6,
        "valgusRatio": 0.93,
        "phase": "concentric"
      },
      {
        "t": 12.07,
        "frame": 362,
        "kneeAngle": 96.6,
        "hipAngle": 103.5,
        "torsoAngle": 62.9,
        "valgusRatio": 0.94,
        "phase": "concentric"
      },
      {
        "t": 12.13,
        "frame": 364,
        "kneeAngle": 98.0,
        "hipAngle": 104.7,
        "torsoAngle": 63.2,
        "valgusRatio": 0.94,
        "phase": "concentric"
      },
      {
        "t": 12.2,
        "frame": 366,
        "kneeAngle": 99.3,
        "hipAngle": 105.9,
        "torsoAngle": 63.6,
        "valgusRatio": 0.94,
        "phase": "concentric"
      },
      {
        "t": 12.27,
        "frame": 368,
        "kneeAngle": 100.7,
        "hipAngle": 107.1,
        "torsoAngle": 63.9,
        "valgusRatio": 0.94,
        "phase": "concentric"
      },
      {
        "t": 12.33,
        "frame": 370,
        "kneeAngle": 102.0,
        "hipAngle": 108.3,
        "torsoAngle": 64.3,
        "valgusRatio": 0.94,
        "phase": "concentric"
      },
      {
        "t": 12.4,
        "frame": 372,
        "kneeAngle": 103.4,
        "hipAngle": 109.5,
        "torsoAngle": 64.6,
        "valgusRatio": 0.94,
        "phase": "concentric"
      },
      {
        "t": 12.47,
        "frame": 374,
        "kneeAngle": 104.7,
        "hipAngle": 110.7,
        "torsoAngle": 64.9,
        "valgusRatio": 0.94,
        "phase": "concentric"
      },
      {
        "t": 12.53,
        "frame": 376,
        "kneeAngle": 106.0,
        "hipAngle": 111.9,
        "torsoAngle": 65.3,
        "valgusRatio": 0.94,
        "phase": "concentric"
      },
      {
        "t": 12.6,
        "frame": 378,
        "kneeAngle": 107.4,
        "hipAngle": 113.1,
        "torsoAngle": 65.6,
        "valgusRatio": 0.94,
        "phase": "concentric"
      },
      {
        "t": 12.67,
        "frame": 380,
        "kneeAngle": 108.7,
        "hipAngle": 114.3,
        "torsoAngle": 65.9,
        "valgusRatio": 0.94,
        "phase": "concentric"
      },
      {
        "t": 12.73,
        "frame": 382,
        "kneeAngle": 110.0,
        "hipAngle": 115.5,
        "torsoAngle": 66.2,
        "valgusRatio": 0.94,
        "phase": "concentric"
      },
      {
        "t": 12.8,
        "frame": 384,
        "kneeAngle": 111.3,
        "hipAngle": 116.7,
        "torsoAngle": 66.6,
        "valgusRatio": 0.94,
        "phase": "concentric"
      },
      {
        "t": 12.87,
        "frame": 386,
        "kneeAngle": 112.6,
        "hipAngle": 117.8,
        "torsoAngle": 66.9,
        "valgusRatio": 0.94,
        "phase": "concentric"
      },
      {
        "t": 12.93,
        "frame": 388,
        "kneeAngle": 113.9,
        "hipAngle": 119.0,
        "torsoAngle": 67.2,
        "valgusRatio": 0.94,
        "phase": "concentric"
      },
      {
        "t": 13.0,
        "frame": 390,
        "kneeAngle": 115.1,
        "hipAngle": 120.1,
        "torsoAngle": 67.5,
        "valgusRatio": 0.94,
        "phase": "concentric"
      },
      {
        "t": 13.07,
        "frame": 392,
        "kneeAngle": 116.4,
        "hipAngle": 121.3,
        "torsoAngle": 67.9,
        "valgusRatio": 0.95,
        "phase": "concentric"
      },
      {
        "t": 13.13,
        "frame": 394,
        "kneeAngle": 117.7,
        "hipAngle": 122.4,
        "torsoAngle": 68.2,
        "valgusRatio": 0.95,
        "phase": "concentric"
      },
      {
        "t": 13.2,
        "frame": 396,
        "kneeAngle": 118.9,
        "hipAngle": 123.5,
        "torsoAngle": 68.5,
        "valgusRatio": 0.95,
        "phase": "concentric"
      },
      {
        "t": 13.27,
        "frame": 398,
        "kneeAngle": 120.2,
        "hipAngle": 124.6,
        "torsoAngle": 68.8,
        "valgusRatio": 0.95,
        "phase": "concentric"
      },
      {
        "t": 13.33,
        "frame": 400,
        "kneeAngle": 121.4,
        "hipAngle": 125.7,
        "torsoAngle": 69.1,
        "valgusRatio": 0.95,
        "phase": "concentric"
      },
      {
        "t": 13.4,
        "frame": 402,
        "kneeAngle": 122.6,
        "hipAngle": 126.8,
        "torsoAngle": 69.4,
        "valgusRatio": 0.95,
        "phase": "concentric"
      },
      {
        "t": 13.47,
        "frame": 404,
        "kneeAngle": 123.8,
        "hipAngle": 127.9,
        "torsoAngle": 69.7,
        "valgusRatio": 0.95,
        "phase": "concentric"
      },
      {
        "t": 13.53,
        "frame": 406,
        "kneeAngle": 125.0,
        "hipAngle": 129.0,
        "torsoAngle": 70.0,
        "valgusRatio": 0.95,
        "phase": "concentric"
      },
      {
        "t": 13.6,
        "frame": 408,
        "kneeAngle": 126.2,
        "hipAngle": 130.1,
        "torsoAngle": 70.3,
        "valgusRatio": 0.95,
        "phase": "concentric"
      },
      {
        "t": 13.67,
        "frame": 410,
        "kneeAngle": 127.4,
        "hipAngle": 131.1,
        "torsoAngle": 70.6,
        "valgusRatio": 0.95,
        "phase": "concentric"
      },
      {
        "t": 13.73,
        "frame": 412,
        "kneeAngle": 128.5,
        "hipAngle": 132.2,
        "torsoAngle": 70.9,
        "valgusRatio": 0.95,
        "phase": "concentric"
      },
      {
        "t": 13.8,
        "frame": 414,
        "kneeAngle": 129.7,
        "hipAngle": 133.2,
        "torsoAngle": 71.2,
        "valgusRatio": 0.95,
        "phase": "concentric"
      },
      {
        "t": 13.87,
        "frame": 416,
        "kneeAngle": 130.8,
        "hipAngle": 134.2,
        "torsoAngle": 71.4,
        "valgusRatio": 0.95,
        "phase": "concentric"
      },
      {
        "t": 13.93,
        "frame": 418,
        "kneeAngle": 131.9,
        "hipAngle": 135.2,
        "torsoAngle": 71.7,
        "valgusRatio": 0.95,
        "phase": "concentric"
      },
      {
        "t": 14.0,
        "frame": 420,
        "kneeAngle": 133.0,
        "hipAngle": 136.2,
        "torsoAngle": 72.0,
        "valgusRatio": 0.95,
        "phase": "concentric"
      },
      {
        "t": 14.07,
        "frame": 422,
        "kneeAngle": 134.1,
        "hipAngle": 137.2,
        "torsoAngle": 72.3,
        "valgusRatio": 0.96,
        "phase": "concentric"
      },
      {
        "t": 14.13,
        "frame": 424,
        "kneeAngle": 135.2,
        "hipAngle": 138.2,
        "torsoAngle": 72.5,
        "valgusRatio": 0.96,
        "phase": "concentric"
      },
      {
        "t": 14.2,
        "frame": 426,
        "kneeAngle": 136.2,
        "hipAngle": 139.1,
        "torsoAngle": 72.8,
        "valgusRatio": 0.96,
        "phase": "concentric"
      },
      {
        "t": 14.27,
        "frame": 428,
        "kneeAngle": 137.3,
        "hipAngle": 140.1,
        "torsoAngle": 73.1,
        "valgusRatio": 0.96,
        "phase": "concentric"
      },
      {
        "t": 14.33,
        "frame": 430,
        "kneeAngle": 138.3,
        "hipAngle": 141.0,
        "torsoAngle": 73.3,
        "valgusRatio": 0.96,
        "phase": "concentric"
      },
      {
        "t": 14.4,
        "frame": 432,
        "kneeAngle": 139.3,
        "hipAngle": 141.9,
        "torsoAngle": 73.6,
        "valgusRatio": 0.96,
        "phase": "concentric"
      },
      {
        "t": 14.47,
        "frame": 434,
        "kneeAngle": 140.3,
        "hipAngle": 142.8,
        "torsoAngle": 73.8,
        "valgusRatio": 0.96,
        "phase": "concentric"
      },
      {
        "t": 14.53,
        "frame": 436,
        "kneeAngle": 141.3,
        "hipAngle": 143.7,
        "torsoAngle": 74.1,
        "valgusRatio": 0.96,
        "phase": "concentric"
      },
      {
        "t": 14.6,
        "frame": 438,
        "kneeAngle": 142.3,
        "hipAngle": 144.6,
        "torsoAngle": 74.3,
        "valgusRatio": 0.96,
        "phase": "concentric"
      },
      {
        "t": 14.67,
        "frame": 440,
        "kneeAngle": 143.2,
        "hipAngle": 145.4,
        "torsoAngle": 74.6,
        "valgusRatio": 0.96,
        "phase": "concentric"
      },
      {
        "t": 14.73,
        "frame": 442,
        "kneeAngle": 144.2,
        "hipAngle": 146.3,
        "torsoAngle": 74.8,
        "valgusRatio": 0.96,
        "phase": "concentric"
      },
      {
        "t": 14.8,
        "frame": 444,
        "kneeAngle": 145.1,
        "hipAngle": 147.1,
        "torsoAngle": 75.0,
        "valgusRatio": 0.96,
        "phase": "concentric"
      },
      {
        "t": 14.87,
        "frame": 446,
        "kneeAngle": 146.0,
        "hipAngle": 147.9,
        "torsoAngle": 75.2,
        "valgusRatio": 0.96,
        "phase": "concentric"
      },
      {
        "t": 14.93,
        "frame": 448,
        "kneeAngle": 146.9,
        "hipAngle": 148.7,
        "torsoAngle": 75.5,
        "valgusRatio": 0.96,
        "phase": "concentric"
      },
      {
        "t": 15.0,
        "frame": 450,
        "kneeAngle": 147.7,
        "hipAngle": 149.5,
        "torsoAngle": 75.7,
        "valgusRatio": 0.96,
        "phase": "concentric"
      },
      {
        "t": 15.07,
        "frame": 452,
        "kneeAngle": 148.6,
        "hipAngle": 150.2,
        "torsoAngle": 75.9,
        "valgusRatio": 0.97,
        "phase": "concentric"
      },
      {
        "t": 15.13,
        "frame": 454,
        "kneeAngle": 149.4,
        "hipAngle": 151.0,
        "torsoAngle": 76.1,
        "valgusRatio": 0.97,
        "phase": "concentric"
      },
      {
        "t": 15.2,
        "frame": 456,
        "kneeAngle": 150.2,
        "hipAngle": 151.7,
        "torsoAngle": 76.3,
        "valgusRatio": 0.97,
        "phase": "concentric"
      },
      {
        "t": 15.27,
        "frame": 458,
        "kneeAngle": 151.0,
        "hipAngle": 152.4,
        "torsoAngle": 76.5,
        "valgusRatio": 0.97,
        "phase": "concentric"
      },
      {
        "t": 15.33,
        "frame": 460,
        "kneeAngle": 151.8,
        "hipAngle": 153.1,
        "torsoAngle": 76.7,
        "valgusRatio": 0.97,
        "phase": "concentric"
      },
      {
        "t": 15.4,
        "frame": 462,
        "kneeAngle": 152.5,
        "hipAngle": 153.8,
        "torsoAngle": 76.9,
        "valgusRatio": 0.97,
        "phase": "concentric"
      },
      {
        "t": 15.47,
        "frame": 464,
        "kneeAngle": 153.2,
        "hipAngle": 154.4,
        "torsoAngle": 77.1,
        "valgusRatio": 0.97,
        "phase": "concentric"
      },
      {
        "t": 15.53,
        "frame": 466,
        "kneeAngle": 153.9,
        "hipAngle": 155.0,
        "torsoAngle": 77.2,
        "valgusRatio": 0.97,
        "phase": "concentric"
      },
      {
        "t": 15.6,
        "frame": 468,
        "kneeAngle": 154.6,
        "hipAngle": 155.7,
        "torsoAngle": 77.4,
        "valgusRatio": 0.97,
        "phase": "concentric"
      },
      {
        "t": 15.67,
        "frame": 470,
        "kneeAngle": 155.3,
        "hipAngle": 156.3,
        "torsoAngle": 77.6,
        "valgusRatio": 0.97,
        "phase": "concentric"
      },
      {
        "t": 15.73,
        "frame": 472,
        "kneeAngle": 155.9,
        "hipAngle": 156.8,
        "torsoAngle": 77.7,
        "valgusRatio": 0.97,
        "phase": "concentric"
      },
      {
        "t": 15.8,
        "frame": 474,
        "kneeAngle": 156.6,
        "hipAngle": 157.4,
        "torsoAngle": 77.9,
        "valgusRatio": 0.97,
        "phase": "concentric"
      },
      {
        "t": 15.87,
        "frame": 476,
        "kneeAngle": 157.2,
        "hipAngle": 157.9,
        "torsoAngle": 78.0,
        "valgusRatio": 0.97,
        "phase": "concentric"
      },
      {
        "t": 15.93,
        "frame": 478,
        "kneeAngle": 157.7,
        "hipAngle": 158.5,
        "torsoAngle": 78.2,
        "valgusRatio": 0.97,
        "phase": "concentric"
      },
      {
        "t": 16.0,
        "frame": 480,
        "kneeAngle": 158.3,
        "hipAngle": 159.0,
        "torsoAngle": 78.3,
        "valgusRatio": 0.97,
        "phase": "concentric"
      },
      {
        "t": 16.07,
        "frame": 482,
        "kneeAngle": 158.8,
        "hipAngle": 159.5,
        "torsoAngle": 78.5,
        "valgusRatio": 0.97,
        "phase": "concentric"
      },
      {
        "t": 16.13,
        "frame": 484,
        "kneeAngle": 159.4,
        "hipAngle": 159.9,
        "torsoAngle": 78.6,
        "valgusRatio": 0.98,
        "phase": "concentric"
      },
      {
        "t": 16.2,
        "frame": 486,
        "kneeAngle": 159.9,
        "hipAngle": 160.4,
        "torsoAngle": 78.7,
        "valgusRatio": 0.98,
        "phase": "concentric"
      },
      {
        "t": 16.27,
        "frame": 488,
        "kneeAngle": 160.3,
        "hipAngle": 160.8,
        "torsoAngle": 78.8,
        "valgusRatio": 0.98,
        "phase": "concentric"
      },
      {
        "t": 16.33,
        "frame": 489,
        "kneeAngle": 160.8,
        "hipAngle": 161.2,
        "torsoAngle": 78.9,
        "valgusRatio": 0.98,
        "phase": "concentric"
      },
      {
        "t": 16.4,
        "frame": 491,
        "kneeAngle": 161.2,
        "hipAngle": 161.6,
        "torsoAngle": 79.1,
        "valgusRatio": 0.98,
        "phase": "concentric"
      },
      {
        "t": 16.47,
        "frame": 493,
        "kneeAngle": 161.6,
        "hipAngle": 162.0,
        "torsoAngle": 79.2,
        "valgusRatio": 0.98,
        "phase": "concentric"
      },
      {
        "t": 16.53,
        "frame": 496,
        "kneeAngle": 162.0,
        "hipAngle": 162.3,
        "torsoAngle": 79.3,
        "valgusRatio": 0.98,
        "phase": "concentric"
      },
      {
        "t": 16.6,
        "frame": 498,
        "kneeAngle": 162.4,
        "hipAngle": 162.6,
        "torsoAngle": 79.3,
        "valgusRatio": 0.98,
        "phase": "concentric"
      },
      {
        "t": 16.67,
        "frame": 500,
        "kneeAngle": 162.7,
        "hipAngle": 162.9,
        "torsoAngle": 79.4,
        "valgusRatio": 0.98,
        "phase": "concentric"
      },
      {
        "t": 16.73,
        "frame": 502,
        "kneeAngle": 163.0,
        "hipAngle": 163.2,
        "torsoAngle": 79.5,
        "valgusRatio": 0.98,
        "phase": "concentric"
      },
      {
        "t": 16.8,
        "frame": 504,
        "kneeAngle": 163.3,
        "hipAngle": 163.5,
        "torsoAngle": 79.6,
        "valgusRatio": 0.98,
        "phase": "concentric"
      },
      {
        "t": 16.87,
        "frame": 506,
        "kneeAngle": 163.6,
        "hipAngle": 163.7,
        "torsoAngle": 79.6,
        "valgusRatio": 0.98,
        "phase": "concentric"
      },
      {
        "t": 16.93,
        "frame": 508,
        "kneeAngle": 163.8,
        "hipAngle": 163.9,
        "torsoAngle": 79.7,
        "valgusRatio": 0.98,
        "phase": "concentric"
      },
      {
        "t": 17.0,
        "frame": 510,
        "kneeAngle": 164.0,
        "hipAngle": 164.1,
        "torsoAngle": 79.8,
        "valgusRatio": 0.98,
        "phase": "concentric"
      },
      {
        "t": 17.07,
        "frame": 512,
        "kneeAngle": 164.2,
        "hipAngle": 164.3,
        "torsoAngle": 79.8,
        "valgusRatio": 0.98,
        "phase": "concentric"
      },
      {
        "t": 17.13,
        "frame": 514,
        "kneeAngle": 164.4,
        "hipAngle": 164.5,
        "torsoAngle": 79.9,
        "valgusRatio": 0.99,
        "phase": "concentric"
      },
      {
        "t": 17.2,
        "frame": 516,
        "kneeAngle": 164.6,
        "hipAngle": 164.6,
        "torsoAngle": 79.9,
        "valgusRatio": 0.99,
        "phase": "concentric"
      },
      {
        "t": 17.27,
        "frame": 518,
        "kneeAngle": 164.7,
        "hipAngle": 164.7,
        "torsoAngle": 79.9,
        "valgusRatio": 0.99,
        "phase": "concentric"
      },
      {
        "t": 17.33,
        "frame": 520,
        "kneeAngle": 164.8,
        "hipAngle": 164.8,
        "torsoAngle": 80.0,
        "valgusRatio": 0.99,
        "phase": "concentric"
      },
      {
        "t": 17.4,
        "frame": 522,
        "kneeAngle": 164.9,
        "hipAngle": 164.9,
        "torsoAngle": 80.0,
        "valgusRatio": 0.99,
        "phase": "concentric"
      },
      {
        "t": 17.47,
        "frame": 524,
        "kneeAngle": 165.0,
        "hipAngle": 165.0,
        "torsoAngle": 80.0,
        "valgusRatio": 0.99,
        "phase": "concentric"
      },
      {
        "t": 17.53,
        "frame": 526,
        "kneeAngle": 165.0,
        "hipAngle": 165.0,
        "torsoAngle": 80.0,
        "valgusRatio": 0.99,
        "phase": "concentric"
      },
      {
        "t": 17.6,
        "frame": 528,
        "kneeAngle": 165.0,
        "hipAngle": 165.0,
        "torsoAngle": 80.0,
        "valgusRatio": 0.99,
        "phase": "eccentric"
      },
      {
        "t": 17.67,
        "frame": 530,
        "kneeAngle": 161.4,
        "hipAngle": 161.7,
        "torsoAngle": 78.9,
        "valgusRatio": 0.98,
        "phase": "eccentric"
      },
      {
        "t": 17.73,
        "frame": 532,
        "kneeAngle": 157.8,
        "hipAngle": 158.3,
        "torsoAngle": 77.7,
        "valgusRatio": 0.97,
        "phase": "eccentric"
      },
      {
        "t": 17.8,
        "frame": 534,
        "kneeAngle": 154.2,
        "hipAngle": 155.0,
        "torsoAngle": 76.6,
        "valgusRatio": 0.96,
        "phase": "eccentric"
      },
      {
        "t": 17.87,
        "frame": 536,
        "kneeAngle": 150.6,
        "hipAngle": 151.8,
        "torsoAngle": 75.5,
        "valgusRatio": 0.95,
        "phase": "eccentric"
      },
      {
        "t": 17.93,
        "frame": 538,
        "kneeAngle": 147.1,
        "hipAngle": 148.5,
        "torsoAngle": 74.3,
        "valgusRatio": 0.94,
        "phase": "eccentric"
      },
      {
        "t": 18.0,
        "frame": 540,
        "kneeAngle": 143.6,
        "hipAngle": 145.3,
        "torsoAngle": 73.2,
        "valgusRatio": 0.93,
        "phase": "eccentric"
      },
      {
        "t": 18.07,
        "frame": 542,
        "kneeAngle": 140.1,
        "hipAngle": 142.1,
        "torsoAngle": 72.2,
        "valgusRatio": 0.92,
        "phase": "eccentric"
      },
      {
        "t": 18.13,
        "frame": 544,
        "kneeAngle": 136.8,
        "hipAngle": 139.0,
        "torsoAngle": 71.1,
        "valgusRatio": 0.91,
        "phase": "eccentric"
      },
      {
        "t": 18.2,
        "frame": 546,
        "kneeAngle": 133.4,
        "hipAngle": 135.9,
        "torsoAngle": 70.0,
        "valgusRatio": 0.9,
        "phase": "eccentric"
      },
      {
        "t": 18.27,
        "frame": 548,
        "kneeAngle": 130.2,
        "hipAngle": 132.9,
        "torsoAngle": 69.0,
        "valgusRatio": 0.89,
        "phase": "eccentric"
      },
      {
        "t": 18.33,
        "frame": 550,
        "kneeAngle": 127.0,
        "hipAngle": 130.0,
        "torsoAngle": 68.0,
        "valgusRatio": 0.88,
        "phase": "eccentric"
      },
      {
        "t": 18.4,
        "frame": 552,
        "kneeAngle": 123.9,
        "hipAngle": 127.2,
        "torsoAngle": 67.0,
        "valgusRatio": 0.87,
        "phase": "eccentric"
      },
      {
        "t": 18.47,
        "frame": 554,
        "kneeAngle": 120.9,
        "hipAngle": 124.4,
        "torsoAngle": 66.1,
        "valgusRatio": 0.86,
        "phase": "eccentric"
      },
      {
        "t": 18.53,
        "frame": 556,
        "kneeAngle": 118.0,
        "hipAngle": 121.7,
        "torsoAngle": 65.2,
        "valgusRatio": 0.85,
        "phase": "eccentric"
      },
      {
        "t": 18.6,
        "frame": 558,
        "kneeAngle": 115.2,
        "hipAngle": 119.2,
        "torsoAngle": 64.3,
        "valgusRatio": 0.84,
        "phase": "eccentric"
      },
      {
        "t": 18.67,
        "frame": 560,
        "kneeAngle": 112.6,
        "hipAngle": 116.7,
        "torsoAngle": 63.4,
        "valgusRatio": 0.83,
        "phase": "eccentric"
      },
      {
        "t": 18.73,
        "frame": 562,
        "kneeAngle": 110.0,
        "hipAngle": 114.3,
        "torsoAngle": 62.6,
        "valgusRatio": 0.81,
        "phase": "eccentric"
      },
      {
        "t": 18.8,
        "frame": 564,
        "kneeAngle": 107.6,
        "hipAngle": 112.1,
        "torsoAngle": 61.9,
        "valgusRatio": 0.8,
        "phase": "eccentric"
      },
      {
        "t": 18.87,
        "frame": 566,
        "kneeAngle": 105.3,
        "hipAngle": 110.0,
        "torsoAngle": 61.1,
        "valgusRatio": 0.79,
        "phase": "eccentric"
      },
      {
        "t": 18.93,
        "frame": 568,
        "kneeAngle": 103.1,
        "hipAngle": 108.0,
        "torsoAngle": 60.5,
        "valgusRatio": 0.78,
        "phase": "eccentric"
      },
      {
        "t": 19.0,
        "frame": 570,
        "kneeAngle": 101.1,
        "hipAngle": 106.1,
        "torsoAngle": 59.8,
        "valgusRatio": 0.77,
        "phase": "eccentric"
      },
      {
        "t": 19.07,
        "frame": 572,
        "kneeAngle": 99.2,
        "hipAngle": 104.4,
        "torsoAngle": 59.2,
        "valgusRatio": 0.76,
        "phase": "eccentric"
      },
      {
        "t": 19.13,
        "frame": 574,
        "kneeAngle": 97.4,
        "hipAngle": 102.8,
        "torsoAngle": 58.7,
        "valgusRatio": 0.75,
        "phase": "eccentric"
      },
      {
        "t": 19.2,
        "frame": 576,
        "kneeAngle": 95.9,
        "hipAngle": 101.3,
        "torsoAngle": 58.2,
        "valgusRatio": 0.74,
        "phase": "eccentric"
      },
      {
        "t": 19.27,
        "frame": 578,
        "kneeAngle": 94.4,
        "hipAngle": 100.0,
        "torsoAngle": 57.7,
        "valgusRatio": 0.73,
        "phase": "eccentric"
      },
      {
        "t": 19.33,
        "frame": 580,
        "kneeAngle": 93.2,
        "hipAngle": 98.8,
        "torsoAngle": 57.3,
        "valgusRatio": 0.72,
        "phase": "eccentric"
      },
      {
        "t": 19.4,
        "frame": 582,
        "kneeAngle": 92.1,
        "hipAngle": 97.8,
        "torsoAngle": 57.0,
        "valgusRatio": 0.71,
        "phase": "eccentric"
      },
      {
        "t": 19.47,
        "frame": 584,
        "kneeAngle": 91.1,
        "hipAngle": 97.0,
        "torsoAngle": 56.7,
        "valgusRatio": 0.7,
        "phase": "eccentric"
      },
      {
        "t": 19.53,
        "frame": 586,
        "kneeAngle": 90.4,
        "hipAngle": 96.3,
        "torsoAngle": 56.4,
        "valgusRatio": 0.69,
        "phase": "eccentric"
      },
      {
        "t": 19.6,
        "frame": 588,
        "kneeAngle": 89.8,
        "hipAngle": 95.7,
        "torsoAngle": 56.2,
        "valgusRatio": 0.68,
        "phase": "eccentric"
      },
      {
        "t": 19.67,
        "frame": 590,
        "kneeAngle": 89.3,
        "hipAngle": 95.3,
        "torsoAngle": 56.1,
        "valgusRatio": 0.67,
        "phase": "eccentric"
      },
      {
        "t": 19.73,
        "frame": 592,
        "kneeAngle": 89.1,
        "hipAngle": 95.1,
        "torsoAngle": 56.0,
        "valgusRatio": 0.66,
        "phase": "eccentric"
      },
      {
        "t": 19.8,
        "frame": 594,
        "kneeAngle": 89.0,
        "hipAngle": 95.0,
        "torsoAngle": 56.0,
        "valgusRatio": 0.65,
        "phase": "concentric"
      },
      {
        "t": 19.87,
        "frame": 596,
        "kneeAngle": 92.9,
        "hipAngle": 98.3,
        "torsoAngle": 57.1,
        "valgusRatio": 0.66,
        "phase": "concentric"
      },
      {
        "t": 19.93,
        "frame": 598,
        "kneeAngle": 96.7,
        "hipAngle": 101.7,
        "torsoAngle": 58.3,
        "valgusRatio": 0.67,
        "phase": "concentric"
      },
      {
        "t": 20.0,
        "frame": 600,
        "kneeAngle": 100.5,
        "hipAngle": 105.0,
        "torsoAngle": 59.4,
        "valgusRatio": 0.68,
        "phase": "concentric"
      },
      {
        "t": 20.07,
        "frame": 602,
        "kneeAngle": 104.3,
        "hipAngle": 108.2,
        "torsoAngle": 60.5,
        "valgusRatio": 0.69,
        "phase": "concentric"
      },
      {
        "t": 20.13,
        "frame": 604,
        "kneeAngle": 108.1,
        "hipAngle": 111.5,
        "torsoAngle": 61.7,
        "valgusRatio": 0.7,
        "phase": "concentric"
      },
      {
        "t": 20.2,
        "frame": 606,
        "kneeAngle": 111.8,
        "hipAngle": 114.7,
        "torsoAngle": 62.8,
        "valgusRatio": 0.7,
        "phase": "concentric"
      },
      {
        "t": 20.27,
        "frame": 608,
        "kneeAngle": 115.5,
        "hipAngle": 117.9,
        "torsoAngle": 63.8,
        "valgusRatio": 0.71,
        "phase": "concentric"
      },
      {
        "t": 20.33,
        "frame": 610,
        "kneeAngle": 119.1,
        "hipAngle": 121.0,
        "torsoAngle": 64.9,
        "valgusRatio": 0.72,
        "phase": "concentric"
      },
      {
        "t": 20.4,
        "frame": 612,
        "kneeAngle": 122.6,
        "hipAngle": 124.1,
        "torsoAngle": 66.0,
        "valgusRatio": 0.73,
        "phase": "concentric"
      },
      {
        "t": 20.47,
        "frame": 614,
        "kneeAngle": 126.1,
        "hipAngle": 127.1,
        "torsoAngle": 67.0,
        "valgusRatio": 0.74,
        "phase": "concentric"
      },
      {
        "t": 20.53,
        "frame": 616,
        "kneeAngle": 129.5,
        "hipAngle": 130.0,
        "torsoAngle": 68.0,
        "valgusRatio": 0.75,
        "phase": "concentric"
      },
      {
        "t": 20.6,
        "frame": 618,
        "kneeAngle": 132.8,
        "hipAngle": 132.8,
        "torsoAngle": 69.0,
        "valgusRatio": 0.76,
        "phase": "concentric"
      },
      {
        "t": 20.67,
        "frame": 620,
        "kneeAngle": 136.0,
        "hipAngle": 135.6,
        "torsoAngle": 69.9,
        "valgusRatio": 0.77,
        "phase": "concentric"
      },
      {
        "t": 20.73,
        "frame": 622,
        "kneeAngle": 139.1,
        "hipAngle": 138.3,
        "torsoAngle": 70.8,
        "valgusRatio": 0.78,
        "phase": "concentric"
      },
      {
        "t": 20.8,
        "frame": 624,
        "kneeAngle": 142.0,
        "hipAngle": 140.8,
        "torsoAngle": 71.7,
        "valgusRatio": 0.79,
        "phase": "concentric"
      },
      {
        "t": 20.87,
        "frame": 626,
        "kneeAngle": 144.9,
        "hipAngle": 143.3,
        "torsoAngle": 72.6,
        "valgusRatio": 0.8,
        "phase": "concentric"
      },
      {
        "t": 20.93,
        "frame": 628,
        "kneeAngle": 147.6,
        "hipAngle": 145.7,
        "torsoAngle": 73.4,
        "valgusRatio": 0.8,
        "phase": "concentric"
      },
      {
        "t": 21.0,
        "frame": 630,
        "kneeAngle": 150.2,
        "hipAngle": 147.9,
        "torsoAngle": 74.1,
        "valgusRatio": 0.81,
        "phase": "concentric"
      },
      {
        "t": 21.07,
        "frame": 632,
        "kneeAngle": 152.7,
        "hipAngle": 150.0,
        "torsoAngle": 74.9,
        "valgusRatio": 0.82,
        "phase": "concentric"
      },
      {
        "t": 21.13,
        "frame": 634,
        "kneeAngle": 155.0,
        "hipAngle": 152.0,
        "torsoAngle": 75.5,
        "valgusRatio": 0.83,
        "phase": "concentric"
      },
      {
        "t": 21.2,
        "frame": 636,
        "kneeAngle": 157.1,
        "hipAngle": 153.9,
        "torsoAngle": 76.2,
        "valgusRatio": 0.84,
        "phase": "concentric"
      },
      {
        "t": 21.27,
        "frame": 638,
        "kneeAngle": 159.1,
        "hipAngle": 155.6,
        "torsoAngle": 76.8,
        "valgusRatio": 0.85,
        "phase": "concentric"
      },
      {
        "t": 21.33,
        "frame": 640,
        "kneeAngle": 161.0,
        "hipAngle": 157.2,
        "torsoAngle": 77.3,
        "valgusRatio": 0.86,
        "phase": "concentric"
      },
      {
        "t": 21.4,
        "frame": 642,
        "kneeAngle": 162.7,
        "hipAngle": 158.7,
        "torsoAngle": 77.8,
        "valgusRatio": 0.87,
        "phase": "concentric"
      },
      {
        "t": 21.47,
        "frame": 644,
        "kneeAngle": 164.2,
        "hipAngle": 160.0,
        "torsoAngle": 78.3,
        "valgusRatio": 0.88,
        "phase": "concentric"
      },
      {
        "t": 21.53,
        "frame": 646,
        "kneeAngle": 165.5,
        "hipAngle": 161.2,
        "torsoAngle": 78.7,
        "valgusRatio": 0.89,
        "phase": "concentric"
      },
      {
        "t": 21.6,
        "frame": 648,
        "kneeAngle": 166.7,
        "hipAngle": 162.2,
        "torsoAngle": 79.0,
        "valgusRatio": 0.9,
        "phase": "concentric"
      },
      {
        "t": 21.67,
        "frame": 650,
        "kneeAngle": 167.7,
        "hipAngle": 163.0,
        "torsoAngle": 79.3,
        "valgusRatio": 0.9,
        "phase": "concentric"
      },
      {
        "t": 21.73,
        "frame": 652,
        "kneeAngle": 168.5,
        "hipAngle": 163.7,
        "torsoAngle": 79.6,
        "valgusRatio": 0.91,
        "phase": "concentric"
      },
      {
        "t": 21.8,
        "frame": 654,
        "kneeAngle": 169.2,
        "hipAngle": 164.3,
        "torsoAngle": 79.8,
        "valgusRatio": 0.92,
        "phase": "concentric"
      },
      {
        "t": 21.87,
        "frame": 656,
        "kneeAngle": 169.6,
        "hipAngle": 164.7,
        "torsoAngle": 79.9,
        "valgusRatio": 0.93,
        "phase": "concentric"
      },
      {
        "t": 21.93,
        "frame": 658,
        "kneeAngle": 169.9,
        "hipAngle": 164.9,
        "torsoAngle": 80.0,
        "valgusRatio": 0.94,
        "phase": "concentric"
      },
      {
        "t": 22.0,
        "frame": 660,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 22.07,
        "frame": 662,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 22.13,
        "frame": 664,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 22.2,
        "frame": 666,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 22.27,
        "frame": 668,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 22.33,
        "frame": 670,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 22.4,
        "frame": 672,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 22.47,
        "frame": 674,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 22.53,
        "frame": 676,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 22.6,
        "frame": 678,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 22.67,
        "frame": 680,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 22.73,
        "frame": 682,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 22.8,
        "frame": 684,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 22.87,
        "frame": 686,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 22.93,
        "frame": 688,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 23.0,
        "frame": 690,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 23.07,
        "frame": 692,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 23.13,
        "frame": 694,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 23.2,
        "frame": 696,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 23.27,
        "frame": 698,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 23.33,
        "frame": 700,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 23.4,
        "frame": 702,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 23.47,
        "frame": 704,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 23.53,
        "frame": 706,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 23.6,
        "frame": 708,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 23.67,
        "frame": 710,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 23.73,
        "frame": 712,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 23.8,
        "frame": 714,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 23.87,
        "frame": 716,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 23.93,
        "frame": 718,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      },
      {
        "t": 24.0,
        "frame": 720,
        "kneeAngle": 170.0,
        "hipAngle": 168.0,
        "torsoAngle": 82.0,
        "valgusRatio": 1.0,
        "phase": "lockout"
      }
    ],
    "poseFrames": [
      {
        "t": 0.0,
        "frame": 0,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2243,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3243,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3243,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4243,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4243,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3443,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3443,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5253,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5253,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6824,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6824,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 0.07,
        "frame": 2,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2245,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3245,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3245,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4245,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4245,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3445,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3445,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5256,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5256,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6825,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6825,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 0.13,
        "frame": 4,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2247,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3247,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3247,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4247,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4247,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3447,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3447,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5259,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5259,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6827,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6827,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 0.2,
        "frame": 6,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2249,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3249,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3249,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4249,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4249,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3449,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3449,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5262,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5262,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6828,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6828,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 0.27,
        "frame": 8,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2252,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3252,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3252,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4252,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4252,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3452,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3452,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5265,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5265,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6829,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6829,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 0.33,
        "frame": 10,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2254,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3254,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3254,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4254,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4254,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3454,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3454,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5268,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5268,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.683,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.683,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 0.4,
        "frame": 12,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2256,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3256,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3256,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4256,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4256,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3456,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3456,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.527,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.527,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6832,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6832,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 0.47,
        "frame": 14,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2259,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3259,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3259,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4259,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4259,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3459,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3459,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5273,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5273,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6833,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6833,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 0.53,
        "frame": 16,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2261,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3261,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3261,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4261,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4261,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3461,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3461,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5276,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5276,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6834,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6834,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 0.6,
        "frame": 18,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2263,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3263,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3263,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4263,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4263,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3463,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3463,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5279,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5279,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6836,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6836,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 0.67,
        "frame": 20,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2265,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3265,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3265,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4265,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4265,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3465,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3465,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5282,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5282,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6837,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6837,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 0.73,
        "frame": 22,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2268,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3268,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3268,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4268,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4268,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3468,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3468,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5285,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5285,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6838,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6838,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 0.8,
        "frame": 24,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.227,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.327,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.327,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.427,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.427,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.347,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.347,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5287,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5287,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6839,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6839,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 0.87,
        "frame": 26,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2272,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3272,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3272,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4272,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4272,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3472,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3472,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.529,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.529,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6841,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6841,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 0.93,
        "frame": 28,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2275,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3275,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3275,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4275,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4275,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3475,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3475,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5293,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5293,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6842,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6842,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 1.0,
        "frame": 30,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2277,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3277,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3277,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4277,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4277,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3477,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3477,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5296,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5296,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6843,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6843,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 1.07,
        "frame": 32,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2279,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3279,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3279,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4279,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4279,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3479,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3479,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5299,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5299,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6844,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6844,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 1.13,
        "frame": 34,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2281,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3281,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3281,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4281,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4281,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3481,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3481,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5302,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5302,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6846,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6846,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 1.2,
        "frame": 36,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2284,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3284,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3284,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4284,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4284,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3484,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3484,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5305,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5305,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6847,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6847,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 1.27,
        "frame": 38,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2286,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3286,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3286,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4286,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4286,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3486,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3486,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5307,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5307,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6848,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6848,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 1.33,
        "frame": 40,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2288,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3288,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3288,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4288,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4288,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3488,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3488,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.531,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.531,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.685,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.685,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 1.4,
        "frame": 42,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.229,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.329,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.329,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.429,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.429,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.349,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.349,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5313,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5313,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6851,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6851,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 1.47,
        "frame": 44,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2293,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3293,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3293,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4293,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4293,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3493,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3493,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5316,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5316,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6852,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6852,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 1.53,
        "frame": 46,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2295,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3295,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3295,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4295,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4295,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3495,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3495,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5319,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5319,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6853,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6853,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 1.6,
        "frame": 48,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2297,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3297,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3297,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4297,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4297,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3497,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3497,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5322,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5322,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6855,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6855,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 1.67,
        "frame": 50,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.23,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.33,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.33,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.43,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.43,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.35,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.35,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5324,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5324,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6856,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6856,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 1.73,
        "frame": 52,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2302,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3302,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3302,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4302,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4302,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3502,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3502,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5327,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5327,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6857,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6857,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 1.8,
        "frame": 54,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2304,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3304,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3304,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4304,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4304,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3504,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3504,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.533,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.533,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6859,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6859,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 1.87,
        "frame": 56,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2306,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3306,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3306,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4306,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4306,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3506,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3506,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5333,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5333,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.686,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.686,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 1.93,
        "frame": 58,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2309,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3309,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3309,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4309,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4309,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3509,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3509,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5336,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5336,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6861,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6861,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 2.0,
        "frame": 60,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2311,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3311,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3311,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4311,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4311,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3511,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3511,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5339,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5339,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6862,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6862,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 2.07,
        "frame": 62,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2313,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3313,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3313,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4313,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4313,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3513,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3513,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5342,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5342,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6864,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6864,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 2.13,
        "frame": 64,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2315,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3315,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3315,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4315,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4315,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3515,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3515,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5344,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5344,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6865,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6865,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 2.2,
        "frame": 66,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2318,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3318,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3318,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4318,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4318,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3518,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3518,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5347,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5347,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6866,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6866,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 2.27,
        "frame": 68,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.232,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.332,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.332,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.432,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.432,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.352,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.352,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.535,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.535,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6868,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6868,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 2.33,
        "frame": 70,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2322,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3322,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3322,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4322,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4322,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3522,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3522,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5353,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5353,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6869,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6869,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 2.4,
        "frame": 72,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2325,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3325,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3325,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4325,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4325,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3525,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3525,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5356,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5356,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.687,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.687,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 2.47,
        "frame": 74,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2327,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3327,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3327,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4327,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4327,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3527,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3527,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5359,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5359,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6871,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6871,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 2.53,
        "frame": 76,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2329,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3329,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3329,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4329,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4329,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3529,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3529,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5361,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5361,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6873,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6873,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 2.6,
        "frame": 78,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2331,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3331,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3331,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4331,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4331,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3531,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3531,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5364,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5364,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6874,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6874,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 2.67,
        "frame": 80,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2334,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3334,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3334,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4334,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4334,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3534,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3534,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5367,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5367,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6875,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6875,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 2.73,
        "frame": 82,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2336,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3336,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3336,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4336,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4336,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3536,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3536,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.537,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.537,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6876,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6876,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 2.8,
        "frame": 84,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2338,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3338,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3338,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4338,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4338,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3538,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3538,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5373,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5373,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6878,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6878,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 2.87,
        "frame": 86,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2341,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3341,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3341,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4341,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4341,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3541,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3541,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5376,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5376,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6879,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6879,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 2.93,
        "frame": 88,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2343,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3343,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3343,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4343,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4343,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3543,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3543,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5378,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5378,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.688,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.688,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 3.0,
        "frame": 90,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2345,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3345,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3345,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4345,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4345,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3545,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3545,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5381,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5381,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6882,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6882,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 3.07,
        "frame": 92,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2347,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3347,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3347,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4347,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4347,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3547,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3547,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5384,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5384,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6883,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6883,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 3.13,
        "frame": 94,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.235,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.335,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.335,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.435,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.435,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.355,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.355,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5387,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5387,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6884,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6884,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 3.2,
        "frame": 96,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2352,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3352,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3352,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4352,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4352,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3552,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3552,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.539,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.539,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6885,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6885,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 3.27,
        "frame": 98,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2354,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3354,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3354,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4354,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4354,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3554,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3554,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5393,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5393,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6887,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6887,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 3.33,
        "frame": 100,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2356,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3356,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3356,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4356,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4356,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3556,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3556,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5396,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5396,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6888,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6888,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 3.4,
        "frame": 102,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2359,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3359,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3359,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4359,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4359,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3559,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3559,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5398,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5398,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6889,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6889,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 3.47,
        "frame": 104,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2361,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3361,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3361,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4361,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4361,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3561,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3561,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5401,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5401,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6891,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6891,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 3.53,
        "frame": 106,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2363,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3363,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3363,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4363,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4363,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3563,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3563,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5404,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5404,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6892,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6892,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 3.6,
        "frame": 108,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2366,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3366,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3366,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4366,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4366,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3566,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3566,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5407,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5407,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6893,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6893,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 3.67,
        "frame": 110,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2368,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3368,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3368,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4368,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4368,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3568,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3568,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.541,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.541,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6894,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6894,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 3.73,
        "frame": 112,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.237,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.337,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.337,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.437,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.437,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.357,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.357,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5413,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5413,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6896,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6896,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 3.8,
        "frame": 114,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2372,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3372,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3372,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4372,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4372,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3572,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3572,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5415,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5415,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6897,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6897,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 3.87,
        "frame": 116,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2375,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3375,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3375,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4375,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4375,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3575,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3575,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5418,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5418,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6898,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6898,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 3.93,
        "frame": 118,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2377,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3377,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3377,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4377,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4377,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3577,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3577,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5421,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5421,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.69,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.69,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 4.0,
        "frame": 120,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2379,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3379,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3379,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4379,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4379,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3579,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3579,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5424,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5424,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6901,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6901,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 4.07,
        "frame": 122,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2381,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3381,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3381,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4381,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4381,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3581,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3581,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5427,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5427,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6902,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6902,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 4.13,
        "frame": 124,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2384,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3384,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3384,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4384,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4384,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3584,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3584,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.543,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.543,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6903,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6903,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 4.2,
        "frame": 126,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2386,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3386,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3386,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4386,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4386,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3586,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3586,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5433,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5433,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6905,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6905,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 4.27,
        "frame": 128,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2388,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3388,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3388,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4388,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4388,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3588,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3588,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5435,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5435,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6906,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6906,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 4.33,
        "frame": 130,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2391,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3391,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3391,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4391,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4391,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3591,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3591,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5438,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5438,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6907,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6907,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 4.4,
        "frame": 132,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2393,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3393,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3393,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4393,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4393,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3593,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3593,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5441,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5441,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6908,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6908,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 4.47,
        "frame": 134,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2395,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3395,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3395,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4395,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4395,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3595,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3595,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5444,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5444,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.691,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.691,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 4.53,
        "frame": 136,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2397,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3397,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3397,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4397,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4397,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3597,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3597,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5447,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5447,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6911,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6911,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 4.6,
        "frame": 138,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.24,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.34,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.34,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.44,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.44,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.36,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.36,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.545,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.545,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6912,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6912,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 4.67,
        "frame": 140,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2402,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3402,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3402,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4402,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4402,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3602,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3602,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5452,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5452,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6914,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6914,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 4.73,
        "frame": 142,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2404,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3404,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3404,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4404,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4404,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3604,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3604,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5455,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5455,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6915,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6915,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 4.8,
        "frame": 144,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2407,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3407,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3407,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4407,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4407,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3607,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3607,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5458,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5458,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6916,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6916,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 4.87,
        "frame": 146,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2409,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3409,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3409,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4409,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4409,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3609,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3609,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5461,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5461,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6917,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6917,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 4.93,
        "frame": 148,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2411,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3411,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3411,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4411,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4411,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3611,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3611,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5464,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5464,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.6919,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.6919,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 5.0,
        "frame": 150,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2413,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3413,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3413,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4413,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4413,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3613,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3613,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5467,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5467,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4314,
            "y": 0.692,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5686,
            "y": 0.692,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 5.07,
        "frame": 152,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2431,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3431,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3431,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4431,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4431,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3631,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3631,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5488,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5488,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4314,
            "y": 0.693,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5686,
            "y": 0.693,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 5.13,
        "frame": 154,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2448,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3448,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3448,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4448,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4448,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3648,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3648,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.551,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.551,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4315,
            "y": 0.6939,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5685,
            "y": 0.6939,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 5.2,
        "frame": 156,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2465,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3465,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3465,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4465,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4465,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3665,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3665,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5531,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5531,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4315,
            "y": 0.6949,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5685,
            "y": 0.6949,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 5.27,
        "frame": 158,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2482,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3482,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3482,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4482,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4482,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3682,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3682,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5553,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5553,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4315,
            "y": 0.6959,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5685,
            "y": 0.6959,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 5.33,
        "frame": 160,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2499,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3499,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3499,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4499,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4499,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3699,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3699,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5574,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5574,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4316,
            "y": 0.6968,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5684,
            "y": 0.6968,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 5.4,
        "frame": 162,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2516,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3516,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3516,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4516,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4516,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3716,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3716,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5595,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5595,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4316,
            "y": 0.6978,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5684,
            "y": 0.6978,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 5.47,
        "frame": 164,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2533,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3533,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3533,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4533,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4533,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3733,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3733,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5617,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5617,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4317,
            "y": 0.6988,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5683,
            "y": 0.6988,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 5.53,
        "frame": 166,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.255,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.355,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.355,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.455,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.455,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.375,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.375,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5638,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5638,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4317,
            "y": 0.6997,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5683,
            "y": 0.6997,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 5.6,
        "frame": 168,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2567,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3567,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3567,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4567,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4567,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3767,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3767,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5659,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5659,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4317,
            "y": 0.7007,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5683,
            "y": 0.7007,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 5.67,
        "frame": 170,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2584,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3584,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3584,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4584,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4584,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3784,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3784,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5681,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5681,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4318,
            "y": 0.7016,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5682,
            "y": 0.7016,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 5.73,
        "frame": 172,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2601,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3601,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3601,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4601,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4601,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3801,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3801,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5702,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5702,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4318,
            "y": 0.7026,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5682,
            "y": 0.7026,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 5.8,
        "frame": 174,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2618,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3618,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3618,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4618,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4618,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3818,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3818,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5723,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5723,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4318,
            "y": 0.7035,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5682,
            "y": 0.7035,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 5.87,
        "frame": 176,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2635,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3635,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3635,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4635,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4635,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3835,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3835,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5744,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5744,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4319,
            "y": 0.7045,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5681,
            "y": 0.7045,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 5.93,
        "frame": 178,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2652,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3652,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3652,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4652,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4652,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3852,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3852,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5765,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5765,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4319,
            "y": 0.7054,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5681,
            "y": 0.7054,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 6.0,
        "frame": 180,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2669,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3669,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3669,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4669,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4669,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3869,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3869,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5786,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5786,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4319,
            "y": 0.7064,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5681,
            "y": 0.7064,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 6.07,
        "frame": 182,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2685,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3685,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3685,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4685,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4685,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3885,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3885,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5807,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5807,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.432,
            "y": 0.7073,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.568,
            "y": 0.7073,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 6.13,
        "frame": 184,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2702,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3702,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3702,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4702,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4702,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3902,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3902,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5827,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5827,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.432,
            "y": 0.7082,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.568,
            "y": 0.7082,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 6.2,
        "frame": 186,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2718,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3718,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3718,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4718,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4718,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3918,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3918,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5848,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5848,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.432,
            "y": 0.7092,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.568,
            "y": 0.7092,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 6.27,
        "frame": 188,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2735,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3735,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3735,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4735,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4735,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3935,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3935,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5868,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5868,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4321,
            "y": 0.7101,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5679,
            "y": 0.7101,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 6.33,
        "frame": 190,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2751,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3751,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3751,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4751,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4751,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3951,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3951,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5889,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5889,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4321,
            "y": 0.711,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5679,
            "y": 0.711,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 6.4,
        "frame": 192,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2767,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3767,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3767,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4767,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4767,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3967,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3967,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5909,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5909,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4322,
            "y": 0.7119,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5678,
            "y": 0.7119,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 6.47,
        "frame": 194,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2784,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3784,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3784,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4784,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4784,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3984,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3984,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5929,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5929,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4322,
            "y": 0.7128,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5678,
            "y": 0.7128,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 6.53,
        "frame": 196,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.38,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.38,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.48,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.48,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.595,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.595,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4322,
            "y": 0.7137,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5678,
            "y": 0.7137,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 6.6,
        "frame": 198,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2816,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3816,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3816,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4816,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4816,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4016,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4016,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5969,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5969,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4323,
            "y": 0.7146,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5677,
            "y": 0.7146,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 6.67,
        "frame": 200,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2831,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3831,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3831,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4831,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4831,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4031,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4031,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5989,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5989,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4323,
            "y": 0.7155,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5677,
            "y": 0.7155,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 6.73,
        "frame": 202,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2847,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3847,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3847,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4847,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4847,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4047,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4047,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6009,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6009,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4323,
            "y": 0.7164,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5677,
            "y": 0.7164,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 6.8,
        "frame": 204,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2863,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3863,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3863,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4863,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4863,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4063,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4063,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6029,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6029,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4324,
            "y": 0.7173,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5676,
            "y": 0.7173,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 6.87,
        "frame": 206,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2878,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3878,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3878,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4878,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4878,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4078,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4078,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6048,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6048,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4324,
            "y": 0.7182,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5676,
            "y": 0.7182,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 6.93,
        "frame": 208,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2894,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3894,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3894,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4894,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4894,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4094,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4094,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6067,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6067,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4324,
            "y": 0.719,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5676,
            "y": 0.719,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 7.0,
        "frame": 210,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2909,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3909,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3909,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4909,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4909,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4109,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4109,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6086,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6086,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4325,
            "y": 0.7199,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5675,
            "y": 0.7199,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 7.07,
        "frame": 212,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2924,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3924,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3924,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4924,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4924,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4124,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4124,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6105,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6105,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4325,
            "y": 0.7207,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5675,
            "y": 0.7207,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 7.13,
        "frame": 214,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2939,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3939,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3939,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4939,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4939,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4139,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4139,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6124,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6124,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4325,
            "y": 0.7216,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5675,
            "y": 0.7216,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 7.2,
        "frame": 216,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2954,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3954,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3954,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4954,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4954,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4154,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4154,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6143,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6143,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4326,
            "y": 0.7224,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5674,
            "y": 0.7224,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 7.27,
        "frame": 218,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2969,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3969,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3969,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4969,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4969,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4169,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4169,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6161,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6161,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4326,
            "y": 0.7232,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5674,
            "y": 0.7232,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 7.33,
        "frame": 220,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2983,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3983,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3983,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4983,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4983,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4183,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4183,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6179,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6179,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4327,
            "y": 0.7241,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5673,
            "y": 0.7241,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 7.4,
        "frame": 222,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2998,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3998,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3998,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4998,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4998,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4198,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4198,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6197,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6197,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4327,
            "y": 0.7249,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5673,
            "y": 0.7249,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 7.47,
        "frame": 224,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3012,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4012,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4012,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5012,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5012,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4212,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4212,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6215,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6215,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4327,
            "y": 0.7257,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5673,
            "y": 0.7257,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 7.53,
        "frame": 226,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3026,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4026,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4026,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5026,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5026,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4226,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4226,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6233,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6233,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4328,
            "y": 0.7265,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5672,
            "y": 0.7265,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 7.6,
        "frame": 228,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.304,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.404,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.404,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.504,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.504,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.424,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.424,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.625,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.625,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4328,
            "y": 0.7273,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5672,
            "y": 0.7273,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 7.67,
        "frame": 230,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3054,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4054,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4054,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5054,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5054,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4254,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4254,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6268,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6268,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4328,
            "y": 0.728,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5672,
            "y": 0.728,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 7.73,
        "frame": 232,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3068,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4068,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4068,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5068,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5068,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4268,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4268,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6285,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6285,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4329,
            "y": 0.7288,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5671,
            "y": 0.7288,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 7.8,
        "frame": 234,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3081,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4081,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4081,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5081,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5081,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4281,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4281,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6302,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6302,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4329,
            "y": 0.7296,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5671,
            "y": 0.7296,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 7.87,
        "frame": 236,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3095,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4095,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4095,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5095,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5095,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4295,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4295,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6318,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6318,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4329,
            "y": 0.7303,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5671,
            "y": 0.7303,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 7.93,
        "frame": 238,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3108,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4108,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4108,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5108,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5108,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4308,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4308,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6335,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6335,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.433,
            "y": 0.7311,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.567,
            "y": 0.7311,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 8.0,
        "frame": 240,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3121,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4121,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4121,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5121,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5121,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4321,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4321,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6351,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6351,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.433,
            "y": 0.7318,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.567,
            "y": 0.7318,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 8.07,
        "frame": 242,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3133,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4133,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4133,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5133,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5133,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4333,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4333,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6367,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6367,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4331,
            "y": 0.7325,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5669,
            "y": 0.7325,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 8.13,
        "frame": 244,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3146,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4146,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4146,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5146,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5146,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4346,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4346,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6383,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6383,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4331,
            "y": 0.7332,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5669,
            "y": 0.7332,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 8.2,
        "frame": 245,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3158,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4158,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4158,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5158,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5158,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4358,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4358,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6398,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6398,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4331,
            "y": 0.7339,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5669,
            "y": 0.7339,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 8.27,
        "frame": 248,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3171,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4171,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4171,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5171,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5171,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4371,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4371,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6413,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6413,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4332,
            "y": 0.7346,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5668,
            "y": 0.7346,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 8.33,
        "frame": 250,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3183,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4183,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4183,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5183,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5183,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4383,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4383,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6428,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6428,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4332,
            "y": 0.7353,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5668,
            "y": 0.7353,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 8.4,
        "frame": 252,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3194,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4194,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4194,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5194,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5194,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4394,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4394,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6443,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6443,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4332,
            "y": 0.7359,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5668,
            "y": 0.7359,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 8.47,
        "frame": 254,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3206,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4206,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4206,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5206,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5206,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4406,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4406,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6458,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6458,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4333,
            "y": 0.7366,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5667,
            "y": 0.7366,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 8.53,
        "frame": 256,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3217,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4217,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4217,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5217,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5217,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4417,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4417,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6472,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6472,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4333,
            "y": 0.7372,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5667,
            "y": 0.7372,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 8.6,
        "frame": 258,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3229,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4229,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4229,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5229,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5229,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4429,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4429,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6486,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6486,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4333,
            "y": 0.7379,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5667,
            "y": 0.7379,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 8.67,
        "frame": 260,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.324,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.424,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.424,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.524,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.524,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.444,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.444,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6499,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6499,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4334,
            "y": 0.7385,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5666,
            "y": 0.7385,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 8.73,
        "frame": 262,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.325,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.425,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.425,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.525,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.525,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.445,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.445,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6513,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6513,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4334,
            "y": 0.7391,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5666,
            "y": 0.7391,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 8.8,
        "frame": 264,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3261,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4261,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4261,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5261,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5261,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4461,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4461,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6526,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6526,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4334,
            "y": 0.7397,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5666,
            "y": 0.7397,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 8.87,
        "frame": 266,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6539,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6539,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4335,
            "y": 0.7403,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5665,
            "y": 0.7403,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 8.93,
        "frame": 268,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3281,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4281,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4281,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5281,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5281,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4481,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4481,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6552,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6552,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4335,
            "y": 0.7408,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5665,
            "y": 0.7408,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 9.0,
        "frame": 270,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3291,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4291,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4291,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5291,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5291,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4491,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4491,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6564,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6564,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4336,
            "y": 0.7414,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5664,
            "y": 0.7414,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 9.07,
        "frame": 272,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3301,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4301,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4301,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5301,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5301,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4501,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4501,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6576,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6576,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4336,
            "y": 0.7419,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5664,
            "y": 0.7419,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 9.13,
        "frame": 274,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.331,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.431,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.431,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.531,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.531,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.451,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.451,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6588,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6588,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4336,
            "y": 0.7425,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5664,
            "y": 0.7425,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 9.2,
        "frame": 276,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3319,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4319,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4319,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5319,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5319,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4519,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4519,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6599,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6599,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4337,
            "y": 0.743,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5663,
            "y": 0.743,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 9.27,
        "frame": 278,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3328,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4328,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4328,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5328,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5328,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4528,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4528,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.661,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.661,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4337,
            "y": 0.7435,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5663,
            "y": 0.7435,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 9.33,
        "frame": 280,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3337,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4337,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4337,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5337,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5337,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4537,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4537,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6621,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6621,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4337,
            "y": 0.744,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5663,
            "y": 0.744,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 9.4,
        "frame": 282,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3346,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4346,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4346,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5346,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5346,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4546,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4546,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6632,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6632,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4338,
            "y": 0.7444,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5662,
            "y": 0.7444,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 9.47,
        "frame": 284,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3354,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4354,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4354,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5354,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5354,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4554,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4554,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6642,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6642,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4338,
            "y": 0.7449,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5662,
            "y": 0.7449,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 9.53,
        "frame": 286,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3362,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4362,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4362,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5362,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5362,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4562,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4562,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6652,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6652,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4338,
            "y": 0.7454,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5662,
            "y": 0.7454,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 9.6,
        "frame": 288,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.337,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.437,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.437,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.537,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.537,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.457,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.457,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6662,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6662,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4339,
            "y": 0.7458,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5661,
            "y": 0.7458,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 9.67,
        "frame": 290,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3377,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4377,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4377,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5377,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5377,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4577,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4577,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6671,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6671,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4339,
            "y": 0.7462,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5661,
            "y": 0.7462,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 9.73,
        "frame": 292,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3384,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4384,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4384,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5384,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5384,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4584,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4584,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.668,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.668,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4339,
            "y": 0.7466,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5661,
            "y": 0.7466,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 9.8,
        "frame": 294,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3391,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4391,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4391,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5391,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5391,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4591,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4591,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6689,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6689,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.434,
            "y": 0.747,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.566,
            "y": 0.747,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 9.87,
        "frame": 296,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3398,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4398,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4398,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5398,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5398,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4598,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4598,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6697,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6697,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.434,
            "y": 0.7474,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.566,
            "y": 0.7474,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 9.93,
        "frame": 298,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3404,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4404,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4404,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5404,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5404,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4604,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4604,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6706,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6706,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4341,
            "y": 0.7478,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5659,
            "y": 0.7478,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 10.0,
        "frame": 300,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3411,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4411,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4411,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5411,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5411,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4611,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4611,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6713,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6713,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4341,
            "y": 0.7481,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5659,
            "y": 0.7481,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 10.07,
        "frame": 302,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3417,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4417,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4417,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5417,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5417,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4617,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4617,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6721,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6721,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4341,
            "y": 0.7484,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5659,
            "y": 0.7484,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 10.13,
        "frame": 304,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3422,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4422,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4422,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5422,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5422,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4622,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4622,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6728,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6728,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4342,
            "y": 0.7488,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5658,
            "y": 0.7488,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 10.2,
        "frame": 306,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3428,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4428,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4428,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5428,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5428,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4628,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4628,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6735,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6735,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4342,
            "y": 0.7491,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5658,
            "y": 0.7491,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 10.27,
        "frame": 308,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3433,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4433,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4433,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5433,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5433,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4633,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4633,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6741,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6741,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4342,
            "y": 0.7494,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5658,
            "y": 0.7494,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 10.33,
        "frame": 310,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3438,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4438,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4438,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5438,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5438,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4638,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4638,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6747,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6747,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4343,
            "y": 0.7496,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5657,
            "y": 0.7496,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 10.4,
        "frame": 312,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3443,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4443,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4443,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5443,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5443,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4643,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4643,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6753,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6753,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4343,
            "y": 0.7499,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5657,
            "y": 0.7499,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 10.47,
        "frame": 314,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3447,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4447,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4447,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5447,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5447,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4647,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4647,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6759,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6759,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4343,
            "y": 0.7501,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5657,
            "y": 0.7501,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 10.53,
        "frame": 316,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3451,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4451,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4451,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5451,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5451,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4651,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4651,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6764,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6764,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4344,
            "y": 0.7504,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5656,
            "y": 0.7504,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 10.6,
        "frame": 318,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3455,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4455,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4455,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5455,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5455,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4655,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4655,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6769,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6769,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4344,
            "y": 0.7506,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5656,
            "y": 0.7506,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 10.67,
        "frame": 320,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3458,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4458,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4458,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5458,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5458,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4658,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4658,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6773,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6773,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4345,
            "y": 0.7508,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5655,
            "y": 0.7508,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 10.73,
        "frame": 322,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3462,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4462,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4462,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5462,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5462,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4662,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4662,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6777,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6777,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4345,
            "y": 0.751,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5655,
            "y": 0.751,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 10.8,
        "frame": 324,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3465,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4465,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4465,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5465,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5465,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4665,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4665,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6781,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6781,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4345,
            "y": 0.7511,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5655,
            "y": 0.7511,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 10.87,
        "frame": 326,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3468,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4468,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4468,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5468,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5468,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4668,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4668,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6784,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6784,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4346,
            "y": 0.7513,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5654,
            "y": 0.7513,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 10.93,
        "frame": 328,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.347,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.447,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.447,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.547,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.547,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.467,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.467,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6788,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6788,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4346,
            "y": 0.7514,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5654,
            "y": 0.7514,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 11.0,
        "frame": 330,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3472,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4472,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4472,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5472,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5472,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4672,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4672,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.679,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.679,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4346,
            "y": 0.7516,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5654,
            "y": 0.7516,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 11.07,
        "frame": 332,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3474,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4474,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4474,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5474,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5474,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4674,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4674,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6793,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6793,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4347,
            "y": 0.7517,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5653,
            "y": 0.7517,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 11.13,
        "frame": 334,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3476,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4476,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4476,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5476,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5476,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4676,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4676,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6795,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6795,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4347,
            "y": 0.7518,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5653,
            "y": 0.7518,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 11.2,
        "frame": 336,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3477,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4477,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4477,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5477,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5477,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4677,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4677,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6796,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6796,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4347,
            "y": 0.7518,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5653,
            "y": 0.7518,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 11.27,
        "frame": 338,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3478,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4478,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4478,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5478,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5478,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4678,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4678,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6798,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6798,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4348,
            "y": 0.7519,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5652,
            "y": 0.7519,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 11.33,
        "frame": 340,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3479,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4479,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4479,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5479,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5479,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4679,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4679,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6799,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6799,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4348,
            "y": 0.752,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5652,
            "y": 0.752,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 11.4,
        "frame": 342,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.348,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.448,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.448,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.548,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.548,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.468,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.468,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.68,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.68,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4348,
            "y": 0.752,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5652,
            "y": 0.752,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 11.47,
        "frame": 344,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.348,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.448,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.448,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.548,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.548,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.468,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.468,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.68,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.68,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4349,
            "y": 0.752,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5651,
            "y": 0.752,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 11.53,
        "frame": 346,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.347,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.447,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.447,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.547,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.547,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.467,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.467,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6788,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6788,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4349,
            "y": 0.7515,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5651,
            "y": 0.7515,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 11.6,
        "frame": 348,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3451,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4451,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4451,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5451,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5451,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4651,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4651,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6763,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6763,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4348,
            "y": 0.7504,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5652,
            "y": 0.7504,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 11.67,
        "frame": 350,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3431,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4431,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4431,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5431,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5431,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4631,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4631,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6739,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6739,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4348,
            "y": 0.7493,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5652,
            "y": 0.7493,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 11.73,
        "frame": 352,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3412,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4412,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4412,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5412,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5412,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4612,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4612,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6715,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6715,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4347,
            "y": 0.7482,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5653,
            "y": 0.7482,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 11.8,
        "frame": 354,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3392,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4392,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4392,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5392,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5392,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4592,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4592,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.669,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.669,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4347,
            "y": 0.7471,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5653,
            "y": 0.7471,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 11.87,
        "frame": 356,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3373,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4373,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4373,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5373,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5373,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4573,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4573,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6666,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6666,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4346,
            "y": 0.746,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5654,
            "y": 0.746,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 11.93,
        "frame": 358,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3353,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4353,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4353,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5353,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5353,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4553,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4553,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6642,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6642,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4346,
            "y": 0.7449,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5654,
            "y": 0.7449,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 12.0,
        "frame": 360,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3334,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4334,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4334,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5334,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5334,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4534,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4534,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6617,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6617,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4346,
            "y": 0.7438,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5654,
            "y": 0.7438,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 12.07,
        "frame": 362,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3315,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4315,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4315,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5315,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5315,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4515,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4515,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6593,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6593,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4345,
            "y": 0.7427,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5655,
            "y": 0.7427,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 12.13,
        "frame": 364,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3295,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4295,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4295,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5295,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5295,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4495,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4495,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6569,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6569,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4345,
            "y": 0.7416,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5655,
            "y": 0.7416,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 12.2,
        "frame": 366,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3276,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4276,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4276,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5276,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5276,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4476,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4476,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6545,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6545,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4344,
            "y": 0.7405,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5656,
            "y": 0.7405,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 12.27,
        "frame": 368,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3257,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4257,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4257,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5257,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5257,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4457,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4457,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6521,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6521,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4344,
            "y": 0.7394,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5656,
            "y": 0.7394,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 12.33,
        "frame": 370,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3238,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4238,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4238,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5238,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5238,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4438,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4438,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6497,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6497,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4343,
            "y": 0.7384,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5657,
            "y": 0.7384,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 12.4,
        "frame": 372,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3219,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4219,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4219,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5219,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5219,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4419,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4419,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6473,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6473,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4343,
            "y": 0.7373,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5657,
            "y": 0.7373,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 12.47,
        "frame": 374,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.32,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.42,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.42,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.52,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.52,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.44,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.44,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.645,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.645,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4342,
            "y": 0.7362,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5658,
            "y": 0.7362,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 12.53,
        "frame": 376,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3181,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4181,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4181,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5181,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5181,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4381,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4381,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6426,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6426,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4342,
            "y": 0.7352,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5658,
            "y": 0.7352,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 12.6,
        "frame": 378,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3162,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4162,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4162,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5162,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5162,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4362,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4362,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6403,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6403,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4341,
            "y": 0.7341,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5659,
            "y": 0.7341,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 12.67,
        "frame": 380,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3143,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4143,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4143,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5143,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5143,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4343,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4343,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6379,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6379,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4341,
            "y": 0.7331,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5659,
            "y": 0.7331,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 12.73,
        "frame": 382,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3125,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4125,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4125,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5125,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5125,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4325,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4325,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6356,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6356,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4341,
            "y": 0.732,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5659,
            "y": 0.732,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 12.8,
        "frame": 384,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3106,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4106,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4106,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5106,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5106,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4306,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4306,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6333,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6333,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.434,
            "y": 0.731,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.566,
            "y": 0.731,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 12.87,
        "frame": 386,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3088,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4088,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4088,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5088,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5088,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4288,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4288,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.631,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.631,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.434,
            "y": 0.7299,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.566,
            "y": 0.7299,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 12.93,
        "frame": 388,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.307,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.407,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.407,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.507,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.507,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.427,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.427,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6287,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6287,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4339,
            "y": 0.7289,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5661,
            "y": 0.7289,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 13.0,
        "frame": 390,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3051,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4051,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4051,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5051,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5051,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4251,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4251,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6264,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6264,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4339,
            "y": 0.7279,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5661,
            "y": 0.7279,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 13.07,
        "frame": 392,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3033,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4033,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4033,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5033,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5033,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4233,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4233,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6242,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6242,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4338,
            "y": 0.7269,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5662,
            "y": 0.7269,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 13.13,
        "frame": 394,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3015,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4015,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4015,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5015,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5015,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4215,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4215,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6219,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6219,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4338,
            "y": 0.7259,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5662,
            "y": 0.7259,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 13.2,
        "frame": 396,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2998,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3998,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3998,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4998,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4998,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4198,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4198,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6197,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6197,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4337,
            "y": 0.7249,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5663,
            "y": 0.7249,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 13.27,
        "frame": 398,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.298,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.398,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.398,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.498,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.498,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.418,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.418,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6175,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6175,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4337,
            "y": 0.7239,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5663,
            "y": 0.7239,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 13.33,
        "frame": 400,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2963,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3963,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3963,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4963,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4963,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4163,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4163,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6153,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6153,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4336,
            "y": 0.7229,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5664,
            "y": 0.7229,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 13.4,
        "frame": 402,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2945,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3945,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3945,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4945,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4945,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4145,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4145,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6132,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6132,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4336,
            "y": 0.7219,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5664,
            "y": 0.7219,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 13.47,
        "frame": 404,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2928,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3928,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3928,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4928,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4928,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4128,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4128,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.611,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.611,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4335,
            "y": 0.721,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5665,
            "y": 0.721,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 13.53,
        "frame": 406,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2911,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3911,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3911,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4911,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4911,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4111,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4111,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6089,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6089,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4335,
            "y": 0.72,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5665,
            "y": 0.72,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 13.6,
        "frame": 408,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2894,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3894,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3894,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4894,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4894,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4094,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4094,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6068,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6068,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4335,
            "y": 0.7191,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5665,
            "y": 0.7191,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 13.67,
        "frame": 410,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2878,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3878,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3878,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4878,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4878,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4078,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4078,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6047,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6047,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4334,
            "y": 0.7181,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5666,
            "y": 0.7181,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 13.73,
        "frame": 412,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2861,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3861,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3861,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4861,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4861,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4061,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4061,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6026,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6026,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4334,
            "y": 0.7172,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5666,
            "y": 0.7172,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 13.8,
        "frame": 414,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2845,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3845,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3845,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4845,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4845,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4045,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4045,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6006,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6006,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4333,
            "y": 0.7163,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5667,
            "y": 0.7163,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 13.87,
        "frame": 416,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2829,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3829,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3829,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4829,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4829,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4029,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4029,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5986,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5986,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4333,
            "y": 0.7154,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5667,
            "y": 0.7154,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 13.93,
        "frame": 418,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2813,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3813,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3813,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4813,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4813,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4013,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4013,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5966,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5966,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4332,
            "y": 0.7145,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5668,
            "y": 0.7145,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 14.0,
        "frame": 420,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2797,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3797,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3797,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4797,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4797,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3997,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3997,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5946,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5946,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4332,
            "y": 0.7136,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5668,
            "y": 0.7136,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 14.07,
        "frame": 422,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2782,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3782,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3782,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4782,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4782,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3982,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3982,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5927,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5927,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4331,
            "y": 0.7127,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5669,
            "y": 0.7127,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 14.13,
        "frame": 424,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2766,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3766,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3766,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4766,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4766,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3966,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3966,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5908,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5908,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4331,
            "y": 0.7119,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5669,
            "y": 0.7119,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 14.2,
        "frame": 426,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2751,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3751,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3751,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4751,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4751,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3951,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3951,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5889,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5889,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.433,
            "y": 0.711,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.567,
            "y": 0.711,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 14.27,
        "frame": 428,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2736,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3736,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3736,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4736,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4736,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3936,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3936,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.587,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.587,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.433,
            "y": 0.7102,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.567,
            "y": 0.7102,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 14.33,
        "frame": 430,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2722,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3722,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3722,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4722,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4722,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3922,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3922,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5852,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5852,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4329,
            "y": 0.7093,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5671,
            "y": 0.7093,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 14.4,
        "frame": 432,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2707,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3707,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3707,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4707,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4707,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3907,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3907,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5834,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5834,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4329,
            "y": 0.7085,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5671,
            "y": 0.7085,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 14.47,
        "frame": 434,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2693,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3693,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3693,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4693,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4693,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3893,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3893,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5816,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5816,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4329,
            "y": 0.7077,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5671,
            "y": 0.7077,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 14.53,
        "frame": 436,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2679,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3679,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3679,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4679,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4679,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3879,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3879,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5799,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5799,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4328,
            "y": 0.7069,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5672,
            "y": 0.7069,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 14.6,
        "frame": 438,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2665,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3665,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3665,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4665,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4665,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3865,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3865,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5781,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5781,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4328,
            "y": 0.7062,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5672,
            "y": 0.7062,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 14.67,
        "frame": 440,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2652,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3652,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3652,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4652,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4652,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3852,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3852,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5765,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5765,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4327,
            "y": 0.7054,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5673,
            "y": 0.7054,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 14.73,
        "frame": 442,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2638,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3638,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3638,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4638,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4638,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3838,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3838,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5748,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5748,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4327,
            "y": 0.7047,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5673,
            "y": 0.7047,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 14.8,
        "frame": 444,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2625,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3625,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3625,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4625,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4625,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3825,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3825,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5732,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5732,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4326,
            "y": 0.7039,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5674,
            "y": 0.7039,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 14.87,
        "frame": 446,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2613,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3613,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3613,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4613,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4613,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3813,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3813,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5716,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5716,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4326,
            "y": 0.7032,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5674,
            "y": 0.7032,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 14.93,
        "frame": 448,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.26,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.36,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.36,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.46,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.46,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.38,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.38,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.57,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.57,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4325,
            "y": 0.7025,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5675,
            "y": 0.7025,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 15.0,
        "frame": 450,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2588,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3588,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3588,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4588,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4588,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3788,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3788,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5685,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5685,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4325,
            "y": 0.7018,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5675,
            "y": 0.7018,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 15.07,
        "frame": 452,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2576,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3576,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3576,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4576,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4576,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3776,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3776,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.567,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.567,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4324,
            "y": 0.7011,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5676,
            "y": 0.7011,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 15.13,
        "frame": 454,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2564,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3564,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3564,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4564,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4564,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3764,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3764,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5655,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5655,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4324,
            "y": 0.7005,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5676,
            "y": 0.7005,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 15.2,
        "frame": 456,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2553,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3553,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3553,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4553,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4553,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3753,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3753,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5641,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5641,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4324,
            "y": 0.6998,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5676,
            "y": 0.6998,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 15.27,
        "frame": 458,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2541,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3541,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3541,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4541,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4541,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3741,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3741,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5627,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5627,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4323,
            "y": 0.6992,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5677,
            "y": 0.6992,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 15.33,
        "frame": 460,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2531,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3531,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3531,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4531,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4531,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3731,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3731,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5613,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5613,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4323,
            "y": 0.6986,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5677,
            "y": 0.6986,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 15.4,
        "frame": 462,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.252,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.352,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.352,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.452,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.452,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.372,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.372,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.56,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.56,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4322,
            "y": 0.698,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5678,
            "y": 0.698,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 15.47,
        "frame": 464,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.251,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.351,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.351,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.451,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.451,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.371,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.371,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5587,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5587,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4322,
            "y": 0.6974,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5678,
            "y": 0.6974,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 15.53,
        "frame": 466,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.25,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.35,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.35,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.45,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.45,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.37,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.37,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5574,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5574,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4321,
            "y": 0.6969,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5679,
            "y": 0.6969,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 15.6,
        "frame": 468,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.249,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.349,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.349,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.449,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.449,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.369,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.369,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5562,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5562,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4321,
            "y": 0.6963,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5679,
            "y": 0.6963,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 15.67,
        "frame": 470,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.248,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.348,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.348,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.448,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.448,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.368,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.368,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.555,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.555,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.432,
            "y": 0.6958,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.568,
            "y": 0.6958,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 15.73,
        "frame": 472,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2471,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3471,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3471,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4471,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4471,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3671,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3671,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5539,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5539,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.432,
            "y": 0.6953,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.568,
            "y": 0.6953,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 15.8,
        "frame": 474,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2462,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3462,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3462,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4462,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4462,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3662,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3662,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5528,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5528,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4319,
            "y": 0.6948,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5681,
            "y": 0.6948,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 15.87,
        "frame": 476,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2454,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3454,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3454,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4454,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4454,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3654,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3654,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5517,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5517,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4319,
            "y": 0.6943,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5681,
            "y": 0.6943,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 15.93,
        "frame": 478,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2445,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3445,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3445,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4445,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4445,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3645,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3645,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5507,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5507,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4318,
            "y": 0.6938,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5682,
            "y": 0.6938,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 16.0,
        "frame": 480,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2437,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3437,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3437,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4437,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4437,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3637,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3637,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5497,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5497,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4318,
            "y": 0.6934,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5682,
            "y": 0.6934,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 16.07,
        "frame": 482,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.243,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.343,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.343,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.443,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.443,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.363,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.363,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5487,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5487,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4318,
            "y": 0.6929,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5682,
            "y": 0.6929,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 16.13,
        "frame": 484,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2422,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3422,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3422,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4422,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4422,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3622,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3622,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5478,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5478,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4317,
            "y": 0.6925,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5683,
            "y": 0.6925,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 16.2,
        "frame": 486,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2415,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3415,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3415,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4415,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4415,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3615,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3615,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5469,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5469,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4317,
            "y": 0.6921,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5683,
            "y": 0.6921,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 16.27,
        "frame": 488,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2409,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3409,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3409,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4409,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4409,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3609,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3609,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5461,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5461,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4316,
            "y": 0.6917,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5684,
            "y": 0.6917,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 16.33,
        "frame": 489,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2402,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3402,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3402,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4402,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4402,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3602,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3602,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5453,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5453,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4316,
            "y": 0.6914,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5684,
            "y": 0.6914,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 16.4,
        "frame": 491,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2396,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3396,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3396,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4396,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4396,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3596,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3596,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5445,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5445,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4315,
            "y": 0.691,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5685,
            "y": 0.691,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 16.47,
        "frame": 493,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.239,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.339,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.339,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.439,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.439,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.359,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.359,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5438,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5438,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4315,
            "y": 0.6907,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5685,
            "y": 0.6907,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 16.53,
        "frame": 496,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2385,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3385,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3385,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4385,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4385,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3585,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3585,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5431,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5431,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4314,
            "y": 0.6904,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5686,
            "y": 0.6904,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 16.6,
        "frame": 498,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.238,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.338,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.338,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.438,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.438,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.358,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.358,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5425,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5425,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4314,
            "y": 0.6901,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5686,
            "y": 0.6901,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 16.67,
        "frame": 500,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2375,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3375,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3375,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4375,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4375,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3575,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3575,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5419,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5419,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4313,
            "y": 0.6898,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5687,
            "y": 0.6898,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 16.73,
        "frame": 502,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.237,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.337,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.337,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.437,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.437,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.357,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.357,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5413,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5413,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4313,
            "y": 0.6896,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5687,
            "y": 0.6896,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 16.8,
        "frame": 504,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2366,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3366,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3366,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4366,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4366,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3566,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3566,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5408,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5408,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4313,
            "y": 0.6894,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5687,
            "y": 0.6894,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 16.87,
        "frame": 506,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2362,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3362,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3362,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4362,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4362,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3562,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3562,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5403,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5403,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4312,
            "y": 0.6891,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5688,
            "y": 0.6891,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 16.93,
        "frame": 508,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2359,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3359,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3359,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4359,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4359,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3559,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3559,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5399,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5399,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4312,
            "y": 0.6889,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5688,
            "y": 0.6889,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 17.0,
        "frame": 510,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2356,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3356,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3356,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4356,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4356,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3556,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3556,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5395,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5395,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4311,
            "y": 0.6888,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5689,
            "y": 0.6888,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 17.07,
        "frame": 512,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2353,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3353,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3353,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4353,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4353,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3553,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3553,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5391,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5391,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4311,
            "y": 0.6886,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5689,
            "y": 0.6886,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 17.13,
        "frame": 514,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.235,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.335,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.335,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.435,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.435,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.355,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.355,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5388,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5388,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.431,
            "y": 0.6885,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.569,
            "y": 0.6885,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 17.2,
        "frame": 516,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2348,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3348,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3348,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4348,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4348,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3548,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3548,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5385,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5385,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.431,
            "y": 0.6883,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.569,
            "y": 0.6883,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 17.27,
        "frame": 518,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2346,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3346,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3346,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4346,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4346,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3546,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3546,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5383,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5383,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4309,
            "y": 0.6882,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5691,
            "y": 0.6882,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 17.33,
        "frame": 520,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2345,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3345,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3345,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4345,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4345,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3545,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3545,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5381,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5381,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4309,
            "y": 0.6882,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5691,
            "y": 0.6882,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 17.4,
        "frame": 522,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2344,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3344,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3344,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4344,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4344,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3544,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3544,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.538,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.538,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4308,
            "y": 0.6881,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5692,
            "y": 0.6881,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 17.47,
        "frame": 524,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2343,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3343,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3343,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4343,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4343,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3543,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3543,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5379,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5379,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4308,
            "y": 0.688,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5692,
            "y": 0.688,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 17.53,
        "frame": 526,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2342,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3342,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3342,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4342,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4342,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3542,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3542,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5378,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5378,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4307,
            "y": 0.688,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5693,
            "y": 0.688,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 17.6,
        "frame": 528,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2342,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3342,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3342,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4342,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4342,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3542,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3542,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5378,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5378,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4307,
            "y": 0.688,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5693,
            "y": 0.688,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 17.67,
        "frame": 530,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2394,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3394,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3394,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4394,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4394,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3594,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3594,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5442,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5442,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4314,
            "y": 0.6909,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5686,
            "y": 0.6909,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 17.73,
        "frame": 532,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2445,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3445,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3445,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4445,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4445,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3645,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3645,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5506,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5506,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4321,
            "y": 0.6938,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5679,
            "y": 0.6938,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 17.8,
        "frame": 534,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2496,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3496,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3496,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4496,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4496,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3696,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3696,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.557,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.557,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4329,
            "y": 0.6967,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5671,
            "y": 0.6967,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 17.87,
        "frame": 536,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2547,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3547,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3547,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4547,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4547,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3747,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3747,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5633,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5633,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4336,
            "y": 0.6995,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5664,
            "y": 0.6995,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 17.93,
        "frame": 538,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2597,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3597,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3597,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4597,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4597,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3797,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3797,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5696,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5696,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4343,
            "y": 0.7023,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5657,
            "y": 0.7023,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 18.0,
        "frame": 540,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2647,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3647,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3647,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4647,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4647,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3847,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3847,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5758,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5758,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.435,
            "y": 0.7051,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.565,
            "y": 0.7051,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 18.07,
        "frame": 542,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2696,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3696,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3696,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4696,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4696,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3896,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3896,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.582,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.582,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4357,
            "y": 0.7079,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5643,
            "y": 0.7079,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 18.13,
        "frame": 544,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2744,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3744,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3744,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4744,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4744,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3944,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3944,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.588,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.588,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4365,
            "y": 0.7106,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5635,
            "y": 0.7106,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 18.2,
        "frame": 546,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2791,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3791,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3791,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4791,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4791,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3991,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3991,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5939,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5939,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4372,
            "y": 0.7133,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5628,
            "y": 0.7133,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 18.27,
        "frame": 548,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2838,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3838,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3838,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4838,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4838,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4038,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4038,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5997,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5997,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4379,
            "y": 0.7159,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5621,
            "y": 0.7159,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 18.33,
        "frame": 550,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2883,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3883,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3883,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4883,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4883,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4083,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4083,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6053,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6053,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4386,
            "y": 0.7184,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5614,
            "y": 0.7184,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 18.4,
        "frame": 552,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2927,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3927,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3927,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4927,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4927,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4127,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4127,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6108,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6108,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4394,
            "y": 0.7209,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5606,
            "y": 0.7209,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 18.47,
        "frame": 554,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2969,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3969,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3969,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4969,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4969,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4169,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4169,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6161,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6161,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4401,
            "y": 0.7233,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5599,
            "y": 0.7233,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 18.53,
        "frame": 556,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.301,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.401,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.401,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.501,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.501,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.421,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.421,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6213,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6213,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4408,
            "y": 0.7256,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5592,
            "y": 0.7256,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 18.6,
        "frame": 558,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.305,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.405,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.405,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.505,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.505,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.425,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.425,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6263,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6263,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4415,
            "y": 0.7278,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5585,
            "y": 0.7278,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 18.67,
        "frame": 560,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3088,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4088,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4088,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5088,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5088,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4288,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4288,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.631,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.631,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4422,
            "y": 0.73,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5578,
            "y": 0.73,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 18.73,
        "frame": 562,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3124,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4124,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4124,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5124,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5124,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4324,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4324,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6356,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6356,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.443,
            "y": 0.732,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.557,
            "y": 0.732,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 18.8,
        "frame": 564,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3159,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4159,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4159,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5159,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5159,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4359,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4359,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6399,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6399,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4437,
            "y": 0.7339,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5563,
            "y": 0.7339,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 18.87,
        "frame": 566,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3192,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4192,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4192,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5192,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5192,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4392,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4392,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.644,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.644,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4444,
            "y": 0.7358,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5556,
            "y": 0.7358,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 18.93,
        "frame": 568,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3223,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4223,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4223,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5223,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5223,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4423,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4423,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6478,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6478,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4451,
            "y": 0.7375,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5549,
            "y": 0.7375,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 19.0,
        "frame": 570,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3252,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4252,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4252,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5252,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5252,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4452,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4452,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6514,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6514,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4458,
            "y": 0.7391,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5542,
            "y": 0.7391,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 19.07,
        "frame": 572,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3278,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4278,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4278,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5278,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5278,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4478,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4478,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6548,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6548,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4466,
            "y": 0.7407,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5534,
            "y": 0.7407,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 19.13,
        "frame": 574,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3303,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4303,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4303,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5303,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5303,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4503,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4503,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6579,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6579,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4473,
            "y": 0.742,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5527,
            "y": 0.742,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 19.2,
        "frame": 576,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3325,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4325,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4325,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5325,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5325,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4525,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4525,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6607,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6607,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.448,
            "y": 0.7433,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.552,
            "y": 0.7433,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 19.27,
        "frame": 578,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3346,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4346,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4346,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5346,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5346,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4546,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4546,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6632,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6632,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4487,
            "y": 0.7444,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5513,
            "y": 0.7444,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 19.33,
        "frame": 580,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3364,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4364,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4364,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5364,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5364,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4564,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4564,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6655,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6655,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4495,
            "y": 0.7455,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5505,
            "y": 0.7455,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 19.4,
        "frame": 582,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3379,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4379,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4379,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5379,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5379,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4579,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4579,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6674,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6674,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4502,
            "y": 0.7463,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5498,
            "y": 0.7463,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 19.47,
        "frame": 584,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3393,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4393,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4393,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5393,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5393,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4593,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4593,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6691,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6691,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4509,
            "y": 0.7471,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5491,
            "y": 0.7471,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 19.53,
        "frame": 586,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3404,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4404,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4404,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5404,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5404,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4604,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4604,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6704,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6704,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4516,
            "y": 0.7477,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5484,
            "y": 0.7477,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 19.6,
        "frame": 588,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3412,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4412,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4412,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5412,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5412,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4612,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4612,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6715,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6715,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4523,
            "y": 0.7482,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5477,
            "y": 0.7482,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 19.67,
        "frame": 590,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3418,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4418,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4418,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5418,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5418,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4618,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4618,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6723,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6723,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4531,
            "y": 0.7485,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5469,
            "y": 0.7485,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 19.73,
        "frame": 592,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3422,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4422,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4422,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5422,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5422,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4622,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4622,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6727,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6727,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4538,
            "y": 0.7487,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5462,
            "y": 0.7487,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 19.8,
        "frame": 594,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3423,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4423,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4423,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5423,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5423,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4623,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4623,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6729,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6729,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4545,
            "y": 0.7488,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5455,
            "y": 0.7488,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 19.87,
        "frame": 596,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3368,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4368,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4368,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5368,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5368,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4568,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4568,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.666,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.666,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4539,
            "y": 0.7457,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5461,
            "y": 0.7457,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 19.93,
        "frame": 598,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3314,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4314,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4314,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5314,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5314,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4514,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4514,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6592,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6592,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4532,
            "y": 0.7426,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5468,
            "y": 0.7426,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 20.0,
        "frame": 600,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3259,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4259,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4259,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5259,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5259,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4459,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4459,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6524,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6524,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4526,
            "y": 0.7396,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5474,
            "y": 0.7396,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 20.07,
        "frame": 602,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3205,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4205,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4205,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5205,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5205,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4405,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4405,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6456,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6456,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.452,
            "y": 0.7365,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.548,
            "y": 0.7365,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 20.13,
        "frame": 604,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3152,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4152,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4152,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5152,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5152,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4352,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4352,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6389,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6389,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4513,
            "y": 0.7335,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5487,
            "y": 0.7335,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 20.2,
        "frame": 606,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3099,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4099,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4099,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5099,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5099,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4299,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4299,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6323,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6323,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4507,
            "y": 0.7305,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5493,
            "y": 0.7305,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 20.27,
        "frame": 608,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.3046,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.4046,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.4046,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.5046,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.5046,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4246,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4246,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6258,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6258,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.45,
            "y": 0.7276,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.55,
            "y": 0.7276,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 20.33,
        "frame": 610,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2995,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3995,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3995,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4995,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4995,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4195,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4195,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6194,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6194,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4494,
            "y": 0.7247,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5506,
            "y": 0.7247,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 20.4,
        "frame": 612,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2945,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3945,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3945,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4945,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4945,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4145,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4145,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6131,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6131,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4488,
            "y": 0.7219,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5512,
            "y": 0.7219,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 20.47,
        "frame": 614,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2895,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3895,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3895,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4895,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4895,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4095,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4095,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6069,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6069,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4481,
            "y": 0.7191,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5519,
            "y": 0.7191,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 20.53,
        "frame": 616,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2847,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3847,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3847,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4847,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4847,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4047,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4047,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.6009,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.6009,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4475,
            "y": 0.7164,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5525,
            "y": 0.7164,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 20.6,
        "frame": 618,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.38,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.38,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.48,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.48,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.4,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.4,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.595,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.595,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4469,
            "y": 0.7138,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5531,
            "y": 0.7138,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 20.67,
        "frame": 620,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2755,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3755,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3755,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4755,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4755,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3955,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3955,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5894,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5894,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4462,
            "y": 0.7112,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5538,
            "y": 0.7112,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 20.73,
        "frame": 622,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2711,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3711,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3711,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4711,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4711,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3911,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3911,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5839,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5839,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4456,
            "y": 0.7087,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5544,
            "y": 0.7087,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 20.8,
        "frame": 624,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2669,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3669,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3669,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4669,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4669,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3869,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3869,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5786,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5786,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.445,
            "y": 0.7064,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.555,
            "y": 0.7064,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 20.87,
        "frame": 626,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2628,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3628,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3628,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4628,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4628,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3828,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3828,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5735,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5735,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4443,
            "y": 0.7041,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5557,
            "y": 0.7041,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 20.93,
        "frame": 628,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2589,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3589,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3589,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4589,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4589,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3789,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3789,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5687,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5687,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4437,
            "y": 0.7019,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5563,
            "y": 0.7019,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 21.0,
        "frame": 630,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2552,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3552,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3552,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4552,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4552,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3752,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3752,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5641,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5641,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.443,
            "y": 0.6998,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.557,
            "y": 0.6998,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 21.07,
        "frame": 632,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2518,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3518,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3518,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4518,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4518,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3718,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3718,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5597,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5597,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4424,
            "y": 0.6979,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5576,
            "y": 0.6979,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 21.13,
        "frame": 634,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2485,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3485,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3485,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4485,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4485,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3685,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3685,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5556,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5556,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4418,
            "y": 0.696,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5582,
            "y": 0.696,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 21.2,
        "frame": 636,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2454,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3454,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3454,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4454,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4454,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3654,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3654,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5517,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5517,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4411,
            "y": 0.6943,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5589,
            "y": 0.6943,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 21.27,
        "frame": 638,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2425,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3425,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3425,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4425,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4425,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3625,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3625,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5482,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5482,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4405,
            "y": 0.6927,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5595,
            "y": 0.6927,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 21.33,
        "frame": 640,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2399,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3399,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3399,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4399,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4399,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3599,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3599,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5449,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5449,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4399,
            "y": 0.6912,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5601,
            "y": 0.6912,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 21.4,
        "frame": 642,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2375,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3375,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3375,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4375,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4375,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3575,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3575,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5419,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5419,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4392,
            "y": 0.6899,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5608,
            "y": 0.6899,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 21.47,
        "frame": 644,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2354,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3354,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3354,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4354,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4354,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3554,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3554,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5392,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5392,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4386,
            "y": 0.6886,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5614,
            "y": 0.6886,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 21.53,
        "frame": 646,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2334,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3334,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3334,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4334,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4334,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3534,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3534,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5368,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5368,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.438,
            "y": 0.6876,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.562,
            "y": 0.6876,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 21.6,
        "frame": 648,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2318,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3318,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3318,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4318,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4318,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3518,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3518,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5347,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5347,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4373,
            "y": 0.6866,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5627,
            "y": 0.6866,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 21.67,
        "frame": 650,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2304,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3304,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3304,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4304,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4304,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3504,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3504,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5329,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5329,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4367,
            "y": 0.6858,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5633,
            "y": 0.6858,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 21.73,
        "frame": 652,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2292,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3292,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3292,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4292,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4292,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3492,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3492,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5315,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5315,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.436,
            "y": 0.6852,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.564,
            "y": 0.6852,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 21.8,
        "frame": 654,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2283,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3283,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3283,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4283,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4283,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3483,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3483,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5304,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5304,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4354,
            "y": 0.6847,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5646,
            "y": 0.6847,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 21.87,
        "frame": 656,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2276,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3276,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3276,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4276,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4276,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3476,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3476,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5295,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5295,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4348,
            "y": 0.6843,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5652,
            "y": 0.6843,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 21.93,
        "frame": 658,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2272,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3272,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3272,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4272,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4272,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3472,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3472,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5291,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5291,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.4341,
            "y": 0.6841,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.5659,
            "y": 0.6841,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 22.0,
        "frame": 660,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 22.07,
        "frame": 662,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 22.13,
        "frame": 664,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 22.2,
        "frame": 666,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 22.27,
        "frame": 668,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 22.33,
        "frame": 670,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 22.4,
        "frame": 672,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 22.47,
        "frame": 674,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 22.53,
        "frame": 676,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 22.6,
        "frame": 678,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 22.67,
        "frame": 680,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 22.73,
        "frame": 682,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 22.8,
        "frame": 684,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 22.87,
        "frame": 686,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 22.93,
        "frame": 688,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 23.0,
        "frame": 690,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 23.07,
        "frame": 692,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 23.13,
        "frame": 694,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 23.2,
        "frame": 696,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 23.27,
        "frame": 698,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 23.33,
        "frame": 700,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 23.4,
        "frame": 702,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 23.47,
        "frame": 704,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 23.53,
        "frame": 706,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 23.6,
        "frame": 708,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 23.67,
        "frame": 710,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 23.73,
        "frame": 712,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 23.8,
        "frame": 714,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 23.87,
        "frame": 716,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 23.93,
        "frame": 718,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      },
      {
        "t": 24.0,
        "frame": 720,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.2271,
            "v": 0.95
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.3271,
            "v": 0.94
          },
          "right_shoulder": {
            "x": 0.56,
            "y": 0.3271,
            "v": 0.94
          },
          "left_elbow": {
            "x": 0.41,
            "y": 0.4271,
            "v": 0.9
          },
          "right_elbow": {
            "x": 0.59,
            "y": 0.4271,
            "v": 0.9
          },
          "left_wrist": {
            "x": 0.43,
            "y": 0.3471,
            "v": 0.88
          },
          "right_wrist": {
            "x": 0.57,
            "y": 0.3471,
            "v": 0.88
          },
          "left_hip": {
            "x": 0.46,
            "y": 0.5289,
            "v": 0.95
          },
          "right_hip": {
            "x": 0.54,
            "y": 0.5289,
            "v": 0.95
          },
          "left_knee": {
            "x": 0.43,
            "y": 0.684,
            "v": 0.93
          },
          "right_knee": {
            "x": 0.57,
            "y": 0.684,
            "v": 0.93
          },
          "left_ankle": {
            "x": 0.42,
            "y": 0.87,
            "v": 0.92
          },
          "right_ankle": {
            "x": 0.58,
            "y": 0.87,
            "v": 0.92
          }
        }
      }
    ]
  },
  "deadlift": {
    "id": "deadlift",
    "exercise": "deadlift",
    "title": "Conventional Deadlift",
    "subtitle": "GenAI-MVS Benchmark Dataset (Clip genai_mvs_deadlift_train_16)",
    "video": "assets/videos/deadlift.mp4",
    "duration": 3.2,
    "fps": 24.0,
    "score": 60,
    "confidence": 0.68,
    "repCount": 2,
    "stabilityScore": 52.4,
    "summary": "2 repetitions completed. Neutral spine maintained through hip hinge. Excellent bar path trajectory with minimal horizontal deviation.",
    "benchmark": "GenAI Multi-View Sports Benchmark (CC-BY-4.0)",
    "setAnalysis": {
      "averageFitScore": 60.3,
      "bestRepIndex": 2,
      "worstRepIndex": 1,
      "reps": [
        {
          "repIndex": 1,
          "startTime": 0.0,
          "endTime": 0.33,
          "duration": 0.33,
          "fitScore": {
            "stability": 40.7,
            "symmetry": 83.5,
            "rangeOfMotion": 100.0,
            "tempoControl": 73.6,
            "posture": 50.0,
            "overall": 57.9
          },
          "averageVelocity": 347.3,
          "rangeOfMotion": 104.5,
          "instability": 0.0494,
          "asymmetry": 6.3
        },
        {
          "repIndex": 2,
          "startTime": 0.33,
          "endTime": 3.04,
          "duration": 2.71,
          "fitScore": {
            "stability": 64.2,
            "symmetry": 79.3,
            "rangeOfMotion": 100.0,
            "tempoControl": 72.7,
            "posture": 50.0,
            "overall": 62.8
          },
          "averageVelocity": 166.0,
          "rangeOfMotion": 114.1,
          "instability": 0.0299,
          "asymmetry": 8.0
        }
      ],
      "breakdown": {
        "stability": 52.4,
        "symmetry": 81.4,
        "rangeOfMotion": 100.0,
        "tempoControl": 73.1,
        "posture": 50.0,
        "overall": 60.3
      },
      "fatigue": {
        "fatigueScore": 20.9,
        "fatigueDetected": false,
        "fatigueOnsetRep": null,
        "velocityDropPercent": 52.2,
        "stabilityDropPercent": 0.0,
        "rangeOfMotionDropPercent": 0.0,
        "fitScoreDropPercent": 0.0,
        "summary": "Tempo slowed 52.2% by the end of the set, but movement quality stayed stable with zero form breakdown."
      }
    },
    "mistakes": [],
    "recommendations": [
      "Keep current loading and tempo pacing. Spine angle stayed within safe lordotic thresholds throughout.",
      "Maintain current camera angle (45-degree oblique) for reliable hip-vs-knee moment arm calculation.",
      "Rep 2 demonstrated superior stability (64.2 vs 40.7) and controlled lock out."
    ],
    "timeSeries": [
      {
        "t": 0.0,
        "frame": 0,
        "hipAngle": 80.0,
        "kneeAngle": 90.0,
        "spineAngle": 45.0,
        "torsoAngle": 45.0,
        "phase": "concentric"
      },
      {
        "t": 0.07,
        "frame": 1,
        "hipAngle": 86.1,
        "kneeAngle": 94.0,
        "spineAngle": 48.0,
        "torsoAngle": 48.0,
        "phase": "concentric"
      },
      {
        "t": 0.13,
        "frame": 3,
        "hipAngle": 92.1,
        "kneeAngle": 98.1,
        "spineAngle": 51.1,
        "torsoAngle": 51.1,
        "phase": "concentric"
      },
      {
        "t": 0.2,
        "frame": 4,
        "hipAngle": 98.2,
        "kneeAngle": 102.1,
        "spineAngle": 54.1,
        "torsoAngle": 54.1,
        "phase": "concentric"
      },
      {
        "t": 0.27,
        "frame": 6,
        "hipAngle": 104.2,
        "kneeAngle": 106.2,
        "spineAngle": 57.1,
        "torsoAngle": 57.1,
        "phase": "concentric"
      },
      {
        "t": 0.33,
        "frame": 8,
        "hipAngle": 110.3,
        "kneeAngle": 110.3,
        "spineAngle": 60.1,
        "torsoAngle": 60.1,
        "phase": "concentric"
      },
      {
        "t": 0.4,
        "frame": 9,
        "hipAngle": 115.5,
        "kneeAngle": 115.7,
        "spineAngle": 62.4,
        "torsoAngle": 62.4,
        "phase": "concentric"
      },
      {
        "t": 0.47,
        "frame": 11,
        "hipAngle": 120.8,
        "kneeAngle": 121.1,
        "spineAngle": 64.7,
        "torsoAngle": 64.7,
        "phase": "concentric"
      },
      {
        "t": 0.53,
        "frame": 12,
        "hipAngle": 125.9,
        "kneeAngle": 126.4,
        "spineAngle": 67.0,
        "torsoAngle": 67.0,
        "phase": "concentric"
      },
      {
        "t": 0.6,
        "frame": 14,
        "hipAngle": 131.0,
        "kneeAngle": 131.6,
        "spineAngle": 69.2,
        "torsoAngle": 69.2,
        "phase": "concentric"
      },
      {
        "t": 0.67,
        "frame": 16,
        "hipAngle": 135.9,
        "kneeAngle": 136.7,
        "spineAngle": 71.3,
        "torsoAngle": 71.3,
        "phase": "concentric"
      },
      {
        "t": 0.73,
        "frame": 17,
        "hipAngle": 140.6,
        "kneeAngle": 141.6,
        "spineAngle": 73.4,
        "torsoAngle": 73.4,
        "phase": "concentric"
      },
      {
        "t": 0.8,
        "frame": 19,
        "hipAngle": 145.1,
        "kneeAngle": 146.2,
        "spineAngle": 75.4,
        "torsoAngle": 75.4,
        "phase": "concentric"
      },
      {
        "t": 0.87,
        "frame": 20,
        "hipAngle": 149.4,
        "kneeAngle": 150.7,
        "spineAngle": 77.3,
        "torsoAngle": 77.3,
        "phase": "concentric"
      },
      {
        "t": 0.93,
        "frame": 22,
        "hipAngle": 153.4,
        "kneeAngle": 154.8,
        "spineAngle": 79.0,
        "torsoAngle": 79.0,
        "phase": "concentric"
      },
      {
        "t": 1.0,
        "frame": 24,
        "hipAngle": 157.2,
        "kneeAngle": 158.6,
        "spineAngle": 80.6,
        "torsoAngle": 80.6,
        "phase": "concentric"
      },
      {
        "t": 1.07,
        "frame": 25,
        "hipAngle": 160.6,
        "kneeAngle": 162.2,
        "spineAngle": 82.1,
        "torsoAngle": 82.1,
        "phase": "concentric"
      },
      {
        "t": 1.13,
        "frame": 27,
        "hipAngle": 163.6,
        "kneeAngle": 165.3,
        "spineAngle": 83.5,
        "torsoAngle": 83.5,
        "phase": "concentric"
      },
      {
        "t": 1.2,
        "frame": 28,
        "hipAngle": 166.3,
        "kneeAngle": 168.1,
        "spineAngle": 84.6,
        "torsoAngle": 84.6,
        "phase": "concentric"
      },
      {
        "t": 1.27,
        "frame": 30,
        "hipAngle": 168.6,
        "kneeAngle": 170.5,
        "spineAngle": 85.7,
        "torsoAngle": 85.7,
        "phase": "concentric"
      },
      {
        "t": 1.33,
        "frame": 32,
        "hipAngle": 170.6,
        "kneeAngle": 172.4,
        "spineAngle": 86.5,
        "torsoAngle": 86.5,
        "phase": "concentric"
      },
      {
        "t": 1.4,
        "frame": 33,
        "hipAngle": 172.1,
        "kneeAngle": 174.0,
        "spineAngle": 87.1,
        "torsoAngle": 87.1,
        "phase": "concentric"
      },
      {
        "t": 1.47,
        "frame": 35,
        "hipAngle": 173.1,
        "kneeAngle": 175.1,
        "spineAngle": 87.6,
        "torsoAngle": 87.6,
        "phase": "concentric"
      },
      {
        "t": 1.53,
        "frame": 36,
        "hipAngle": 173.8,
        "kneeAngle": 175.8,
        "spineAngle": 87.9,
        "torsoAngle": 87.9,
        "phase": "concentric"
      },
      {
        "t": 1.6,
        "frame": 38,
        "hipAngle": 174.0,
        "kneeAngle": 176.0,
        "spineAngle": 88.0,
        "torsoAngle": 88.0,
        "phase": "eccentric"
      },
      {
        "t": 1.67,
        "frame": 40,
        "hipAngle": 165.6,
        "kneeAngle": 167.4,
        "spineAngle": 84.1,
        "torsoAngle": 84.1,
        "phase": "eccentric"
      },
      {
        "t": 1.73,
        "frame": 41,
        "hipAngle": 157.4,
        "kneeAngle": 158.9,
        "spineAngle": 80.2,
        "torsoAngle": 80.2,
        "phase": "eccentric"
      },
      {
        "t": 1.8,
        "frame": 43,
        "hipAngle": 149.5,
        "kneeAngle": 150.7,
        "spineAngle": 76.5,
        "torsoAngle": 76.5,
        "phase": "eccentric"
      },
      {
        "t": 1.87,
        "frame": 44,
        "hipAngle": 142.0,
        "kneeAngle": 143.0,
        "spineAngle": 73.0,
        "torsoAngle": 73.0,
        "phase": "eccentric"
      },
      {
        "t": 1.93,
        "frame": 46,
        "hipAngle": 135.0,
        "kneeAngle": 135.8,
        "spineAngle": 69.7,
        "torsoAngle": 69.7,
        "phase": "eccentric"
      },
      {
        "t": 2.0,
        "frame": 48,
        "hipAngle": 128.7,
        "kneeAngle": 129.3,
        "spineAngle": 66.8,
        "torsoAngle": 66.8,
        "phase": "eccentric"
      },
      {
        "t": 2.07,
        "frame": 49,
        "hipAngle": 123.2,
        "kneeAngle": 123.6,
        "spineAngle": 64.2,
        "torsoAngle": 64.2,
        "phase": "eccentric"
      },
      {
        "t": 2.13,
        "frame": 51,
        "hipAngle": 118.6,
        "kneeAngle": 118.8,
        "spineAngle": 62.0,
        "torsoAngle": 62.0,
        "phase": "eccentric"
      },
      {
        "t": 2.2,
        "frame": 52,
        "hipAngle": 114.9,
        "kneeAngle": 115.0,
        "spineAngle": 60.3,
        "torsoAngle": 60.3,
        "phase": "eccentric"
      },
      {
        "t": 2.27,
        "frame": 54,
        "hipAngle": 112.2,
        "kneeAngle": 112.2,
        "spineAngle": 59.0,
        "torsoAngle": 59.0,
        "phase": "eccentric"
      },
      {
        "t": 2.33,
        "frame": 56,
        "hipAngle": 110.5,
        "kneeAngle": 110.6,
        "spineAngle": 58.3,
        "torsoAngle": 58.3,
        "phase": "eccentric"
      },
      {
        "t": 2.4,
        "frame": 57,
        "hipAngle": 110.0,
        "kneeAngle": 110.0,
        "spineAngle": 58.0,
        "torsoAngle": 58.0,
        "phase": "setup"
      },
      {
        "t": 2.47,
        "frame": 59,
        "hipAngle": 110.0,
        "kneeAngle": 110.0,
        "spineAngle": 58.0,
        "torsoAngle": 58.0,
        "phase": "setup"
      },
      {
        "t": 2.53,
        "frame": 60,
        "hipAngle": 110.0,
        "kneeAngle": 110.0,
        "spineAngle": 58.0,
        "torsoAngle": 58.0,
        "phase": "setup"
      },
      {
        "t": 2.6,
        "frame": 62,
        "hipAngle": 110.0,
        "kneeAngle": 110.0,
        "spineAngle": 58.0,
        "torsoAngle": 58.0,
        "phase": "setup"
      },
      {
        "t": 2.67,
        "frame": 64,
        "hipAngle": 110.0,
        "kneeAngle": 110.0,
        "spineAngle": 58.0,
        "torsoAngle": 58.0,
        "phase": "setup"
      },
      {
        "t": 2.73,
        "frame": 65,
        "hipAngle": 110.0,
        "kneeAngle": 110.0,
        "spineAngle": 58.0,
        "torsoAngle": 58.0,
        "phase": "setup"
      },
      {
        "t": 2.8,
        "frame": 67,
        "hipAngle": 110.0,
        "kneeAngle": 110.0,
        "spineAngle": 58.0,
        "torsoAngle": 58.0,
        "phase": "setup"
      },
      {
        "t": 2.87,
        "frame": 68,
        "hipAngle": 110.0,
        "kneeAngle": 110.0,
        "spineAngle": 58.0,
        "torsoAngle": 58.0,
        "phase": "setup"
      },
      {
        "t": 2.93,
        "frame": 70,
        "hipAngle": 110.0,
        "kneeAngle": 110.0,
        "spineAngle": 58.0,
        "torsoAngle": 58.0,
        "phase": "setup"
      },
      {
        "t": 3.0,
        "frame": 72,
        "hipAngle": 110.0,
        "kneeAngle": 110.0,
        "spineAngle": 58.0,
        "torsoAngle": 58.0,
        "phase": "setup"
      },
      {
        "t": 3.07,
        "frame": 73,
        "hipAngle": 110.0,
        "kneeAngle": 110.0,
        "spineAngle": 58.0,
        "torsoAngle": 58.0,
        "phase": "setup"
      },
      {
        "t": 3.13,
        "frame": 75,
        "hipAngle": 110.0,
        "kneeAngle": 110.0,
        "spineAngle": 58.0,
        "torsoAngle": 58.0,
        "phase": "setup"
      },
      {
        "t": 3.2,
        "frame": 76,
        "hipAngle": 110.0,
        "kneeAngle": 110.0,
        "spineAngle": 58.0,
        "torsoAngle": 58.0,
        "phase": "setup"
      }
    ],
    "poseFrames": [
      {
        "t": 0.0,
        "frame": 0,
        "landmarks": {
          "head": {
            "x": 0.42,
            "y": 0.32,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.44,
            "y": 0.44,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.48,
            "y": 0.44,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.59,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.59,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.84,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.84,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.62,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.62,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.72,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.72,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 0.07,
        "frame": 1,
        "landmarks": {
          "head": {
            "x": 0.4238277511961722,
            "y": 0.3085,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.44382775119617224,
            "y": 0.4285,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.4838277511961722,
            "y": 0.4285,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5785,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5785,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.8158,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.8158,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.6149,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.6149,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7187,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7187,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 0.13,
        "frame": 3,
        "landmarks": {
          "head": {
            "x": 0.4276555023923445,
            "y": 0.297,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.44765550239234453,
            "y": 0.417,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.4876555023923445,
            "y": 0.417,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.567,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.567,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.7915,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.7915,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.6098,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.6098,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7174,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7174,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 0.2,
        "frame": 4,
        "landmarks": {
          "head": {
            "x": 0.43148325358851675,
            "y": 0.2856,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.45148325358851676,
            "y": 0.4056,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.49148325358851674,
            "y": 0.4056,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5556,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5556,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.7673,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.7673,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.6047,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.6047,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7162,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7162,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 0.27,
        "frame": 6,
        "landmarks": {
          "head": {
            "x": 0.435311004784689,
            "y": 0.2741,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.455311004784689,
            "y": 0.3941,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.495311004784689,
            "y": 0.3941,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5441,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5441,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.743,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.743,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5996,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5996,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7149,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7149,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 0.33,
        "frame": 8,
        "landmarks": {
          "head": {
            "x": 0.43911401687545154,
            "y": 0.2627,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.45911401687545156,
            "y": 0.3827,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.49911401687545154,
            "y": 0.3827,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5327,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5327,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.7189,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.7189,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5945,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5945,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7136,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7136,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 0.4,
        "frame": 9,
        "landmarks": {
          "head": {
            "x": 0.4424426253267838,
            "y": 0.2527,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.4624426253267838,
            "y": 0.3727,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5024426253267839,
            "y": 0.3727,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5227,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5227,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.6979,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.6979,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5901,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5901,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7125,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7125,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 0.47,
        "frame": 11,
        "landmarks": {
          "head": {
            "x": 0.4457474827280121,
            "y": 0.2428,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.46574748272801214,
            "y": 0.3628,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5057474827280121,
            "y": 0.3628,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5128,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5128,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.6769,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.6769,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5857,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5857,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7114,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7114,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 0.53,
        "frame": 12,
        "landmarks": {
          "head": {
            "x": 0.449006131836124,
            "y": 0.233,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.469006131836124,
            "y": 0.353,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.509006131836124,
            "y": 0.353,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.503,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.503,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.6563,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.6563,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5813,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5813,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7103,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7103,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 0.6,
        "frame": 14,
        "landmarks": {
          "head": {
            "x": 0.4521964294037629,
            "y": 0.2234,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.47219642940376294,
            "y": 0.3434,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5121964294037629,
            "y": 0.3434,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4934,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4934,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.6361,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.6361,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5771,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5771,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7093,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7093,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 0.67,
        "frame": 16,
        "landmarks": {
          "head": {
            "x": 0.45529669664753214,
            "y": 0.2141,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.47529669664753216,
            "y": 0.3341,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5152966966475321,
            "y": 0.3341,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4841,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4841,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.6165,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.6165,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5729,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5729,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7082,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7082,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 0.73,
        "frame": 17,
        "landmarks": {
          "head": {
            "x": 0.45828586656016196,
            "y": 0.2051,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.478285866560162,
            "y": 0.3251,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.518285866560162,
            "y": 0.3251,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4751,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4751,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.5975,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.5975,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.569,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.569,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7072,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7072,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 0.8,
        "frame": 19,
        "landmarks": {
          "head": {
            "x": 0.46114362706552203,
            "y": 0.1966,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.48114362706552205,
            "y": 0.3166,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5211436270655221,
            "y": 0.3166,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4666,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4666,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.5794,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.5794,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5651,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5651,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7063,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7063,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 0.87,
        "frame": 20,
        "landmarks": {
          "head": {
            "x": 0.4638505590437084,
            "y": 0.1884,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.48385055904370844,
            "y": 0.3084,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5238505590437084,
            "y": 0.3084,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4584,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4584,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.5623,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.5623,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5615,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5615,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7054,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7054,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 0.93,
        "frame": 22,
        "landmarks": {
          "head": {
            "x": 0.4663882682882933,
            "y": 0.1808,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.4863882682882933,
            "y": 0.3008,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5263882682882932,
            "y": 0.3008,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4508,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4508,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.5462,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.5462,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5581,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5581,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7045,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7045,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 1.0,
        "frame": 24,
        "landmarks": {
          "head": {
            "x": 0.46873951049905976,
            "y": 0.1738,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.4887395104990598,
            "y": 0.2938,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5287395104990598,
            "y": 0.2938,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4438,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4438,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.5313,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.5313,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.555,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.555,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7038,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7038,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 1.07,
        "frame": 25,
        "landmarks": {
          "head": {
            "x": 0.4708883084608673,
            "y": 0.1673,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.49088830846086734,
            "y": 0.2873,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5308883084608673,
            "y": 0.2873,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4373,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4373,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.5177,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.5177,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5521,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5521,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.703,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.703,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 1.13,
        "frame": 27,
        "landmarks": {
          "head": {
            "x": 0.47282006061239135,
            "y": 0.1615,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.49282006061239136,
            "y": 0.2815,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5328200606123914,
            "y": 0.2815,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4315,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4315,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.5055,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.5055,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5496,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5496,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7024,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7024,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 1.2,
        "frame": 28,
        "landmarks": {
          "head": {
            "x": 0.4745216402669886,
            "y": 0.1564,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.49452164026698864,
            "y": 0.2764,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5345216402669887,
            "y": 0.2764,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4264,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4264,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.4947,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.4947,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5473,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5473,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7018,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7018,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 1.27,
        "frame": 30,
        "landmarks": {
          "head": {
            "x": 0.4759814848114601,
            "y": 0.1521,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.4959814848114601,
            "y": 0.2721,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5359814848114601,
            "y": 0.2721,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4221,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4221,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.4855,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.4855,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5454,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5454,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7013,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7013,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 1.33,
        "frame": 32,
        "landmarks": {
          "head": {
            "x": 0.47718967427658604,
            "y": 0.1484,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.49718967427658606,
            "y": 0.2684,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.537189674276586,
            "y": 0.2684,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4184,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4184,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.4778,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.4778,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5437,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5437,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7009,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7009,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 1.4,
        "frame": 33,
        "landmarks": {
          "head": {
            "x": 0.4781379987455291,
            "y": 0.1456,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.4981379987455291,
            "y": 0.2656,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5381379987455291,
            "y": 0.2656,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4156,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4156,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.4718,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.4718,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5425,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5425,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7006,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7006,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 1.47,
        "frame": 35,
        "landmarks": {
          "head": {
            "x": 0.47882001414204994,
            "y": 0.1435,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.49882001414204996,
            "y": 0.2635,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5388200141420499,
            "y": 0.2635,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4135,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4135,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.4675,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.4675,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5416,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5416,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7004,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7004,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 1.53,
        "frame": 36,
        "landmarks": {
          "head": {
            "x": 0.4792310860194422,
            "y": 0.1423,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.4992310860194422,
            "y": 0.2623,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5392310860194423,
            "y": 0.2623,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4123,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4123,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.4649,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.4649,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.541,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.541,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7003,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7003,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 1.6,
        "frame": 38,
        "landmarks": {
          "head": {
            "x": 0.47936842105263155,
            "y": 0.1419,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.4993684210526316,
            "y": 0.2619,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5393684210526316,
            "y": 0.2619,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4119,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4119,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.464,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.464,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5408,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5408,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7002,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7002,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 1.67,
        "frame": 40,
        "landmarks": {
          "head": {
            "x": 0.47409241496710525,
            "y": 0.1577,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.49409241496710526,
            "y": 0.2777,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5340924149671052,
            "y": 0.2777,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4277,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4277,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.4974,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.4974,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5479,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5479,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.702,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.702,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 1.73,
        "frame": 41,
        "landmarks": {
          "head": {
            "x": 0.4689066828084876,
            "y": 0.1733,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.4889066828084876,
            "y": 0.2933,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5289066828084875,
            "y": 0.2933,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4433,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4433,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.5303,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.5303,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5548,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5548,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7037,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7037,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 1.8,
        "frame": 43,
        "landmarks": {
          "head": {
            "x": 0.46389995389176897,
            "y": 0.1883,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.483899953891769,
            "y": 0.3083,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.523899953891769,
            "y": 0.3083,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4583,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4583,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.562,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.562,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5615,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5615,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7054,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7054,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 1.87,
        "frame": 44,
        "landmarks": {
          "head": {
            "x": 0.4591578947368421,
            "y": 0.2025,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.4791578947368421,
            "y": 0.3225,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.519157894736842,
            "y": 0.3225,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4725,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4725,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.592,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.592,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5678,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5678,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7069,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7069,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 1.93,
        "frame": 46,
        "landmarks": {
          "head": {
            "x": 0.4547616432905949,
            "y": 0.2157,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.4747616432905949,
            "y": 0.3357,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5147616432905948,
            "y": 0.3357,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4857,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4857,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.6198,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.6198,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5737,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5737,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7084,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7084,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 2.0,
        "frame": 48,
        "landmarks": {
          "head": {
            "x": 0.45078642063414376,
            "y": 0.2276,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.4707864206341438,
            "y": 0.3476,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5107864206341437,
            "y": 0.3476,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.4976,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.4976,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.645,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.645,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.579,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.579,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7097,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7097,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 2.07,
        "frame": 49,
        "landmarks": {
          "head": {
            "x": 0.4473002439292806,
            "y": 0.2381,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.4673002439292806,
            "y": 0.3581,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5073002439292805,
            "y": 0.3581,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5081,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5081,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.6671,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.6671,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5836,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5836,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7109,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7109,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 2.13,
        "frame": 51,
        "landmarks": {
          "head": {
            "x": 0.44436276262597635,
            "y": 0.2469,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.46436276262597637,
            "y": 0.3669,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5043627626259763,
            "y": 0.3669,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5169,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5169,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.6857,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.6857,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5875,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5875,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7119,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7119,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 2.2,
        "frame": 52,
        "landmarks": {
          "head": {
            "x": 0.4420242378437543,
            "y": 0.2539,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.4620242378437543,
            "y": 0.3739,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5020242378437543,
            "y": 0.3739,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5239,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5239,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.7005,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.7005,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5906,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5906,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7127,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7127,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 2.27,
        "frame": 54,
        "landmarks": {
          "head": {
            "x": 0.4403246823899998,
            "y": 0.259,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.4603246823899998,
            "y": 0.379,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.5003246823899997,
            "y": 0.379,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.529,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.529,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.7113,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.7113,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5929,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5929,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7132,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7132,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 2.33,
        "frame": 56,
        "landmarks": {
          "head": {
            "x": 0.4392931761297323,
            "y": 0.2621,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.4592931761297323,
            "y": 0.3821,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.4992931761297323,
            "y": 0.3821,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5321,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5321,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.7178,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.7178,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5943,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5943,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7136,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7136,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 2.4,
        "frame": 57,
        "landmarks": {
          "head": {
            "x": 0.43894736842105264,
            "y": 0.2632,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.45894736842105266,
            "y": 0.3832,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.4989473684210526,
            "y": 0.3832,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5332,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5332,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.72,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.72,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5947,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5947,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7137,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7137,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 2.47,
        "frame": 59,
        "landmarks": {
          "head": {
            "x": 0.43894736842105264,
            "y": 0.2632,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.45894736842105266,
            "y": 0.3832,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.4989473684210526,
            "y": 0.3832,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5332,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5332,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.72,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.72,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5947,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5947,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7137,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7137,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 2.53,
        "frame": 60,
        "landmarks": {
          "head": {
            "x": 0.43894736842105264,
            "y": 0.2632,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.45894736842105266,
            "y": 0.3832,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.4989473684210526,
            "y": 0.3832,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5332,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5332,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.72,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.72,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5947,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5947,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7137,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7137,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 2.6,
        "frame": 62,
        "landmarks": {
          "head": {
            "x": 0.43894736842105264,
            "y": 0.2632,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.45894736842105266,
            "y": 0.3832,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.4989473684210526,
            "y": 0.3832,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5332,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5332,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.72,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.72,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5947,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5947,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7137,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7137,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 2.67,
        "frame": 64,
        "landmarks": {
          "head": {
            "x": 0.43894736842105264,
            "y": 0.2632,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.45894736842105266,
            "y": 0.3832,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.4989473684210526,
            "y": 0.3832,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5332,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5332,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.72,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.72,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5947,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5947,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7137,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7137,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 2.73,
        "frame": 65,
        "landmarks": {
          "head": {
            "x": 0.43894736842105264,
            "y": 0.2632,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.45894736842105266,
            "y": 0.3832,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.4989473684210526,
            "y": 0.3832,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5332,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5332,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.72,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.72,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5947,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5947,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7137,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7137,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 2.8,
        "frame": 67,
        "landmarks": {
          "head": {
            "x": 0.43894736842105264,
            "y": 0.2632,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.45894736842105266,
            "y": 0.3832,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.4989473684210526,
            "y": 0.3832,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5332,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5332,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.72,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.72,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5947,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5947,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7137,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7137,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 2.87,
        "frame": 68,
        "landmarks": {
          "head": {
            "x": 0.43894736842105264,
            "y": 0.2632,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.45894736842105266,
            "y": 0.3832,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.4989473684210526,
            "y": 0.3832,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5332,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5332,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.72,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.72,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5947,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5947,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7137,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7137,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 2.93,
        "frame": 70,
        "landmarks": {
          "head": {
            "x": 0.43894736842105264,
            "y": 0.2632,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.45894736842105266,
            "y": 0.3832,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.4989473684210526,
            "y": 0.3832,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5332,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5332,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.72,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.72,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5947,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5947,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7137,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7137,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 3.0,
        "frame": 72,
        "landmarks": {
          "head": {
            "x": 0.43894736842105264,
            "y": 0.2632,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.45894736842105266,
            "y": 0.3832,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.4989473684210526,
            "y": 0.3832,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5332,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5332,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.72,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.72,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5947,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5947,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7137,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7137,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 3.07,
        "frame": 73,
        "landmarks": {
          "head": {
            "x": 0.43894736842105264,
            "y": 0.2632,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.45894736842105266,
            "y": 0.3832,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.4989473684210526,
            "y": 0.3832,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5332,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5332,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.72,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.72,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5947,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5947,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7137,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7137,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 3.13,
        "frame": 75,
        "landmarks": {
          "head": {
            "x": 0.43894736842105264,
            "y": 0.2632,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.45894736842105266,
            "y": 0.3832,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.4989473684210526,
            "y": 0.3832,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5332,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5332,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.72,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.72,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5947,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5947,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7137,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7137,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      },
      {
        "t": 3.2,
        "frame": 76,
        "landmarks": {
          "head": {
            "x": 0.43894736842105264,
            "y": 0.2632,
            "v": 0.85
          },
          "left_shoulder": {
            "x": 0.45894736842105266,
            "y": 0.3832,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.4989473684210526,
            "y": 0.3832,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.46,
            "y": 0.5332,
            "v": 0.85
          },
          "right_elbow": {
            "x": 0.49,
            "y": 0.5332,
            "v": 0.85
          },
          "left_wrist": {
            "x": 0.48,
            "y": 0.72,
            "v": 0.87
          },
          "right_wrist": {
            "x": 0.51,
            "y": 0.72,
            "v": 0.87
          },
          "left_hip": {
            "x": 0.42,
            "y": 0.5947,
            "v": 0.88
          },
          "right_hip": {
            "x": 0.46,
            "y": 0.5947,
            "v": 0.88
          },
          "left_knee": {
            "x": 0.46,
            "y": 0.7137,
            "v": 0.86
          },
          "right_knee": {
            "x": 0.5,
            "y": 0.7137,
            "v": 0.86
          },
          "left_ankle": {
            "x": 0.46,
            "y": 0.88,
            "v": 0.9
          },
          "right_ankle": {
            "x": 0.5,
            "y": 0.88,
            "v": 0.9
          }
        }
      }
    ]
  },
  "bench": {
    "id": "bench",
    "exercise": "bench",
    "title": "Barbell Flat Bench Press",
    "subtitle": "GenAI-MVS Benchmark Dataset (Clip genai_mvs_bench_press_train_1)",
    "video": "assets/videos/bench.mp4",
    "duration": 4.9,
    "fps": 24.0,
    "score": 36,
    "confidence": 0.77,
    "repCount": 2,
    "stabilityScore": 15.0,
    "summary": "2 repetitions completed. Elbow angle halted at 150\u00b0 minimum (press depth not reached). Significant left-right elbow asymmetry (peak 15\u00b0) and shoulder tilt.",
    "benchmark": "GenAI Multi-View Sports Benchmark (CC-BY-4.0)",
    "setAnalysis": {
      "averageFitScore": 36.0,
      "bestRepIndex": 1,
      "worstRepIndex": 2,
      "reps": [
        {
          "repIndex": 1,
          "startTime": 0.0,
          "endTime": 0.25,
          "duration": 0.25,
          "fitScore": {
            "stability": 20.0,
            "symmetry": 61.1,
            "rangeOfMotion": 34.8,
            "tempoControl": 85.7,
            "posture": 53.6,
            "overall": 42.8
          },
          "averageVelocity": 53.9,
          "rangeOfMotion": 13.5,
          "instability": 0.0916,
          "asymmetry": 15.0
        },
        {
          "repIndex": 2,
          "startTime": 0.25,
          "endTime": 1.12,
          "duration": 0.88,
          "fitScore": {
            "stability": 10.0,
            "symmetry": 67.6,
            "rangeOfMotion": 29.0,
            "tempoControl": 62.8,
            "posture": 2.7,
            "overall": 29.3
          },
          "averageVelocity": 37.8,
          "rangeOfMotion": 9.6,
          "instability": 0.1013,
          "asymmetry": 12.4
        }
      ],
      "breakdown": {
        "stability": 15.0,
        "symmetry": 64.3,
        "rangeOfMotion": 31.9,
        "tempoControl": 74.2,
        "posture": 28.1,
        "overall": 36.0
      },
      "fatigue": {
        "fatigueScore": 20.6,
        "fatigueDetected": true,
        "fatigueOnsetRep": 2,
        "velocityDropPercent": 29.8,
        "stabilityDropPercent": 0.0,
        "rangeOfMotionDropPercent": 28.9,
        "fitScoreDropPercent": 31.5,
        "summary": "Movement quality dropped 31.5% by the end of the set. Severe form breakdown observed from Rep 1 to Rep 2."
      }
    },
    "mistakes": [
      {
        "code": "range_of_motion",
        "label": "Press depth not reached (Short ROM)",
        "severity": "medium",
        "firstFrame": 0,
        "timestamp": 0.0,
        "confidence": 0.78,
        "evidence": "Minimum elbow flexion reached only 150\u00b0 (chest contact standard is 80\u00b0-90\u00b0).",
        "reference": "Bench press shoulder symmetry & range of motion",
        "refUrl": "https://www.mdpi.com/2073-8994/13/10/1859"
      },
      {
        "code": "bar_symmetry",
        "label": "Bilateral elbow asymmetry",
        "severity": "medium",
        "firstFrame": 19,
        "timestamp": 0.8,
        "confidence": 0.77,
        "evidence": "Left-right elbow angle difference peaked at 15\u00b0 during concentric press.",
        "reference": "Bench press shoulder symmetry",
        "refUrl": "https://www.mdpi.com/2073-8994/13/10/1859"
      },
      {
        "code": "shoulder_stability",
        "label": "Scapular stability asymmetry",
        "severity": "medium",
        "firstFrame": 22,
        "timestamp": 0.9,
        "confidence": 0.72,
        "evidence": "Shoulder height variance peaked at 0.114 normalized units.",
        "reference": "Bench press shoulder symmetry",
        "refUrl": "https://www.mdpi.com/2073-8994/13/10/1859"
      }
    ],
    "recommendations": [
      "Lower barbell under control to a repeatable chest touch before pressing back over glenohumeral joint.",
      "Check grip hand spacing, stack wrists vertically, and pause with lighter load until bilateral symmetry matches within 5\u00b0.",
      "Retract and depress scapulae before unracking, locking upper back firmly into the bench pad.",
      "Form quality degraded 31.5% across reps. Limit set volume before asymmetry exacerbates shoulder strain."
    ],
    "timeSeries": [
      {
        "t": 0.0,
        "frame": 0,
        "elbowLeft": 158.0,
        "elbowRight": 158.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "eccentric"
      },
      {
        "t": 0.07,
        "frame": 1,
        "elbowLeft": 155.9,
        "elbowRight": 156.7,
        "asymmetryDelta": 0.8,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "eccentric"
      },
      {
        "t": 0.13,
        "frame": 3,
        "elbowLeft": 153.7,
        "elbowRight": 155.3,
        "asymmetryDelta": 1.6,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "eccentric"
      },
      {
        "t": 0.2,
        "frame": 4,
        "elbowLeft": 151.6,
        "elbowRight": 154.0,
        "asymmetryDelta": 2.4,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "eccentric"
      },
      {
        "t": 0.27,
        "frame": 6,
        "elbowLeft": 149.4,
        "elbowRight": 150.8,
        "asymmetryDelta": 1.4,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "eccentric"
      },
      {
        "t": 0.33,
        "frame": 8,
        "elbowLeft": 147.1,
        "elbowRight": 142.7,
        "asymmetryDelta": 4.4,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "eccentric"
      },
      {
        "t": 0.4,
        "frame": 9,
        "elbowLeft": 145.6,
        "elbowRight": 137.0,
        "asymmetryDelta": 8.6,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "eccentric"
      },
      {
        "t": 0.47,
        "frame": 11,
        "elbowLeft": 145.0,
        "elbowRight": 135.0,
        "asymmetryDelta": 10.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "bottom"
      },
      {
        "t": 0.53,
        "frame": 12,
        "elbowLeft": 145.6,
        "elbowRight": 137.2,
        "asymmetryDelta": 8.4,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "eccentric"
      },
      {
        "t": 0.6,
        "frame": 14,
        "elbowLeft": 147.2,
        "elbowRight": 143.1,
        "asymmetryDelta": 4.2,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "eccentric"
      },
      {
        "t": 0.67,
        "frame": 16,
        "elbowLeft": 149.5,
        "elbowRight": 151.2,
        "asymmetryDelta": 1.7,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "eccentric"
      },
      {
        "t": 0.73,
        "frame": 17,
        "elbowLeft": 151.9,
        "elbowRight": 138.8,
        "asymmetryDelta": 13.2,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "concentric"
      },
      {
        "t": 0.8,
        "frame": 19,
        "elbowLeft": 154.4,
        "elbowRight": 143.5,
        "asymmetryDelta": 10.9,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "concentric"
      },
      {
        "t": 0.87,
        "frame": 20,
        "elbowLeft": 156.8,
        "elbowRight": 148.2,
        "asymmetryDelta": 8.6,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "concentric"
      },
      {
        "t": 0.93,
        "frame": 22,
        "elbowLeft": 159.2,
        "elbowRight": 152.8,
        "asymmetryDelta": 6.4,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "concentric"
      },
      {
        "t": 1.0,
        "frame": 24,
        "elbowLeft": 161.6,
        "elbowRight": 157.5,
        "asymmetryDelta": 4.1,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "concentric"
      },
      {
        "t": 1.07,
        "frame": 25,
        "elbowLeft": 164.1,
        "elbowRight": 162.2,
        "asymmetryDelta": 1.8,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "concentric"
      },
      {
        "t": 1.13,
        "frame": 27,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 1.2,
        "frame": 28,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 1.27,
        "frame": 30,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 1.33,
        "frame": 32,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 1.4,
        "frame": 33,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 1.47,
        "frame": 35,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 1.53,
        "frame": 36,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 1.6,
        "frame": 38,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 1.67,
        "frame": 40,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 1.73,
        "frame": 41,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 1.8,
        "frame": 43,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 1.87,
        "frame": 44,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 1.93,
        "frame": 46,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 2.0,
        "frame": 48,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 2.07,
        "frame": 49,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 2.13,
        "frame": 51,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 2.2,
        "frame": 52,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 2.27,
        "frame": 54,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 2.33,
        "frame": 56,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 2.4,
        "frame": 57,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 2.47,
        "frame": 59,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 2.53,
        "frame": 60,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 2.6,
        "frame": 62,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 2.67,
        "frame": 64,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 2.73,
        "frame": 65,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 2.8,
        "frame": 67,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 2.87,
        "frame": 68,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 2.93,
        "frame": 70,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 3.0,
        "frame": 72,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 3.07,
        "frame": 73,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 3.13,
        "frame": 75,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 3.2,
        "frame": 76,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 3.27,
        "frame": 78,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 3.33,
        "frame": 80,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 3.4,
        "frame": 81,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 3.47,
        "frame": 83,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 3.53,
        "frame": 84,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 3.6,
        "frame": 86,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 3.67,
        "frame": 88,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 3.73,
        "frame": 89,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 3.8,
        "frame": 91,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 3.87,
        "frame": 92,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 3.93,
        "frame": 94,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 4.0,
        "frame": 96,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 4.07,
        "frame": 97,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 4.13,
        "frame": 99,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 4.2,
        "frame": 100,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 4.27,
        "frame": 102,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 4.33,
        "frame": 104,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 4.4,
        "frame": 105,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 4.47,
        "frame": 107,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 4.53,
        "frame": 108,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 4.6,
        "frame": 110,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 4.67,
        "frame": 112,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 4.73,
        "frame": 113,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 4.8,
        "frame": 115,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      },
      {
        "t": 4.87,
        "frame": 116,
        "elbowLeft": 166.0,
        "elbowRight": 166.0,
        "asymmetryDelta": 0.0,
        "kneeAngle": 90.0,
        "torsoAngle": 0.0,
        "phase": "lockout"
      }
    ],
    "poseFrames": [
      {
        "t": 0.0,
        "frame": 0,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.38,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.38,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.466,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.486,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.416,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.416,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 0.07,
        "frame": 1,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3826587724524463,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3773412275475537,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.4695,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.4895,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4195,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4195,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 0.13,
        "frame": 3,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.38527034782287073,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3747296521771293,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.4729,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.4929,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4229,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4229,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 0.2,
        "frame": 4,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.387788366846173,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.372211633153827,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.4764,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.4964,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4264,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4264,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 0.27,
        "frame": 6,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.390168131018626,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.369831868981374,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.4818,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.5018,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4318,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4318,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 0.33,
        "frame": 8,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.39236739606139476,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.36763260393860525,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.4922,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.5122,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4422,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4422,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 0.4,
        "frame": 9,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3943471218179905,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.36565287818200953,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.4995,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.5195,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4495,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4495,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 0.47,
        "frame": 11,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3960721652738882,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3639278347261118,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.502,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.522,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.452,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.452,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 0.53,
        "frame": 12,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3975119043962005,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3624880956037995,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.4992,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.5192,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4492,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4492,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 0.6,
        "frame": 14,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.39864078171934453,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3613592182806555,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.4917,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.5117,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4417,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4417,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 0.67,
        "frame": 16,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.39943875802726625,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.36056124197273376,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.4812,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.5012,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4312,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4312,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 0.73,
        "frame": 17,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.39989166807870113,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3601083319212989,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.4913,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.5113,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4413,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4413,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 0.8,
        "frame": 19,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3999914720608301,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.36000852793916993,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.4842,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.5042,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4342,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4342,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 0.87,
        "frame": 20,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3997363983076626,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3602636016923374,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.4771,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.4971,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4271,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4271,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 0.93,
        "frame": 22,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.39913097474968734,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.36086902525031267,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.4699,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.4899,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4199,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4199,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 1.0,
        "frame": 24,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3981859485365136,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3618140514634864,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.4628,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.4828,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4128,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4128,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 1.07,
        "frame": 25,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3969180952593189,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3630819047406811,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.4557,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.4757,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4057,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4057,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 1.13,
        "frame": 27,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3953499211596811,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3646500788403189,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 1.2,
        "frame": 28,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.393509263611023,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.366490736388977,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 1.27,
        "frame": 30,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.39142879696470495,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.36857120303529506,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 1.33,
        "frame": 32,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.38914545253271626,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.37085454746728375,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 1.4,
        "frame": 33,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3866997630031181,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3733002369968819,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 1.47,
        "frame": 35,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3841351429258177,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3758648570741823,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 1.53,
        "frame": 36,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.38149711804109854,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.37850288195890147,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 1.6,
        "frame": 38,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3788325171314484,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3811674828685516,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 1.67,
        "frame": 40,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3761886407424903,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3838113592575097,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 1.73,
        "frame": 41,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3736124215294315,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3863875784705685,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 1.8,
        "frame": 43,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.37114959113410295,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.38885040886589706,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 1.87,
        "frame": 44,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3688438683817344,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3911561316182656,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 1.93,
        "frame": 46,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.366736183208155,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.393263816791845,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 2.0,
        "frame": 48,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3648639500938414,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3951360499061586,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 2.07,
        "frame": 49,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.36326040390241615,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.39673959609758386,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 2.13,
        "frame": 51,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.36195400991343063,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3980459900865694,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 2.2,
        "frame": 52,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3609679585222097,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3990320414777903,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 2.27,
        "frame": 54,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.36031975357657087,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.39968024642342914,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 2.33,
        "frame": 56,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.36002090165804146,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.39997909834195855,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 2.4,
        "frame": 57,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3600767078232832,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3999232921767168,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 2.47,
        "frame": 59,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.36048618143161315,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.39951381856838686,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 2.53,
        "frame": 60,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.36124205373031787,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.39875794626968214,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 2.6,
        "frame": 62,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.36233090688559694,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.39766909311440307,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 2.67,
        "frame": 64,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3637334121686484,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3962665878313516,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 2.73,
        "frame": 65,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.36542467306874626,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.39457532693125374,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 2.8,
        "frame": 67,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3673746672425536,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.39262533275744643,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 2.87,
        "frame": 68,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.369548779454427,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.390451220545573,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 2.93,
        "frame": 70,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.371908416047247,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.388091583952753,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 3.0,
        "frame": 72,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3744116900360215,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3855883099639785,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 3.07,
        "frame": 73,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3770141646628539,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3829858353371461,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 3.13,
        "frame": 75,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3796696422140928,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.38033035778590724,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 3.2,
        "frame": 76,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3823309840970099,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3776690159029901,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 3.27,
        "frame": 78,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.38495094761845156,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.37504905238154845,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 3.33,
        "frame": 80,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3874830246114244,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3725169753885756,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 3.4,
        "frame": 81,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3898822670227722,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.37011773297722783,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 3.47,
        "frame": 83,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3921060848065605,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3678939151934395,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 3.53,
        "frame": 84,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3941150019594004,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3658849980405996,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 3.6,
        "frame": 86,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3958733572769831,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3641266427230169,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 3.67,
        "frame": 88,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3973499373923761,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3626500626076239,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 3.73,
        "frame": 89,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3985185308587317,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.36148146914126833,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 3.8,
        "frame": 91,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.39935839344062973,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3606416065593703,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 3.87,
        "frame": 92,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.39985461635445907,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.36014538364554094,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 3.93,
        "frame": 94,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.39999839092103256,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.36000160907896744,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 4.0,
        "frame": 96,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.39978716493246763,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3602128350675324,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 4.07,
        "frame": 97,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3992246879575919,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3607753120424081,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 4.13,
        "frame": 99,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3983209447816374,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.36167905521836263,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 4.2,
        "frame": 100,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3970919781617656,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3629080218382344,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 4.27,
        "frame": 102,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3955596040447707,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3644403959552293,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 4.33,
        "frame": 104,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3937510243022612,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3662489756977388,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 4.4,
        "frame": 105,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.39169834385783525,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.36830165614216476,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 4.47,
        "frame": 107,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3894380007779437,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3705619992220563,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 4.53,
        "frame": 108,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3870101194431597,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3729898805568403,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 4.6,
        "frame": 110,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.38445779828200494,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.37554220171799507,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 4.67,
        "frame": 112,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.381826344711095,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.378173655288905,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 4.73,
        "frame": 113,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3791624708625301,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.38083752913746993,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 4.8,
        "frame": 115,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.3765134643755404,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.3834865356244596,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      },
      {
        "t": 4.87,
        "frame": 116,
        "landmarks": {
          "head": {
            "x": 0.5,
            "y": 0.28,
            "v": 0.9
          },
          "left_shoulder": {
            "x": 0.4,
            "y": 0.37392634897204247,
            "v": 0.88
          },
          "right_shoulder": {
            "x": 0.6,
            "y": 0.38607365102795754,
            "v": 0.88
          },
          "left_elbow": {
            "x": 0.33,
            "y": 0.45,
            "v": 0.84
          },
          "right_elbow": {
            "x": 0.67,
            "y": 0.47,
            "v": 0.84
          },
          "left_wrist": {
            "x": 0.38,
            "y": 0.4,
            "v": 0.86
          },
          "right_wrist": {
            "x": 0.62,
            "y": 0.4,
            "v": 0.86
          },
          "left_hip": {
            "x": 0.44,
            "y": 0.62,
            "v": 0.85
          },
          "right_hip": {
            "x": 0.56,
            "y": 0.62,
            "v": 0.85
          },
          "left_knee": {
            "x": 0.41,
            "y": 0.76,
            "v": 0.85
          },
          "right_knee": {
            "x": 0.59,
            "y": 0.76,
            "v": 0.85
          },
          "left_ankle": {
            "x": 0.4,
            "y": 0.9,
            "v": 0.88
          },
          "right_ankle": {
            "x": 0.6,
            "y": 0.9,
            "v": 0.88
          }
        }
      }
    ]
  }
};
