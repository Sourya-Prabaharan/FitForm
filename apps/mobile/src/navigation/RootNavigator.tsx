import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "@/constants/theme";
import { CaptureScreen } from "@/screens/CaptureScreen";
import { ForgotPasswordScreen } from "@/screens/ForgotPasswordScreen";
import { HistoryScreen } from "@/screens/HistoryScreen";
import { HomeScreen } from "@/screens/HomeScreen";
import { LoginScreen } from "@/screens/LoginScreen";
import { OnboardingScreen } from "@/screens/OnboardingScreen";
import { ProcessingScreen } from "@/screens/ProcessingScreen";
import { ProfileScreen } from "@/screens/ProfileScreen";
import { ResultsScreen } from "@/screens/ResultsScreen";
import { SignupScreen } from "@/screens/SignupScreen";
import { useAuthStore } from "@/store/authStore";
import { AppStackParamList, AuthStackParamList, TabParamList } from "./types";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppStack = createNativeStackNavigator<AppStackParamList>();
const Tabs = createBottomTabNavigator<TabParamList>();

function TabNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.panel, borderTopColor: "#193027", height: 86, paddingTop: 8 },
        tabBarActiveTintColor: colors.mint,
        tabBarInactiveTintColor: colors.muted,
        tabBarIcon: ({ color, size }) => {
          const name = route.name === "Home" ? "grid" : route.name === "History" ? "time" : "person";
          return <Ionicons name={name} color={color} size={size} />;
        }
      })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="History" component={HistoryScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
}

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.ink } }}>
      <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </AuthStack.Navigator>
  );
}

function AppNavigator() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.ink } }}>
      <AppStack.Screen name="Tabs" component={TabNavigator} />
      <AppStack.Screen name="Capture" component={CaptureScreen} />
      <AppStack.Screen name="Processing" component={ProcessingScreen} />
      <AppStack.Screen name="Results" component={ResultsScreen} />
    </AppStack.Navigator>
  );
}

export function RootNavigator() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
}
