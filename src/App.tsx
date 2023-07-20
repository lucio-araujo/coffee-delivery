import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { ShoppingCartContextProvider } from "./contexts/ShoppingCartContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingCartContextProvider>
          <Router />
        </ShoppingCartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
