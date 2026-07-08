import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { Button } from "@/components/Button";
import { Screen } from "@/components/Screen";
import { useAuthStore } from "@/store/authStore";

export function ProfileScreen() {
  const { user, logout } = useAuthStore();
  return (
    <Screen className="pt-3">
      <Text className="text-4xl font-black text-white">Profile</Text>
      <View className="mt-6 rounded-[8px] border border-[#1D332B] bg-panel2 p-5">
        <View className="h-20 w-20 items-center justify-center rounded-full bg-mint">
          <Text className="text-3xl font-black text-ink">{user?.fullName?.slice(0, 1) ?? "F"}</Text>
        </View>
        <Text className="mt-4 text-2xl font-black text-white">{user?.fullName}</Text>
        <Text className="mt-1 text-muted">{user?.email}</Text>
      </View>
      <View className="mt-6 gap-3">
        {["Dark mode", "Camera calibration", "Privacy controls", "Export data", "Terms and privacy"].map((item) => (
          <Pressable key={item} className="flex-row items-center justify-between rounded-[8px] bg-panel2 p-4">
            <Text className="text-base font-semibold text-white">{item}</Text>
            <Ionicons name="chevron-forward" size={20} color="#8EA09A" />
          </Pressable>
        ))}
      </View>
      <Text className="mt-5 text-xs leading-5 text-muted">
        FitForm is not medical advice. Video analysis can miss context, so use results as a coaching aid and seek
        qualified guidance for pain, injury, or clinical questions.
      </Text>
      <View className="mt-8">
        <Button title="Log out" variant="secondary" onPress={() => void logout()} />
      </View>
    </Screen>
  );
}
