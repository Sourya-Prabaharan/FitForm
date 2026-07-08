import { Text, TextInput, TextInputProps, View } from "react-native";

type Props = TextInputProps & {
  label: string;
};

export function Input({ label, ...props }: Props) {
  return (
    <View className="mb-4">
      <Text className="mb-2 text-sm font-semibold text-muted">{label}</Text>
      <TextInput
        placeholderTextColor="#62746E"
        className="h-14 rounded-[8px] border border-[#263D35] bg-panel2 px-4 text-base text-white"
        autoCapitalize="none"
        {...props}
      />
    </View>
  );
}
