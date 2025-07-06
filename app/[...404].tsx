import useTheme from "@/hooks/useTheme";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function NotFound() {
  const { theme } = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.background,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{}}>404 - Page Not Found</Text>
      <Button
        onPress={() => router.push("/")}
        title="Go Home"
        color={theme.primary}
      />
    </View>
  );
}
