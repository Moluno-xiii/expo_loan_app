import SafeArea from "@/component/SafeArea";
import AuthProvider from "@/contexts/AuthContext";
import ThemeProvider from "@/contexts/ThemeContext";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SafeArea />
        <Toast />
      </AuthProvider>
    </ThemeProvider>
  );
}
