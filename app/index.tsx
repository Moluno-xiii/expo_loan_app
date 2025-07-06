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
      {/* <View>
        <Text>
          Get a loan with affordable interest rates in minutes, with Quick Loan
        </Text>
      </View> */}
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text style={{ fontSize: 18, textAlign: "center" }}>
          Get a loan with affordable interest rates in minutes, with
          <Text style={{ fontSize: 25, fontStyle: "italic" }}>Quick Loan.</Text>
        </Text>
        <Text style={{ fontSize: 16 }}>
          Welcome, {user?.email ? "back " + user.email : "USER"}
        </Text>
        {user?.email ? (
          <Link style={styles.link} href={"/home"}>
            Continue
          </Link>
        ) : (
          <Link style={styles.link} href={"/login"}>
            Get started
          </Link>
        )}
      </View>
      <Loading visible={isLoading} />
    </View>
  );
}
