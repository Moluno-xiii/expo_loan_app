import useTheme from "@/hooks/useTheme";
import { LoanType } from "@/types";
import { useMemo, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Loan from "./Loan";

const Loans = ({ loanData }: { loanData: LoanType[] }) => {
  const { theme } = useTheme();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    try {
      setIsRefreshing(true);
      await new Promise((res) => setTimeout(res, 2000));
    } catch (error) {
      console.warn("Refresh failed:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

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
        btnActive: {
          backgroundColor: theme.primary,
          borderRadius: 20,
          flexDirection: "row",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        },
        buttonContainer: {
          flexDirection: "row",
          paddingTop: 1,
          paddingHorizontal: 2,
          backgroundColor: theme.backgroundLight,
          borderRadius: 20,
        },
      }),
    [theme]
  );

  return (
    <View style={styles.screen}>
      <Text
        style={{
          textAlign: "left",
          width: "100%",
          fontWeight: 800,
          fontSize: 30,
          paddingLeft: 20,
        }}
      >
        My Loans
      </Text>
      <FlatList
        data={loanData}
        renderItem={({ item }) => <Loan data={item} />}
        keyExtractor={(data: LoanType) => data.id}
        onRefresh={handleRefresh}
        contentContainerStyle={{ gap: 10, paddingVertical: 10 }}
        refreshing={isRefreshing}
      />
    </View>
  );
};

export default Loans;
