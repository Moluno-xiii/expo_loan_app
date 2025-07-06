import useAuth from "@/hooks/useAuth";
import useTheme from "@/hooks/useTheme";
import { LoanType } from "@/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./ui/Button";

const LoanBalanceHeader = ({ loanData }: { loanData: LoanType[] }) => {
  const { theme } = useTheme();
  const { user } = useAuth();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        header: {
          borderRadius: 25,
          backgroundColor: theme.primary,
          padding: 10,
          width: "100%",
          gap: 5,
        },
      }),
    [theme]
  );

  const totalLoanAmount = loanData.reduce((sum, item) => {
    return item.status === "APPROVED" ? sum + item.amount : sum;
  }, 0);

  return (
    <View style={styles.header}>
      <Text
        style={{
          color: theme.text,
          fontSize: 18,
        }}
      >
        {user?.email}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: theme.text, fontWeight: 300 }}>
          Current loan balance
        </Text>
        <Text style={{ color: theme.text, fontWeight: 300 }}>
          Your current tier
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: 700, color: theme.text, fontSize: 30 }}>
          ${totalLoanAmount}
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            backgroundColor: theme.border,
            padding: 4,
            borderColor: theme.border,
            borderWidth: 2,
            borderRadius: 20,
          }}
        >
          <Ionicons
            size={20}
            color={theme.background}
            name="shield-checkmark"
          />
          <Text style={{ color: theme.text, fontWeight: 300 }}>Spark</Text>
        </View>
      </View>
      <Button
        style={{
          backgroundColor: theme.text,
          width: "100%",
        }}
      >
        <Link
          style={{ width: "100%", textAlign: "center", color: theme.primary }}
          href={"/apply"}
        >
          Apply for Loans
        </Link>
      </Button>
    </View>
  );
};

export default LoanBalanceHeader;
