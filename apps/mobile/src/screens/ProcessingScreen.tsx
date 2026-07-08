import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { Screen } from "@/components/Screen";
import { AppStackParamList } from "@/navigation/types";
import { useAnalysisStore } from "@/store/analysisStore";

type Props = NativeStackScreenProps<AppStackParamList, "Processing">;

export function ProcessingScreen({ navigation, route }: Props) {
  const pollAnalysis = useAnalysisStore((state) => state.pollAnalysis);
  const rotate = useSharedValue(0);

  useEffect(() => {
    rotate.value = withRepeat(withTiming(360, { duration: 1800, easing: Easing.linear }), -1);
  }, [rotate]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const analysis = await pollAnalysis(route.params.analysisId);
      if (analysis.status === "completed" || analysis.status === "failed") {
        clearInterval(interval);
        navigation.replace("Results", { analysis });
      }
    }, 2500);
    return () => clearInterval(interval);
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
    </Screen>
  );
}
