import { createContext, useContext } from "react";

export type ThemeOption = "light" | "dark";
interface ThemeContextValue {
  theme: ThemeOption;
  setTheme?: (theme: ThemeOption) => void;
}

const defaultContextValue: ThemeContextValue = {
  theme: "light",
};

export const ThemeContext = createContext<ThemeContextValue>(defaultContextValue);

export const useTheme = () =>
  useContext(ThemeContext) || defaultContextValue;
