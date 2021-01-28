import React, { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyle";
import { lightTheme, darkTheme } from "./Components/Themes"

function App() {

  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
     <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <div className="App">
          <button onClick={themeToggler}>Switch Theme</button>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
