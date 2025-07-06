import Button from "@/component/ui/Button";
import FormItem from "@/component/ui/FormItem";
import Loading from "@/component/ui/Loading";
import useAuth from "@/hooks/useAuth";
import useTheme from "@/hooks/useTheme";
import { isValidEmail } from "@/lib/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Login = () => {
  const { theme } = useTheme();
  const { setUser } = useAuth();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const token = "3a3e2995-49ca-4922-8e60-082d521edd42";
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
          paddingHorizontal: 5,
          backgroundColor: "white",
        },
        form: {
          flexDirection: "column",
          gap: 10,
          width: "100%",
        },
        input: {
          borderColor: theme.border,
          borderRadius: 5,
          borderWidth: 2,
          maxWidth: 400,
        },
        text: {
          fontSize: 16,
          textTransform: "uppercase",
          width: 200,
          textAlign: "center",
          fontWeight: 700,
          color: theme.primary,
        },
        buttonText: {
          textTransform: "capitalize",
          fontSize: 14,
          color: theme.text,
        },
      }),
    [theme]
  );

  const handleSubmit = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "Both fields are required");
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert(
        "Invalid email",
        "Your emeil is invalid, check and try again."
      );
      return;
    }

    try {
      setIsLoading(true);
      await AsyncStorage.setItem(
        "auth",
        JSON.stringify({
          email,
          token,
        })
      );
      setUser({ email, token });
      await Promise.resolve(setTimeout(() => {}, 2000));
      Keyboard.dismiss();
      router.replace("/home");
    } catch (error) {
      console.warn("failed to login", error);
      Alert.alert("Login error", "Failed to login, try again");
    } finally {
      setIsLoading(false);
    }
  };

  const image = {
    uri: "https://plus.unsplash.com/premium_vector-1682301850017-0bb29cfd6580?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
  };

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.screen}>
      <Image source={image} style={{ width: "70%", height: "40%" }} />
      <Text style={styles.text}>login to continue</Text>
      <View style={styles.form}>
        <FormItem email={true} name="email" value={email} setValue={setEmail} />
        <FormItem
          isPassword={true}
          name="password"
          value={password}
          setValue={setPassword}
        />
        <Button
          isLoading={false}
          style={{ width: "100%" }}
          onClick={handleSubmit}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </Button>
      </View>
      <Loading visible={isLoading} />
    </ScrollView>
  );
};

export default Login;
