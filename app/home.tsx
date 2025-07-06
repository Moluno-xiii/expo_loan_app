import LoanBalanceHeader from "@/component/LoanBalanceHeader";
import Loans from "@/component/Loans";
import LogoutModal from "@/component/LogoutModal";
import NoData from "@/component/NoData";
import Button from "@/component/ui/Button";
import Loading from "@/component/ui/Loading";
import useAuth from "@/hooks/useAuth";
import useGetLoans from "@/hooks/useGetLoans";
import useTheme from "@/hooks/useTheme";
import { Link } from "expo-router";
import { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  const { theme } = useTheme();
  const { logout } = useAuth();
  const { isLoading, data } = useGetLoans();
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      <NoData title="You have no loans yet, your loans will appear here when available, you have no loans yoet, you rloans will appear here when available.">
        <Button>
          <Link style={{ color: theme.text }} href={"/apply"}>
            Apply for loan
          </Link>
        </Button>
      </NoData>
    );
  return (
    <View style={styles.screen}>
      <LoanBalanceHeader loanData={data} />
      <Loans loanData={data} />
      <View style={{ paddingVertical: 10 }}>
        <Button
          style={{ backgroundColor: "red" }}
          onClick={() => setIsModalVisible(true)}
        >
          <Text style={{ color: "white" }}>Logout</Text>
        </Button>
      </View>
      <LogoutModal
        visible={isModalVisible}
        logout={logout}
        closeModal={() => setIsModalVisible(false)}
      />
    </View>
  );
};

export default Home;
