import useTheme from "@/hooks/useTheme";
import { formatNumber, getIcon } from "@/lib/utils";
import { LoanType } from "@/types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Loan = ({ data }: { data: LoanType }) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      onPress={() => router.push(`/loan/${data.id}`)}
      activeOpacity={0.8}
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.backgroundLight,
        gap: 10,
        padding: 10,
        borderRadius: 10,
      }}
    >
      <Image
        source={{
          uri: "https://images.unsplash.com/vector-1738422244398-be38d500a1cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGxvYW58ZW58MHx8MHx8fDA%3D",
        }}
        style={{
          height: 60,
          width: 60,
          objectFit: "cover",
          borderRadius: 30,
        }}
      />
      <View style={{ gap: 5, flex: 1 }}>
        {/* <Text
          style={{ fontWeight: 700, fontSize: 16, textTransform: "capitalize" }}
        >
          {data.purpose}
        </Text> */}
        <Text
          style={{ fontWeight: 900, fontSize: 20, textTransform: "capitalize" }}
        >
          ${formatNumber(data.amount)}
        </Text>
        {/* <Text>{formatDate(data.date)}</Text> */}
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            color:
              data.status === "APPROVED"
                ? "green"
                : data.status === "FLAGGED"
                ? "orange"
                : data.status === "REJECTED"
                ? "red"
                : theme.primary,
          }}
        >
          {data.status}
        </Text>
        <MaterialIcons
          size={25}
          color={
            data.status === "APPROVED"
              ? "green"
              : data.status === "FLAGGED"
              ? "orange"
              : data.status === "REJECTED"
              ? "red"
              : theme.primary
          }
          name={getIcon(data.status)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Loan;
