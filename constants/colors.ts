interface ThemeType {
  primary: string;
  background: string;
  text: string;
  border: string;
  backgroundLight: string;
}

const themes: Record<"dark" | "light", ThemeType> = {
  dark: {
    primary: "#000000",
    background: "#bababa",
    text: "#fcfcfc",
    border: "#373737",
    backgroundLight: "#e5e5e5",
  },
  light: {
    primary: "#75a20e",
    background: "#f7f7f7",
    text: "#333333",
    border: "#a3a3a3",
    backgroundLight: "#d6eadf",
  },
};

export type ThemeMode = keyof typeof themes;
export type { ThemeType };
export default themes;
