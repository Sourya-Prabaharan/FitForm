import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { ActivityIndicator, Text, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { Screen } from "@/components/Screen";
import { AppStackParamList } from "@/navigation/types";
import { useAnalysisStore } from "@/store/analysisStore";

type Props = NativeStackScreenProps<AppStackParamList, "Processing">;

export function ProcessingScreen({ navigation, route }: Props) {
  const pollAnalysis = useAnalysisStore((state) => state.pollAnalysis);
  const rotate = useSharedValue(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    rotate.value = withRepeat(withTiming(360, { duration: 1800, easing: Easing.linear }), -1);
  }, [rotate]);

  useEffect(() => {
    let canceled = false;
    let timer: ReturnType<typeof setTimeout>;
    const poll = async () => {
      try {
        const analysis = await pollAnalysis(route.params.analysisId);
        if (canceled) return;
        setError(null);
        if (analysis.status === "completed" || analysis.status === "failed") {
          navigation.replace("Results", { analysis });
          return;
        }
      } catch {
        if (canceled) return;
        setError("Connection interrupted. Reconnecting...");
      }
      timer = setTimeout(() => void poll(), 2500);
    };
    void poll();
    return () => { canceled = true; clearTimeout(timer); };
  }, [navigation, pollAnalysis, route.params.analysisId]);

  const style = useAnimatedStyle(() => ({ transform: [{ rotate: `${rotate.value}deg` }] }));

  return (
    <Screen scroll={false} className="flex-1 items-center justify-center">
      <Animated.View style={style} className="h-36 w-36 items-center justify-center rounded-full border-4 border-mint border-l-transparent">
        <ActivityIndicator color="#8CFFCB" />
      </Animated.View>
      <Text className="mt-8 text-3xl font-black text-white">Analyzing form</Text>
      <Text className="mt-3 text-center text-base leading-6 text-muted">
        Extracting pose landmarks, tracking joint angles, scoring stability, and detecting technique issues.
      </Text>
      {error ? <Text className="mt-4 text-coral">{error}</Text> : null}
      <Button title="Back to home" variant="ghost" onPress={() => navigation.navigate("Tabs")} />
    </Screen>
  );
}
