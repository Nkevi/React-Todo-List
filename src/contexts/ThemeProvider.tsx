import {
  type PropsWithChildren,
  useState,
} from "react";
import { ThemeContext, ThemeOption } from "./ThemeContext.tsx";

function ThemeProvider(props: PropsWithChildren) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider
      value={{ theme: theme as ThemeOption, setTheme: setTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

