import React, { useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyle";
import { lightTheme, darkTheme } from "./Components/Themes"

import Signin from './Signin'
import Signup from './Signup'

import moon from './images/cloud-moon-solid.svg'
import sun from './images/sun-solid.svg'

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: none;
  padding: 0 10px
`;

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  position: relative;
  overflow-x: hidden;
`;

const ModuleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThemeToggler = styled.button`
  border-radius: 50%;
  padding: 5px;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 20;
`;

function App() {

  const [theme, setTheme] = useState('light');
  const [connectDisplay, setConnectDisplay] = useState('signin')
  const [registeredUser, setRegisteredUser] = useState({
    email: '',
    password: ''
  })

  const emailRegex = /^[a-zA-Z0-9.-]{2,20}@([a-zA-Z0-9]{2,15})+(\.[a-zA-Z]{2,3})+((\.[a-zA-Z]{2,3})?)+$/
  const passwordRegex = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&^*])(?!.*[\s])(?!.*[<>]).*$/

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const handleConnectDisplayChange = () => {
    connectDisplay === 'signin' 
    ? setConnectDisplay('signup')
    : setConnectDisplay('signin') 
  }

  const checkInputValidity = (regex, input) => {
    return regex.test(input);
  }

  const checkPasswordConformity = (password1, password2) => {
    if(checkInputValidity(passwordRegex, password1)){
      if(password1 === password2){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  }

  const registerUser = (email, password) =>{
    setRegisteredUser({
      email: email,
      password: password
    })
  }

  const handleOnSubmitSignup = (email, password1, password2) => {
    if(checkPasswordConformity(password1, password2) && checkInputValidity(emailRegex, email)){
      registerUser(email, password2)
    }else{
      // Deal with credentials not conform
      console.log('The credentials do not match the regex')
    }
  }

  const handleOnSubmitSignin = (email, password) => {
    if(checkInputValidity(passwordRegex, password) && checkInputValidity(emailRegex, email)){
      if(email === registeredUser.email && password === registeredUser.password){
        console.log('Nice, you are logged in')
      }else{
        console.log('It seems your email or password do not match what we have on database');
      }
    }else{
      // Deal with credentials not conform
      console.log('The credentials do not match the regex')
    }
  }

  return (
     <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        {/* <Header>
          <ThemeToggler className="theme-toggler" onClick={themeToggler}>
            <img src={theme === 'light' ? moon : sun} alt="Toggle theme icon" />
          </ThemeToggler>
        </Header> */}
        <ThemeToggler className="theme-toggler" onClick={themeToggler}>
            <img src={theme === 'light' ? moon : sun} alt="Toggle theme icon" />
        </ThemeToggler>
        <Container>
          <ModuleContainer>
            <Signin 
              handleOnSubmitSignin={handleOnSubmitSignin} 
              handleConnectDisplayChange={handleConnectDisplayChange} 
              active={connectDisplay === 'signin' ? true : false}
              theme={theme}
              emailRegex={emailRegex}
              passwordRegex={passwordRegex}
            />
            <Signup 
              registerUser={registerUser} 
              handleOnSubmitSignup={handleOnSubmitSignup} 
              handleConnectDisplayChange={handleConnectDisplayChange} 
              active={connectDisplay === 'signup' ? true : false}
              theme={theme}
              emailRegex={emailRegex}
              passwordRegex={passwordRegex}
            />
          </ModuleContainer>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
