import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { Pressable, Text, View } from "react-native";
import { Screen } from "@/components/Screen";
import { AppStackParamList } from "@/navigation/types";
import { useAnalysisStore } from "@/store/analysisStore";

export function HistoryScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { analyses, loadHistory, setActiveAnalysis } = useAnalysisStore();

  useFocusEffect(
    useCallback(() => {
      void loadHistory();
    }, [loadHistory])
  );

  return (
    <Screen className="pt-3">
      <Text className="text-4xl font-black text-white">Workout history</Text>
      <Text className="mt-3 text-base text-muted">Saved analyses and progress snapshots.</Text>
      <View className="mt-6 gap-3">
        {analyses.map((analysis) => (
          <Pressable
            key={analysis.id}
            onPress={() => {
              setActiveAnalysis(analysis);
              navigation.navigate("Results", { analysis });
            }}
            className="rounded-[8px] border border-[#1D332B] bg-panel2 p-4"
          >
            <View className="flex-row items-center justify-between">
              <Text className="text-lg font-black capitalize text-white">{analysis.exercise}</Text>
              <Text className="text-2xl font-black text-mint">{analysis.score}</Text>
            </View>
            <Text className="mt-2 text-sm text-muted">{new Date(analysis.createdAt).toLocaleString()}</Text>
            <Text className="mt-3 text-base text-white">{analysis.summary}</Text>
          </Pressable>
        ))}
      </View>
    </Screen>
  );
}
