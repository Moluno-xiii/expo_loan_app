import useTheme from "@/hooks/useTheme";
import { Link } from "expo-router";
import { useMemo } from "react";
import { StyleSheet, Switch, View } from "react-native";

const Header = () => {
  const { theme, toggleTheme, mode } = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        header: {
          color: theme.primary,
          backgroundColor: theme.border,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          borderRadius: 10,
          padding: 5,
        },
      }),
    [theme]
  );
  return (
    <View style={styles.header}>
      <Link style={{ color: theme.text }} href={"/"}>
        Quick loan
      </Link>
      <Switch onValueChange={toggleTheme} value={mode === "light"} />
    </View>
  );
};

export default Header;
