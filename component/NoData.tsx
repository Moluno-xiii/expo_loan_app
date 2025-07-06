import useTheme from "@/hooks/useTheme";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";

const NoData = ({ title }: { title?: string }) => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        height: "100%",
        backgroundColor: theme.background,
      }}
    >
      <Text>{title ?? "No Data"}</Text>
      <Button
        color={theme.primary}
        title="Go Back"
        onPress={() => router.back()}
      />
    </View>
  );
};

export default NoData;
