import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Alert, Text } from "react-native";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Screen } from "@/components/Screen";
import { api } from "@/services/api";
import { AuthStackParamList } from "@/navigation/types";

type Props = NativeStackScreenProps<AuthStackParamList, "ForgotPassword">;

export function ForgotPasswordScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit() {
    setLoading(true);
    try {
      await api.forgotPassword(email);
      Alert.alert("Check your inbox", "Password reset instructions are on the way.");
      navigation.goBack();
    } finally {
      setLoading(false);
    }
  }

  return (
    <Screen className="pt-8">
      <Text className="text-4xl font-black text-white">Reset password</Text>
      <Text className="mb-8 mt-3 text-base leading-6 text-muted">We’ll send a secure reset link to the email on your account.</Text>
      <Input label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Button title="Send reset link" onPress={submit} loading={loading} />
    </Screen>
  );
}
