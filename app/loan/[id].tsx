import NoData from "@/component/NoData";
import { loanData } from "@/data";
import useTheme from "@/hooks/useTheme";
import { formatNumber, ISOToString } from "@/lib/utils";
import { router, useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const LoanDetails = () => {
  const { id } = useLocalSearchParams();
  const data = loanData.find((loan) => loan.id === id);
  const { theme } = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        screen: {
          color: theme.primary,
          padding: 10,
          flex: 1,
          width: "100%",
          alignItems: "center",
          borderRadius: 10,
          paddingHorizontal: 5,
          backgroundColor: theme.background,
          gap: 10,
        },
        button: {
          borderRadius: 20,
          flexDirection: "row",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
          paddingVertical: 5,
        },
        title: {
          fontWeight: 900,
          fontSize: 30,
          textAlign: "center",
        },
        label: {
          fontWeight: 600,
          fontSize: 18,
        },
      }),
    [theme]
  );

  if (!data) return <NoData title="No loan data." />;

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Loan details</Text>
      <View style={{ width: "100%", gap: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.label}>Loan Status</Text>
          <Text
            style={{
              textTransform: "capitalize",
              textAlign: "right",
            }}
          >
            {data.status === "FLAGGED"
              ? "Flagged for review"
              : data.status.toLowerCase()}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.label}>Loan Purpose</Text>
          <Text style={{ textTransform: "capitalize" }}>{data.purpose}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.label}>
            Date {data.status === "APPROVED" ? "Approved" : "Requesed"}
          </Text>
          <Text>{ISOToString(data.date)}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.label}>Amount</Text>
          <Text>${formatNumber(data.amount)}</Text>
        </View>
      </View>
      <Button
        onPress={() => router.back()}
        color={theme.primary}
        title="Go back"
      />
    </View>
  );
};

export default LoanDetails;
