import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Svg, { Line, Polyline } from "react-native-svg";
import { JointAngleSeries } from "@/types";

export function JointAngleChart({ series }: { series: JointAngleSeries[] }) {
  const [selected, setSelected] = useState(0);
  const active = series[selected];
  if (!active?.values.length) return null;
  const end = Math.max(1, active.values[active.values.length - 1].timestampMs);
  const points = active.values.map((point) => `${point.timestampMs / end * 300},${150 - Math.max(0, Math.min(180, point.angle)) / 180 * 150}`).join(" ");
  return <View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {series.map((item, index) => <Pressable accessibilityRole="tab" accessibilityState={{ selected: index === selected }} key={item.joint} onPress={() => setSelected(index)} style={{ padding: 10, borderBottomWidth: 2, borderColor: index === selected ? "#8CFFCB" : "transparent" }}>
        <Text className={index === selected ? "text-mint" : "text-muted"}>{item.joint.replace(/([A-Z])/g, " $1")}</Text>
      </Pressable>)}
    </ScrollView>
    <View style={{ height: 190, paddingTop: 16 }}>
      <Text className="text-xs text-muted">180 degrees</Text>
      <Svg height={150} width="100%" viewBox="0 0 300 150" preserveAspectRatio="none">
        <Line x1={0} y1={75} x2={300} y2={75} stroke="#29473D" strokeDasharray="3 3" />
        <Polyline points={points} fill="none" stroke="#FFD166" strokeWidth={2} />
      </Svg>
      <View className="flex-row justify-between"><Text className="text-xs text-muted">0s</Text><Text className="text-xs text-muted">{(end / 1000).toFixed(1)}s</Text></View>
    </View>
  </View>;
}
