import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Screen } from "@/components/Screen";
import { AuthStackParamList } from "@/navigation/types";
import { useAuthStore } from "@/store/authStore";

type Props = NativeStackScreenProps<AuthStackParamList, "Signup">;

export function SignupScreen({ navigation }: Props) {
  const signUp = useAuthStore((state) => state.signUp);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit() {
    setLoading(true);
    try {
      await signUp(email, password, fullName);
    } catch (error) {
      Alert.alert("Signup failed", error instanceof Error ? error.message : "Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Screen className="pt-8">
      <Text className="text-4xl font-black text-white">Start coaching</Text>
      <Text className="mb-8 mt-3 text-base leading-6 text-muted">Create your secure FitForm profile and analyze your first set.</Text>
      <Input label="Full name" value={fullName} onChangeText={setFullName} autoCapitalize="words" />
      <Input label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Input label="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Create account" onPress={submit} loading={loading} />
      <View className="mt-6 flex-row justify-center">
        <Text className="text-muted">Already have an account? </Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text className="font-bold text-mint">Log in</Text>
        </Pressable>
      </View>
    </Screen>
  );
}
