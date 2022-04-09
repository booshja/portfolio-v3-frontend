// dependencies
import React, { useEffect, useState } from "react";
// styles
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import { darkTheme, lightTheme, sharpTheme, softTheme } from "./styles/themes";
// components
import Router from "./Router";
import { MainContent } from "./pages/public/styles/containers";
import { LoadingSpinner } from "./components";
// services
import { getProducts, getCart } from "./services/commerce";

const THEMES = [lightTheme, darkTheme, softTheme, sharpTheme];

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [themeNumber, setThemeNumber] = useState(0);

  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const rememberedTheme = localStorage.getItem("theme");
    if (rememberedTheme) {
      if (rememberedTheme === "Dark") {
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

  useEffect(() => {
    try {
      const productsRes = getProducts();
      setProducts(productsRes);
      const cartRes = getCart();
      setCart(cartRes);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching cart!", err);
      // push to error page
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

  if (loading) {
    return (
      <MainContent className="center">
        <LoadingSpinner />
      </MainContent>
    );
  }

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={currentTheme}>
        <Router
          nextTheme={nextTheme}
          publicTheme={currentTheme}
          commerceProps={{ products, cart }}
        />
      </ThemeProvider>
    </>
  );
};

export default App;
