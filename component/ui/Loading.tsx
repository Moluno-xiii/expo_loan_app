import useTheme from "@/hooks/useTheme";
import { useMemo } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Loading = ({ visible = true }) => {
  const { theme } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        overlay: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        },
        container: {
          height: 100,
          width: 100,
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.background,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
      }),
    [theme]
  );

  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    </View>
  );
};

export default Loading;
