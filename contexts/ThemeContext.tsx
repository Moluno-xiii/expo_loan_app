import themes, { ThemeMode, ThemeType } from "@/constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  mode: ThemeMode;
}
const ThemeContext = createContext<ThemeContextType>({
  theme: themes.light,
  toggleTheme: () => {},
  mode: "light",
});

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const systemTheme = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>(systemTheme ?? "light");

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem("theme");
      if (savedTheme === "dark") {
        setMode("dark");
      } else if (savedTheme === "light") {
        setMode("light");
      } else {
        setMode(systemTheme ?? "light");
      }
    };
    loadTheme();
  }, [systemTheme]);

  const toggleTheme = async () => {
    const newTheme = mode === "dark" ? "light" : "dark";
    setMode(newTheme);
    try {
      await AsyncStorage.setItem("theme", newTheme);
    } catch (error) {
      console.warn("filed to chane thee", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[mode], toggleTheme, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
export { ThemeContext };
