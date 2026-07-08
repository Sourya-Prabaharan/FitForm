import { Text, View } from "react-native";

type Props = {
  label: string;
  value: string;
  tone?: "mint" | "gold" | "coral";
};

export function MetricCard({ label, value, tone = "mint" }: Props) {
  const toneClass = tone === "gold" ? "text-gold" : tone === "coral" ? "text-coral" : "text-mint";
  return (
    <View className="flex-1 rounded-[8px] border border-[#1D332B] bg-panel2 p-4">
      <Text className="text-xs font-semibold uppercase text-muted">{label}</Text>
      <Text className={`mt-2 text-2xl font-black ${toneClass}`}>{value}</Text>
    </View>
  );
}
