import Button from "@/component/ui/Button";
import Loading from "@/component/ui/Loading";
import useTheme from "@/hooks/useTheme";
import { formatNumber } from "@/lib/utils";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Toast from "react-native-toast-message";

const Apply = () => {
  const { theme } = useTheme();
  const [amount, setAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formatWithCommas = (value: string) => {
    const numeric = value.replace(/[^0-9]/g, "");

    if (!numeric) return "";
    return formatNumber(numeric);
  };

  const handleSubmit = async () => {
    if (!amount || purpose.trim().length < 1) {
      Alert.alert("validation error", "Both fields are required");
      return;
    }

    try {
      setIsLoading(true);
      Keyboard.dismiss();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setAmount("");
      setPurpose("");
      Toast.show({
        type: "success",
        text1: "Application successful!",
        text1Style: {
          fontSize: 18,
        },
      });
      router.push("/home");
      console.log("Application data :", { amount, purpose });
    } catch (error: unknown) {
      console.error("error occured", error);
    } finally {
      setIsLoading(false);
    }
  };

  const styles = useMemo(
    () =>
      StyleSheet.create({
        screen: {
          color: theme.primary,
          padding: 10,
          flexDirection: "column",
          flex: 1,
          width: "100%",
          alignItems: "center",
          borderRadius: 10,
          paddingHorizontal: 5,
          backgroundColor: theme.background,
          gap: 20,
        },
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

  return (
    <View style={styles.screen}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: 600, fontSize: 20 }}>
          Type your loan amount
        </Text>
        <TextInput
          value={formatWithCommas(amount)}
          onChangeText={(text) => setAmount(text.replace(/[^0-9]/g, ""))}
          keyboardType="number-pad"
          style={{
            width: "100%",
            textAlign: "center",
            color: theme.primary,
            fontSize: 30,
            fontWeight: 700,
          }}
        />
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: 600, fontSize: 20 }}>Purpose</Text>
        <TextInput
          value={purpose}
          onChangeText={(text) => setPurpose(text)}
          multiline={true}
          style={{
            width: "100%",
            textAlign: "center",
            color: theme.primary,
            fontSize: 30,
            fontWeight: 700,
          }}
        />
      </View>
      <Button onClick={handleSubmit}>
        <Text style={{ color: theme.text }}>Submit</Text>
      </Button>
      <Loading visible={isLoading} />
    </View>
  );
};

export default Apply;
