import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Screen } from "@/components/Screen";
import { AuthStackParamList } from "@/navigation/types";
import { useAuthStore } from "@/store/authStore";

type Props = NativeStackScreenProps<AuthStackParamList, "Login">;

export function LoginScreen({ navigation }: Props) {
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState("demo@fitform.ai");
  const [password, setPassword] = useState("password123");
  const [loading, setLoading] = useState(false);

  async function submit() {
    setLoading(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert("Login failed", error instanceof Error ? error.message : "Please check your credentials.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Screen className="pt-8">
      <Text className="text-4xl font-black text-white">Welcome back</Text>
      <Text className="mb-8 mt-3 text-base leading-6 text-muted">Review your latest lifts and keep your form trending up.</Text>
      <Input label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Input label="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Pressable onPress={() => navigation.navigate("ForgotPassword")} className="mb-6 self-end">
        <Text className="font-semibold text-mint">Forgot password?</Text>
      </Pressable>
      <Button title="Log in" onPress={submit} loading={loading} />
      <View className="mt-6 flex-row justify-center">
        <Text className="text-muted">New to FitForm? </Text>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text className="font-bold text-mint">Create account</Text>
        </Pressable>
      </View>
    </Screen>
  );
}
