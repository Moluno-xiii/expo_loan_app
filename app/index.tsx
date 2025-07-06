import Header from "@/component/Header";
import Loading from "@/component/ui/Loading";
import useAuth from "@/hooks/useAuth";
import useTheme from "@/hooks/useTheme";
import { Link } from "expo-router";
import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { theme } = useTheme();
  const { isLoading, user } = useAuth();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        link: {
          color: theme.text,
          backgroundColor: theme.primary,
          padding: 5,
          borderRadius: 5,
        },
      }),
    [theme]
  );
  console.log("usr", user);
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: theme.background,
        gap: 10,
      }}
    >
      <Header />
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Welcome, {user?.email ? user.email : "USER"}</Text>
        {user?.email ? (
          <Link style={styles.link} href={"/home"}>
            Continue
          </Link>
        ) : (
          <Link style={styles.link} href={"/login"}>
            login
          </Link>
        )}
      </View>
      <Loading visible={isLoading} />
    </View>
  );
}
