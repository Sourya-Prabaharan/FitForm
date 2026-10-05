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
  const [sent, setSent] = useState(false);
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  async function submit() {
    setLoading(true);
    try {
      if (sent) {
        await api.resetPassword(email.trim(), code.trim(), password);
        Alert.alert("Password updated", "Sign in with your new password.");
        navigation.goBack();
      } else {
        await api.forgotPassword(email.trim());
        setSent(true);
        Alert.alert("Check your inbox", "If this account exists, a reset code has been sent. It expires in 15 minutes.");
      }
    } catch (error) {
      Alert.alert("Reset failed", error instanceof Error ? error.message : "Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Screen className="pt-8">
      <Text className="text-4xl font-black text-white">Reset password</Text>
      <Text className="mb-8 mt-3 text-base leading-6 text-muted">{sent ? "Enter the code from your email and choose a new password." : "We'll send a reset code to the email on your account."}</Text>
      <Input label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      {sent ? <>
        <Input label="Reset code" value={code} onChangeText={setCode} keyboardType="number-pad" />
        <Input label="New password" value={password} onChangeText={setPassword} secureTextEntry />
      </> : null}
      <Button title={sent ? "Update password" : "Send reset code"} onPress={submit} loading={loading} />
      {sent ? <Button title="Send another code" variant="ghost" onPress={() => setSent(false)} /> : null}
    </Screen>
  );
}
