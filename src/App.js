import React, { useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyle";
import { lightTheme, darkTheme } from "./Components/Themes"

import Signin from './Signin'
import Signup from './Signup'

const Header = styled.header`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
`;

function App() {

  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }


  return (
     <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <Header>
          <button onClick={themeToggler}>Switch Theme</button>
        </Header>
        <Container>
          {/* <Signin /> */}
          <Signup />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
