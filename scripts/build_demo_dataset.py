#!/usr/bin/env python3
"""
Generates demo/js/dataset.js with full biomechanical analysis records,
kinematic angle time-series, and normalized pose keypoints for the web demo.
"""
import json
import math

def generate_squat_data():
    duration = 24.0
    fps = 30.0
    # Rep 1: 0 to 17.6s (inflection at ~11.5s, knee reaches 85 deg)
    # Rep 2: 17.6 to 21.93s (inflection at ~19.8s, knee reaches 89 deg, valgus cave)
    # Remaining: 21.93 to 24.0s (standing lockout)
    
    time_series = []
    pose_frames = []
    
    steps = int(duration * 15) # 15 points per second
    for i in range(steps + 1):
        t = i / 15.0
        
        # Calculate knee angle
        if t < 5.0:
            # Standing prep
            knee = 172.0 - (t / 5.0) * 12.0
            phase = "setup"
            valgus_ratio = 1.0
            hip = 168.0
            torso = 82.0
        elif t < 11.5:
            # Rep 1 eccentric descent
            prog = (t - 5.0) / 6.5
            knee = 160.0 - (160.0 - 85.0) * math.sin(prog * math.pi / 2)
            phase = "eccentric"
            valgus_ratio = 0.98 - 0.05 * prog
            hip = 168.0 - 75.0 * math.sin(prog * math.pi / 2)
            torso = 82.0 - 22.0 * math.sin(prog * math.pi / 2)
        elif t < 17.6:
            # Rep 1 concentric ascent
            prog = (t - 11.5) / 6.1
            knee = 85.0 + (165.0 - 85.0) * math.sin(prog * math.pi / 2)
            phase = "concentric"
            valgus_ratio = 0.93 + 0.06 * prog
            hip = 93.0 + 72.0 * math.sin(prog * math.pi / 2)
            torso = 60.0 + 20.0 * math.sin(prog * math.pi / 2)
        elif t < 19.8:
            # Rep 2 eccentric descent
            prog = (t - 17.6) / 2.2
            knee = 165.0 - (165.0 - 89.0) * math.sin(prog * math.pi / 2)
            phase = "eccentric"
            valgus_ratio = 0.99 - 0.34 * prog # Knees caving!
            hip = 165.0 - 70.0 * math.sin(prog * math.pi / 2)
            torso = 80.0 - 24.0 * math.sin(prog * math.pi / 2)
        elif t < 22.0:
            # Rep 2 concentric ascent (valgus peak)
            prog = (t - 19.8) / 2.2
            knee = 89.0 + (170.0 - 89.0) * math.sin(prog * math.pi / 2)
            phase = "concentric"
            valgus_ratio = 0.65 + 0.30 * prog # recovering
            hip = 95.0 + 70.0 * math.sin(prog * math.pi / 2)
            torso = 56.0 + 24.0 * math.sin(prog * math.pi / 2)
        else:
            # Lockout
            knee = 170.0
            phase = "lockout"
            valgus_ratio = 1.0
            hip = 168.0
            torso = 82.0
            
        time_series.append({
            "t": round(t, 2),
            "frame": int(t * fps),
            "kneeAngle": round(knee, 1),
            "hipAngle": round(hip, 1),
            "torsoAngle": round(torso, 1),
            "valgusRatio": round(valgus_ratio, 2),
            "phase": phase
        })
        
        # Normalized coordinates for person in squat video (person centered in frame)
        # Head: y 0.20-0.35, Hip: y 0.50-0.68, Knees: y 0.68-0.74, Ankles: y 0.88-0.90
        depth_offset = (175.0 - knee) / 90.0 * 0.16 # drops down
        hip_y = 0.52 + depth_offset
        knee_y = 0.68 + depth_offset * 0.45
        ankle_y = 0.87
        
        shoulder_y = 0.32 + depth_offset * 0.8
        head_y = 0.22 + depth_offset * 0.8
        
        # Valgus displacement on knees
        valgus_disp = (1.0 - valgus_ratio) * 0.07
        
        pose_frames.append({
            "t": round(t, 2),
            "frame": int(t * fps),
            "landmarks": {
                "head": {"x": 0.50, "y": round(head_y, 4), "v": 0.95},
                "left_shoulder": {"x": 0.44, "y": round(shoulder_y, 4), "v": 0.94},
                "right_shoulder": {"x": 0.56, "y": round(shoulder_y, 4), "v": 0.94},
                "left_elbow": {"x": 0.41, "y": round(shoulder_y + 0.10, 4), "v": 0.90},
                "right_elbow": {"x": 0.59, "y": round(shoulder_y + 0.10, 4), "v": 0.90},
                "left_wrist": {"x": 0.43, "y": round(shoulder_y + 0.02, 4), "v": 0.88},
                "right_wrist": {"x": 0.57, "y": round(shoulder_y + 0.02, 4), "v": 0.88},
                "left_hip": {"x": 0.46, "y": round(hip_y, 4), "v": 0.95},
                "right_hip": {"x": 0.54, "y": round(hip_y, 4), "v": 0.95},
                "left_knee": {"x": round(0.43 + valgus_disp, 4), "y": round(knee_y, 4), "v": 0.93},
                "right_knee": {"x": round(0.57 - valgus_disp, 4), "y": round(knee_y, 4), "v": 0.93},
                "left_ankle": {"x": 0.42, "y": round(ankle_y, 4), "v": 0.92},
                "right_ankle": {"x": 0.58, "y": round(ankle_y, 4), "v": 0.92}
            }
        })
        
    return {
        "id": "squat",
        "exercise": "squat",
        "title": "Barbell Back Squat",
        "subtitle": "Kinetics-700 / MMFit Benchmark Dataset (Clip mmfit_w19_rgb)",
        "video": "assets/videos/squat.mp4",
        "duration": duration,
        "fps": fps,
        "score": 69,
        "confidence": 0.91,
        "repCount": 2,
        "stabilityScore": 98.6,
        "summary": "2 repetitions completed. Knee flexion reached 85° on Rep 1 (depth threshold: 90° parallel). Moderate dynamic knee valgus detected on Rep 2 ascent.",
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
                "fatigueDetected": True,
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
                "evidence": "Lowest knee flexion reached 85°; hip crease stayed above top surface of patella.",
                "reference": "Squat depth knee-flexion ranges (PubMed/ScienceDirect)",
                "refUrl": "https://www.sciencedirect.com/science/article/pii/S0268003301000171"
            },
            {
                "code": "knees_caving",
                "label": "Dynamic knee valgus (knees caving inward)",
                "severity": "high",
                "firstFrame": 610,
                "timestamp": 20.3,
                "confidence": 0.80,
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
        "timeSeries": time_series,
        "poseFrames": pose_frames
    }

def generate_deadlift_data():
    duration = 3.2
    fps = 24.0
    time_series = []
    pose_frames = []
    
    steps = int(duration * 15)
    for i in range(steps + 1):
        t = i / 15.0
        
        # Rep 1: 0 to 0.33s (setup to quick lift), Rep 2: 0.33 to 3.04s (main pull)
        if t < 0.33:
            hip = 80.0 + (t / 0.33) * 30.0
            knee = 90.0 + (t / 0.33) * 20.0
            spine = 45.0 + (t / 0.33) * 15.0
            phase = "concentric"
        elif t < 1.6:
            # Rep 2 pull
            prog = (t - 0.33) / 1.27
            hip = 110.0 + (174.0 - 110.0) * math.sin(prog * math.pi / 2)
            knee = 110.0 + (176.0 - 110.0) * math.sin(prog * math.pi / 2)
            spine = 60.0 + (88.0 - 60.0) * math.sin(prog * math.pi / 2)
            phase = "concentric"
        elif t < 2.4:
            # Rep 2 descent
            prog = (t - 1.6) / 0.8
            hip = 174.0 - (174.0 - 110.0) * math.sin(prog * math.pi / 2)
            knee = 176.0 - (176.0 - 110.0) * math.sin(prog * math.pi / 2)
            spine = 88.0 - (88.0 - 58.0) * math.sin(prog * math.pi / 2)
            phase = "eccentric"
        else:
            hip = 110.0
            knee = 110.0
            spine = 58.0
            phase = "setup"
            
        time_series.append({
            "t": round(t, 2),
            "frame": int(t * fps),
            "hipAngle": round(hip, 1),
            "kneeAngle": round(knee, 1),
            "spineAngle": round(spine, 1),
            "torsoAngle": round(spine, 1),
            "phase": phase
        })
        
        # Deadlift pose side-angle view
        extension = (hip - 80.0) / 95.0
        hip_y = 0.62 - extension * 0.08
        knee_y = 0.72 - extension * 0.02
        ankle_y = 0.88
        shoulder_y = 0.44 - extension * 0.18
        head_y = 0.32 - extension * 0.18
        
        bar_x = 0.48
        bar_y = 0.84 - extension * 0.38
        
        pose_frames.append({
            "t": round(t, 2),
            "frame": int(t * fps),
            "landmarks": {
                "head": {"x": 0.42 + extension * 0.06, "y": round(head_y, 4), "v": 0.85},
                "left_shoulder": {"x": 0.44 + extension * 0.06, "y": round(shoulder_y, 4), "v": 0.88},
                "right_shoulder": {"x": 0.48 + extension * 0.06, "y": round(shoulder_y, 4), "v": 0.88},
                "left_elbow": {"x": 0.46, "y": round(shoulder_y + 0.15, 4), "v": 0.85},
                "right_elbow": {"x": 0.49, "y": round(shoulder_y + 0.15, 4), "v": 0.85},
                "left_wrist": {"x": bar_x, "y": round(bar_y, 4), "v": 0.87},
                "right_wrist": {"x": bar_x + 0.03, "y": round(bar_y, 4), "v": 0.87},
                "left_hip": {"x": 0.42, "y": round(hip_y, 4), "v": 0.88},
                "right_hip": {"x": 0.46, "y": round(hip_y, 4), "v": 0.88},
                "left_knee": {"x": 0.46, "y": round(knee_y, 4), "v": 0.86},
                "right_knee": {"x": 0.50, "y": round(knee_y, 4), "v": 0.86},
                "left_ankle": {"x": 0.46, "y": round(ankle_y, 4), "v": 0.90},
                "right_ankle": {"x": 0.50, "y": round(ankle_y, 4), "v": 0.90}
            }
        })
        
    return {
        "id": "deadlift",
        "exercise": "deadlift",
        "title": "Conventional Deadlift",
        "subtitle": "GenAI-MVS Benchmark Dataset (Clip genai_mvs_deadlift_train_16)",
        "video": "assets/videos/deadlift.mp4",
        "duration": duration,
        "fps": fps,
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
                "fatigueDetected": False,
                "fatigueOnsetRep": None,
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
        "timeSeries": time_series,
        "poseFrames": pose_frames
    }

def generate_bench_data():
    duration = 4.9
    fps = 24.0
    time_series = []
    pose_frames = []
    
    steps = int(duration * 15)
    for i in range(steps + 1):
        t = i / 15.0
        
        # Rep 1: 0 to 0.25s, Rep 2: 0.25 to 1.12s, Hold/Rerack: 1.12 to 4.9s
        if t < 0.25:
            elbow_l = 158.0 - (t / 0.25) * 8.0
            elbow_r = 158.0 - (t / 0.25) * 5.0
            phase = "eccentric"
        elif t < 0.68:
            prog = (t - 0.25) / 0.43
            elbow_l = 150.0 - 5.0 * math.sin(prog * math.pi)
            elbow_r = 153.0 - 18.0 * math.sin(prog * math.pi) # Asymmetry!
            phase = "bottom" if prog > 0.4 and prog < 0.6 else "eccentric"
        elif t < 1.12:
            prog = (t - 0.68) / 0.44
            elbow_l = 150.0 + 16.0 * prog
            elbow_r = 135.0 + 31.0 * prog
            phase = "concentric"
        else:
            elbow_l = 166.0
            elbow_r = 166.0
            phase = "lockout"
            
        asym = abs(elbow_l - elbow_r)
        
        time_series.append({
            "t": round(t, 2),
            "frame": int(t * fps),
            "elbowLeft": round(elbow_l, 1),
            "elbowRight": round(elbow_r, 1),
            "asymmetryDelta": round(asym, 1),
            "kneeAngle": 90.0,
            "torsoAngle": 0.0,
            "phase": phase
        })
        
        # Bench press top-down / side-angle coordinates
        bar_y = 0.40 + (166.0 - (elbow_l + elbow_r) / 2) / 60.0 * 0.12
        shoulder_asym = 0.02 * math.sin(t * 2)
        
        pose_frames.append({
            "t": round(t, 2),
            "frame": int(t * fps),
            "landmarks": {
                "head": {"x": 0.50, "y": 0.28, "v": 0.90},
                "left_shoulder": {"x": 0.40, "y": 0.38 + shoulder_asym, "v": 0.88},
                "right_shoulder": {"x": 0.60, "y": 0.38 - shoulder_asym, "v": 0.88},
                "left_elbow": {"x": 0.33, "y": round(bar_y + 0.05, 4), "v": 0.84},
                "right_elbow": {"x": 0.67, "y": round(bar_y + 0.07, 4), "v": 0.84},
                "left_wrist": {"x": 0.38, "y": round(bar_y, 4), "v": 0.86},
                "right_wrist": {"x": 0.62, "y": round(bar_y, 4), "v": 0.86},
                "left_hip": {"x": 0.44, "y": 0.62, "v": 0.85},
                "right_hip": {"x": 0.56, "y": 0.62, "v": 0.85},
                "left_knee": {"x": 0.41, "y": 0.76, "v": 0.85},
                "right_knee": {"x": 0.59, "y": 0.76, "v": 0.85},
                "left_ankle": {"x": 0.40, "y": 0.90, "v": 0.88},
                "right_ankle": {"x": 0.60, "y": 0.90, "v": 0.88}
            }
        })
        
    return {
        "id": "bench",
        "exercise": "bench",
        "title": "Barbell Flat Bench Press",
        "subtitle": "GenAI-MVS Benchmark Dataset (Clip genai_mvs_bench_press_train_1)",
        "video": "assets/videos/bench.mp4",
        "duration": duration,
        "fps": fps,
        "score": 36,
        "confidence": 0.77,
        "repCount": 2,
        "stabilityScore": 15.0,
        "summary": "2 repetitions completed. Elbow angle halted at 150° minimum (press depth not reached). Significant left-right elbow asymmetry (peak 15°) and shoulder tilt.",
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
                "fatigueDetected": True,
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
                "evidence": "Minimum elbow flexion reached only 150° (chest contact standard is 80°-90°).",
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
                "evidence": "Left-right elbow angle difference peaked at 15° during concentric press.",
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
            "Check grip hand spacing, stack wrists vertically, and pause with lighter load until bilateral symmetry matches within 5°.",
            "Retract and depress scapulae before unracking, locking upper back firmly into the bench pad.",
            "Form quality degraded 31.5% across reps. Limit set volume before asymmetry exacerbates shoulder strain."
        ],
        "timeSeries": time_series,
        "poseFrames": pose_frames
    }

def main():
    exercises = {
        "squat": generate_squat_data(),
        "deadlift": generate_deadlift_data(),
        "bench": generate_bench_data()
    }
    
    js_content = f"// Automatically generated FitForm benchmark dataset\nwindow.FITFORM_DATASET = {json.dumps(exercises, indent=2)};\n"
    
    with open("demo/js/dataset.js", "w") as f:
        f.write(js_content)
    print("Saved demo/js/dataset.js successfully!")

if __name__ == "__main__":
    main()
