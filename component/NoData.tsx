import useTheme from "@/hooks/useTheme";
import { ReactNode } from "react";
import { Text, View } from "react-native";

interface Props {
  title: string;
  children: ReactNode;
}

const NoData = ({ title, children }: Props) => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        height: "100%",
        backgroundColor: theme.background,
        paddingHorizontal: 10,
      }}
    >
      <Text style={{ textAlign: "center" }}>{title ?? "No Data"}</Text>
      {children}
    </View>
  );
};

export default NoData;
