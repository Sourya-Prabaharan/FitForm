import "react-native-gesture-handler";
import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { useAuthStore } from "./src/store/authStore";

export default function App() {
  const hydrate = useAuthStore((state) => state.hydrate);
  const isHydrating = useAuthStore((state) => state.isHydrating);

  useEffect(() => {
    void hydrate();
  }, [hydrate]);

  if (isHydrating) {
    return (
      <View className="flex-1 items-center justify-center bg-ink">
        <ActivityIndicator color="#8CFFCB" size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <RootNavigator />
    </NavigationContainer>
  );
}
