import useTheme from "@/hooks/useTheme";
import { ReactNode, useMemo } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

const Button = ({
  onClick,
  style,
  isLoading = false,
  children,
}: {
  onClick?: () => void;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  isLoading?: boolean;
}) => {
  const { theme } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: 200,
          borderRadius: 30,
          backgroundColor: theme.primary,
          height: 40,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        },
      }),
    [theme]
  );
  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={onClick}
      style={[styles.container, style]}
      activeOpacity={0.7}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;
