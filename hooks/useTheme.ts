import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("Context was used outside of its defined scope!");
  return context;
};

export default useTheme;
