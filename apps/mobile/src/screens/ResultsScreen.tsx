import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { Button } from "@/components/Button";
import { MetricCard } from "@/components/MetricCard";
import { PoseChart } from "@/components/PoseChart";
import { Screen } from "@/components/Screen";
import { AppStackParamList } from "@/navigation/types";
import { useAnalysisStore } from "@/store/analysisStore";
import { FitScoreBreakdown, RepAnalysis } from "@/types";

type Props = NativeStackScreenProps<AppStackParamList, "Results">;

function scoreTone(score: number) {
  return score >= 85 ? "text-mint" : score >= 70 ? "text-gold" : "text-coral";
}

function BreakdownRow({ label, value }: { label: string; value: number }) {
  const width = `${Math.max(4, Math.min(100, value))}%` as const;
  return (
    <View>
      <View className="mb-2 flex-row items-center justify-between">
        <Text className="text-sm font-semibold text-white">{label}</Text>
        <Text className={`text-sm font-black ${scoreTone(value)}`}>{Math.round(value)}</Text>
      </View>
      <View className="h-2 overflow-hidden rounded-full bg-[#193027]">
        <View className="h-2 rounded-full bg-mint" style={{ width }} />
      </View>
    </View>
  );
}

function FitScoreBreakdownCard({ fitScore }: { fitScore: FitScoreBreakdown }) {
  return (
    <View className="mt-6 rounded-[8px] border border-[#1D332B] bg-panel2 p-4">
      <View className="flex-row items-end justify-between">
        <Text className="text-lg font-black text-white">FitScore breakdown</Text>
        <Text className={`text-3xl font-black ${scoreTone(fitScore.overall)}`}>{Math.round(fitScore.overall)}</Text>
      </View>
      <View className="mt-5 gap-4">
        <BreakdownRow label="Stability" value={fitScore.stability} />
        <BreakdownRow label="Symmetry" value={fitScore.symmetry} />
        <BreakdownRow label="Range of motion" value={fitScore.rangeOfMotion} />
        <BreakdownRow label="Tempo control" value={fitScore.tempoControl} />
        <BreakdownRow label="Posture / form" value={fitScore.posture} />
      </View>
    </View>
  );
}

function RepScoreRow({ rep }: { rep: RepAnalysis }) {
  return (
    <View className="flex-row items-center justify-between rounded-[8px] bg-panel2 p-4">
      <View>
        <Text className="text-base font-black text-white">Rep {rep.repIndex}</Text>
        <Text className="mt-1 text-xs text-muted">
          {rep.duration.toFixed(1)}s • ROM {Math.round(rep.rangeOfMotion)} • asym {Math.round(rep.asymmetry)}
        </Text>
      </View>
      <Text className={`text-2xl font-black ${scoreTone(rep.fitScore.overall)}`}>{Math.round(rep.fitScore.overall)}</Text>
    </View>
  );
}

export function ResultsScreen({ navigation, route }: Props) {
  const active = useAnalysisStore((state) => state.activeAnalysis);
  const analysis = "analysis" in route.params ? route.params.analysis : active;

  if (!analysis) {
    return (
      <Screen className="pt-8">
        <Text className="text-2xl font-black text-white">Analysis unavailable</Text>
        <Button title="Back home" onPress={() => navigation.navigate("Tabs")} />
      </Screen>
    );
  }

  const setAnalysis = analysis.setAnalysis;
  const currentFitScore = setAnalysis?.averageFitScore ?? analysis.score;
  const bestRep = setAnalysis?.reps.find((rep) => rep.repIndex === setAnalysis.bestRepIndex) ?? setAnalysis?.reps[0];

  return (
    <Screen className="pt-2">
      <View className="flex-row items-center justify-between">
        <Text className="text-sm font-bold uppercase text-mint">{analysis.exercise}</Text>
        <Text className="text-sm text-muted">{new Date(analysis.createdAt).toLocaleDateString()}</Text>
      </View>
      <Text className="mt-3 text-4xl font-black text-white">FitScore {Math.round(currentFitScore)}</Text>
      <Text className="mt-3 text-base leading-6 text-muted">{analysis.summary}</Text>
      <View className="mt-4 rounded-[8px] border border-[#26483C] bg-panel2 p-3">
        <Text className="text-xs leading-5 text-muted">
          Review this as fitness guidance only. Stop if you feel pain and consult a qualified professional for medical
          concerns, injury risk, or personalized programming.
        </Text>
      </View>
      <View className="mt-6 flex-row gap-3">
        <MetricCard label="Confidence" value={`${Math.round(analysis.confidence * 100)}%`} />
        <MetricCard label="Reps" value={`${analysis.repCount}`} tone="gold" />
        <MetricCard label="Stability" value={`${analysis.stabilityScore}`} tone={analysis.stabilityScore > 80 ? "mint" : "coral"} />
      </View>
      {bestRep ? <FitScoreBreakdownCard fitScore={bestRep.fitScore} /> : null}
      {setAnalysis ? (
        <>
          <Text className="mb-3 mt-8 text-lg font-black text-white">Rep quality</Text>
          <View className="gap-3">
            {setAnalysis.reps.map((rep) => (
              <RepScoreRow key={rep.repIndex} rep={rep} />
            ))}
          </View>
          <Text className="mb-3 mt-8 text-lg font-black text-white">Fatigue</Text>
          <View className="rounded-[8px] border border-[#1D332B] bg-panel2 p-4">
            <View className="flex-row items-center justify-between">
              <Text className="text-base font-black text-white">
                {setAnalysis.fatigue.fatigueDetected ? "Fatigue detected" : "No clear fatigue pattern"}
              </Text>
              <Text className={`text-2xl font-black ${scoreTone(100 - setAnalysis.fatigue.fatigueScore)}`}>
                {Math.round(setAnalysis.fatigue.fatigueScore)}
              </Text>
            </View>
            <Text className="mt-3 text-sm leading-5 text-muted">{setAnalysis.fatigue.summary}</Text>
            {setAnalysis.fatigue.fatigueOnsetRep ? (
              <Text className="mt-3 text-sm font-semibold text-gold">
                Form breakdown started around rep {setAnalysis.fatigue.fatigueOnsetRep}.
              </Text>
            ) : null}
            <View className="mt-4 flex-row gap-3">
              <MetricCard label="Velocity drop" value={`${Math.round(setAnalysis.fatigue.velocityDropPercent)}%`} tone="coral" />
              <MetricCard label="ROM drop" value={`${Math.round(setAnalysis.fatigue.rangeOfMotionDropPercent)}%`} tone="gold" />
            </View>
          </View>
        </>
      ) : null}
      <Text className="mb-3 mt-8 text-lg font-black text-white">Movement path</Text>
      <PoseChart points={analysis.movementPath} />
      <Text className="mb-3 mt-8 text-lg font-black text-white">Detected mistakes</Text>
      <View className="gap-3">
        {analysis.mistakes.map((mistake) => (
          <View key={mistake.code} className="rounded-[8px] border border-[#1D332B] bg-panel2 p-4">
            <View className="flex-row items-center justify-between">
              <Text className="text-base font-black text-white">{mistake.label}</Text>
              <Ionicons name={mistake.severity === "high" ? "alert-circle" : "information-circle"} size={22} color={mistake.severity === "high" ? "#FF7A66" : "#FFD166"} />
            </View>
            <Text className="mt-2 text-sm text-muted">Frame {mistake.firstFrame} • {Math.round(mistake.confidence * 100)}% confidence</Text>
            {mistake.evidence ? <Text className="mt-2 text-sm leading-5 text-white">{mistake.evidence}</Text> : null}
            {mistake.reference ? <Text className="mt-2 text-xs font-semibold text-mint">{mistake.reference}</Text> : null}
          </View>
        ))}
      </View>
      <Text className="mb-3 mt-8 text-lg font-black text-white">Recommendations</Text>
      <View className="gap-3">
        {analysis.recommendations.map((recommendation) => (
          <View key={recommendation} className="flex-row rounded-[8px] bg-panel2 p-4">
            <Ionicons name="sparkles" size={20} color="#8CFFCB" />
            <Text className="ml-3 flex-1 text-base leading-6 text-white">{recommendation}</Text>
          </View>
        ))}
      </View>
    </Screen>
  );
}
