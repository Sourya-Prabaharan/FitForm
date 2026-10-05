import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useState } from "react";
import { Button } from "@/components/Button";
import { api } from "@/services/api";
import { Pressable, Text, View } from "react-native";
import { Screen } from "@/components/Screen";
import { AppStackParamList } from "@/navigation/types";
import { useAnalysisStore } from "@/store/analysisStore";

export function HistoryScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { analyses, loadHistory, setActiveAnalysis } = useAnalysisStore();
  const [error, setError] = useState<string | null>(null);
  const refresh = useCallback(() => {
    setError(null);
    void loadHistory().catch(() => setError("Unable to load history. Check your connection."));
  }, [loadHistory]);

  useFocusEffect(
    useCallback(() => {
      refresh();
    }, [refresh])
  );

  return (
    <Screen className="pt-3">
      <Text className="text-4xl font-black text-white">Workout history</Text>
      <Text className="mt-3 text-base text-muted">Saved analyses and progress snapshots.</Text>
      {error ? <><Text className="mt-3 text-coral">{error}</Text><Button title="Retry" onPress={refresh} /></> : null}
      {!analyses.length && !error ? <Text className="mt-6 text-muted">No saved sets yet.</Text> : null}
      <View className="mt-6 gap-3">
        {analyses.map((analysis) => (
          <Pressable
            key={analysis.id}
            onPress={() => {
              if (analysis.status === "queued" || analysis.status === "processing") {
                navigation.navigate("Processing", { analysisId: analysis.id });
                return;
              }
              void api.getAnalysis(analysis.id).then((fresh) => {
                setActiveAnalysis(fresh);
                navigation.navigate("Results", { analysis: fresh });
              }).catch(() => setError("Unable to open analysis. Please try again."));
            }}
            className="rounded-[8px] border border-[#1D332B] bg-panel2 p-4"
          >
            <View className="flex-row items-center justify-between">
              <Text className="text-lg font-black capitalize text-white">{analysis.exercise}</Text>
              <Text className="text-base font-black text-mint">{analysis.status === "completed" ? analysis.score : analysis.status}</Text>
            </View>
            <Text className="mt-2 text-sm text-muted">{new Date(analysis.createdAt).toLocaleString()}</Text>
            <Text className="mt-3 text-base text-white">{analysis.summary}</Text>
          </Pressable>
        ))}
      </View>
    </Screen>
  );
}
