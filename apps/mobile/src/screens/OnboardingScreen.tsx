import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { Button } from "@/components/Button";
import { Screen } from "@/components/Screen";
import { AuthStackParamList } from "@/navigation/types";

type Props = NativeStackScreenProps<AuthStackParamList, "Onboarding">;

export function OnboardingScreen({ navigation }: Props) {
  return (
    <Screen scroll={false} className="flex-1 justify-between py-6">
      <View>
        <Text className="text-sm font-bold uppercase tracking-[2px] text-mint">FitForm</Text>
        <Text className="mt-8 text-5xl font-black leading-[56px] text-white">Lift smarter with AI form coaching.</Text>
        <Text className="mt-5 text-lg leading-7 text-muted">
          Upload or record a set. FitForm analyzes posture, joint angles, movement path, and rep quality for squats,
          deadlifts, and bench press.
        </Text>
      </View>
      <View className="my-8 overflow-hidden rounded-[8px] border border-[#244238]">
        <LinearGradient colors={["#14251F", "#09120F"]} style={{ padding: 20 }}>
          <View className="h-64 justify-end overflow-hidden rounded-[8px] bg-[#0B1511] p-4">
            <View className="absolute left-10 top-8 h-48 w-1 rotate-12 rounded-full bg-mint" />
            <View className="absolute left-24 top-20 h-32 w-1 -rotate-45 rounded-full bg-lime" />
            <View className="absolute right-16 top-14 h-44 w-1 rotate-45 rounded-full bg-gold" />
            <View className="rounded-[8px] bg-[#13251F] p-4">
              <Text className="text-sm text-muted">Latest analysis</Text>
              <Text className="mt-1 text-3xl font-black text-mint">91</Text>
              <Text className="mt-1 text-sm text-white">Strong depth. Slight knee drift on rep 4.</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View className="gap-3">
        <Button title="Create account" onPress={() => navigation.navigate("Signup")} />
        <Button title="Log in" variant="secondary" onPress={() => navigation.navigate("Login")} />
        <Text className="text-center text-xs leading-5 text-muted">
          FitForm provides training feedback for general fitness education. It is not medical advice, injury diagnosis,
          or a replacement for a qualified coach or clinician.
        </Text>
      </View>
    </Screen>
  );
}
