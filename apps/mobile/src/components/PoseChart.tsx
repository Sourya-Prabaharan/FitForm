import Svg, { Circle, Line, Polyline } from "react-native-svg";
import { View } from "react-native";
import { MovementPathPoint } from "@/types";

type Props = {
  points: MovementPathPoint[];
  color?: string;
};

export function PoseChart({ points, color = "#8CFFCB" }: Props) {
  const sampled = points.slice(0, 40);
  const path = sampled.map((p) => `${Math.max(8, Math.min(292, p.x * 300))},${Math.max(8, Math.min(172, p.y * 180))}`).join(" ");

  return (
    <View className="h-48 overflow-hidden rounded-[8px] border border-[#1D332B] bg-panel2">
      <Svg width="100%" height="100%" viewBox="0 0 300 180">
        {[40, 80, 120, 160].map((y) => (
          <Line key={y} x1="0" x2="300" y1={y} y2={y} stroke="#1B332B" strokeWidth="1" />
        ))}
        <Polyline points={path} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        {sampled.slice(-1).map((p) => (
          <Circle key={p.frame} cx={p.x * 300} cy={p.y * 180} r="6" fill={color} />
        ))}
      </Svg>
    </View>
  );
}
