import useTheme from "@/hooks/useTheme";
import { SetStateAction, useMemo } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
  isPassword?: boolean;
  email?: boolean;
  name: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  value: string;
}

const FormItem = ({ isPassword, setValue, value, name, email }: Props) => {
  const { theme } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        input: {
          borderRadius: 20,
          maxWidth: 400,
          width: "100%",
          color: theme.primary,
          backgroundColor: theme.backgroundLight,
          paddingHorizontal: 10,
        },
        container: {
          flexDirection: "column",
          gap: 3,
        },
        label: {
          textTransform: "capitalize",
          fontSize: 14,
          color: theme.primary,
        },
      }),
    [theme]
  );
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{name}</Text>
      <TextInput
        style={styles.input}
        aria-label={`${name} field`}
        secureTextEntry={isPassword}
        onChangeText={(e) => setValue(e)}
        value={value}
        autoCapitalize="none"
        keyboardType={email ? "email-address" : "default"}
      />
    </View>
  );
};

export default FormItem;
