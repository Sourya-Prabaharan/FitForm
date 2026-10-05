import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Circle, Line } from "react-native-svg";
import { AnalysisResult } from "@/types";
import { Button } from "./Button";

const bones = [
  ["left_shoulder", "right_shoulder"], ["left_shoulder", "left_elbow"],
  ["left_elbow", "left_wrist"], ["right_shoulder", "right_elbow"],
  ["right_elbow", "right_wrist"], ["left_shoulder", "left_hip"],
  ["right_shoulder", "right_hip"], ["left_hip", "right_hip"],
  ["left_hip", "left_knee"], ["left_knee", "left_ankle"],
  ["right_hip", "right_knee"], ["right_knee", "right_ankle"]
];

export function AnalysisVideo({ analysis }: { analysis: AnalysisResult }) {
  const [overlay, setOverlay] = useState(true);
  const player = useVideoPlayer(analysis.videoUrl ?? null, (instance) => {
    instance.timeUpdateEventInterval = 0.066;
  });
  const { currentTime } = useEvent(player, "timeUpdate", { currentTime: 0, currentLiveTimestamp: null, currentOffsetFromLive: null, bufferedPosition: 0 });
  const { status } = useEvent(player, "statusChange", { status: player.status });
  const frames = analysis.poseFrames ?? [];
  const index = frames.findIndex((frame) => frame.timestampMs > currentTime * 1000);
  const frame = frames[index === -1 ? frames.length - 1 : Math.max(0, index - 1)];
  const size = player.videoTrack?.size;
  const ratio = size?.width && size.height ? size.width / size.height : 9 / 16;
  return (
    <View className="mt-6">
      <View style={{ aspectRatio: ratio, width: "100%", backgroundColor: "black" }}>
        <VideoView player={player} style={{ width: "100%", height: "100%" }} contentFit="contain" nativeControls />
        {overlay && frame ? (
          <Svg pointerEvents="none" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} viewBox="0 0 1000 1000" preserveAspectRatio="none">
            {bones.map(([a, b]) => {
              const p = frame.landmarks[a];
              const q = frame.landmarks[b];
              return p?.visibility >= 0.5 && q?.visibility >= 0.5 ? <Line key={`${a}-${b}`} x1={p.x * 1000} y1={p.y * 1000} x2={q.x * 1000} y2={q.y * 1000} stroke="#8CFFCB" strokeWidth={4} /> : null;
            })}
            {Object.entries(frame.landmarks).filter(([, p]) => p.visibility >= 0.5).map(([name, p]) => <Circle key={name} cx={p.x * 1000} cy={p.y * 1000} r={5} fill="#FFD166" />)}
          </Svg>
        ) : null}
      </View>
      {status === "error" ? <Text className="mt-2 text-coral">Video unavailable. Reopen this analysis to refresh its link.</Text> : null}
      <Button title={overlay ? "Hide pose" : "Show pose"} variant="ghost" onPress={() => setOverlay(!overlay)} />
      <View className="flex-row items-center justify-center gap-5">
        {([-1, 1] as const).map((direction) => <Pressable key={direction} accessibilityLabel={direction < 0 ? "Previous pose frame" : "Next pose frame"} accessibilityRole="button" style={{ padding: 12 }} onPress={() => {
          player.pause();
          const at = index === -1 ? frames.length - 1 : Math.max(0, index - 1);
          const next = frames[Math.max(0, Math.min(frames.length - 1, at + direction))];
          if (next) player.currentTime = next.timestampMs / 1000;
        }}><Ionicons name={direction < 0 ? "play-skip-back" : "play-skip-forward"} size={22} color="#8CFFCB" /></Pressable>)}
      </View>
    </View>
  );
}
