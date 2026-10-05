import { ReactNode } from "react";
import { ActivityIndicator, Pressable, Text } from "react-native";
import { colors } from "@/constants/theme";

type Props = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "ghost";
  loading?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
};

export function Button({ title, onPress, variant = "primary", loading, disabled, icon }: Props) {
  const classes =
    variant === "primary"
      ? "bg-mint"
      : variant === "secondary"
        ? "bg-panel2 border border-[#29473D]"
        : "bg-transparent";
  const textClass = variant === "primary" ? "text-ink" : "text-white";
  return (
    <Pressable
      accessibilityRole="button"
      disabled={loading || disabled}
      onPress={onPress}
      className={`h-14 flex-row items-center justify-center rounded-[8px] ${classes} ${loading ? "opacity-70" : ""}`}
    >
      {loading ? <ActivityIndicator color={variant === "primary" ? colors.ink : colors.mint} /> : icon}
      <Text className={`ml-2 text-base font-bold ${textClass}`}>{title}</Text>
    </Pressable>
  );
}
