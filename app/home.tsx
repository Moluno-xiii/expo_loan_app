import LoanBalanceHeader from "@/component/LoanBalanceHeader";
import Loans from "@/component/Loans";
import Button from "@/component/ui/Button";
import Loading from "@/component/ui/Loading";
import useAuth from "@/hooks/useAuth";
import useGetLoans from "@/hooks/useGetLoans";
import useTheme from "@/hooks/useTheme";
import { Link } from "expo-router";
import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  const { theme } = useTheme();
  const { logout } = useAuth();
  const { isLoading, data } = useGetLoans();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        screen: {
          color: theme.primary,
          flexDirection: "column",
          flex: 1,
          width: "100%",
          alignItems: "center",
          borderRadius: 10,
          paddingHorizontal: 10,
          backgroundColor: theme.background,
        },
      }),
    [theme]
  );

  if (isLoading) return <Loading visible={true} />;
  if (!data)
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text>
          You have no loans yet, your loans will appear here when available
        </Text>
        <Button>
          <Link style={{ color: theme.text }} href={"/apply"}>
            Apply for loan
          </Link>
        </Button>
      </View>
    );
  return (
    <View style={styles.screen}>
      <LoanBalanceHeader loanData={data} />
      <Loans loanData={data} />
      <View style={{ paddingVertical: 10 }}>
        <Button style={{ backgroundColor: "red" }} onClick={logout}>
          <Text style={{ color: "white" }}>Logout</Text>
        </Button>
      </View>
    </View>
  );
};

export default Home;
