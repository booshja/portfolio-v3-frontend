// dependencies
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
// styles
import GlobalStyle from "./styles/globalStyles";
import { darkTheme, lightTheme, sharpTheme, softTheme } from "./styles/themes";
// router
import Router from "./Router";

const THEMES = [lightTheme, darkTheme, softTheme, sharpTheme];

function App() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [themeNumber, setThemeNumber] = useState(0);

  useEffect(() => {
    const rememberedTheme = localStorage.getItem("theme");
    if (rememberedTheme) {
      if (rememberedTheme === "Light") {
        return;
      } else if (rememberedTheme === "Dark") {
        setThemeNumber(() => 1);
        setCurrentTheme(() => THEMES[1]);
      } else if (rememberedTheme === "Soft") {
        setThemeNumber(() => 2);
        setCurrentTheme(() => THEMES[2]);
      } else if (rememberedTheme === "Sharp") {
        setThemeNumber(() => 3);
        setCurrentTheme(() => THEMES[3]);
      }
    } else if (!rememberedTheme) {
      localStorage.setItem("theme", "Light");
    }
  }, []);

  const nextTheme = () => {
    if (themeNumber === 3) {
      setThemeNumber(() => 0);
      setCurrentTheme(() => THEMES[0]);
      localStorage.setItem("theme", "Light");
    } else {
      localStorage.setItem("theme", THEMES[themeNumber + 1].themeName);
      setCurrentTheme(THEMES[themeNumber + 1]);
      setThemeNumber((num) => num + 1);
    }
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={currentTheme}>
        <Router nextTheme={nextTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
