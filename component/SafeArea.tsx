import useTheme from "@/hooks/useTheme";
import { Stack } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SafeArea = () => {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();

  return (
    <View
      style={{
        paddingTop: insets.top,
        flex: 1,
        backgroundColor: theme.background,
      }}
    >
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
};

export default SafeArea;
