import { ReactNode } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children: ReactNode;
  scroll?: boolean;
  className?: string;
};

export function Screen({ children, scroll = true, className = "" }: Props) {
  const content = <View className={`px-5 pb-8 ${className}`}>{children}</View>;
  return (
    <SafeAreaView className="flex-1 bg-ink">
      {scroll ? (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </SafeAreaView>
  );
}
