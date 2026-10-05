import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Button } from "@/components/Button";
import { MetricCard } from "@/components/MetricCard";
import { Screen } from "@/components/Screen";
import { exercises } from "@/constants/theme";
import { AppStackParamList } from "@/navigation/types";
import { api } from "@/services/api";
import { useAuthStore } from "@/store/authStore";
import { ExerciseType } from "@/types";

export function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const user = useAuthStore((state) => state.user);
  const [selected, setSelected] = useState<ExerciseType>("squat");
  const [progress, setProgress] = useState({ averageScore: 0, sessions: 0, bestLift: "Squat", trend: [] as Array<{ label: string; score: number }> });

  const [error, setError] = useState(false);
  useFocusEffect(useCallback(() => {
    let active = true;
    api.getProgress().then((value) => { if (active) { setProgress(value); setError(false); } })
      .catch(() => { if (active) setError(true); });
    return () => { active = false; };
  }, []));

  return (
    <Screen className="pt-3">
      <Text className="text-sm font-semibold text-muted">Good session, {user?.fullName?.split(" ")[0] ?? "athlete"}</Text>
      <Text className="mt-2 text-4xl font-black text-white">Analyze your next set.</Text>
      <View className="mt-6 flex-row gap-3">
        <MetricCard label="Avg score" value={progress.sessions ? `${progress.averageScore}` : "--"} />
        <MetricCard label="Sessions" value={`${progress.sessions}`} tone="gold" />
      </View>
      {error ? <Text className="mt-3 text-coral">Progress unavailable. Check your connection.</Text> : null}
      <Text className="mb-3 mt-8 text-lg font-black text-white">Choose exercise</Text>
      <View className="gap-3">
        {exercises.map((exercise) => (
          <Pressable
            key={exercise.id}
            onPress={() => setSelected(exercise.id)}
            className={`rounded-[8px] border p-4 ${selected === exercise.id ? "border-mint bg-panel2" : "border-[#1D332B] bg-panel"}`}
          >
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-xl font-black text-white">{exercise.title}</Text>
                <Text className="mt-1 text-sm text-muted">{exercise.subtitle}</Text>
              </View>
              <Ionicons name={selected === exercise.id ? "checkmark-circle" : "ellipse-outline"} size={26} color={exercise.accent} />
            </View>
          </Pressable>
        ))}
      </View>
      <View className="mt-8">
        <Button title="Record or upload video" icon={<Ionicons name="camera" size={20} color="#07100D" />} onPress={() => navigation.navigate("Capture", { exercise: selected })} />
      </View>
      <View className="mt-8 rounded-[8px] border border-[#1D332B] bg-panel2 p-4">
        <Text className="text-lg font-black text-white">Recent progress</Text>
        {!progress.trend.length ? <Text className="mt-3 text-muted">Your completed sets will appear here.</Text> : null}
        <View className="mt-4 h-24 flex-row items-end gap-2">
          {progress.trend.map((item, index) => (
            <View key={`${item.label}-${index}`} className="flex-1 items-center">
              <View className="w-full rounded-t-[6px] bg-mint" style={{ height: Math.max(2, item.score * 0.6) }} />
              <Text className="mt-2 text-xs text-muted">{item.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </Screen>
  );
}
