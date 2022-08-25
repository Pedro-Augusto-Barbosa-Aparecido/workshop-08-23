import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/globals";
import { defaultTheme } from "./styles/themes/default";

import { DefaultTheme } from "styled-components";

export function App() {
  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme)
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}
