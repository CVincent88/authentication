import React, { useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyle";
import { lightTheme, darkTheme } from "./Components/Themes"

import Signin from './Signin'
import Signup from './Signup'

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${'' /* height: 50px; */}
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

const Toggle = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ModuleContainer = styled.div`
  ${'' /* width: 50vw; */}
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: none;
`;

const Button = styled.button`
  margin-top: 15px;
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
        <Header>
          <button onClick={themeToggler}>Switch Theme</button>
        </Header>
        <Container>
          <ModuleContainer>
            <Signin 
              handleOnSubmitSignin={handleOnSubmitSignin} 
              handleConnectDisplayChange={handleConnectDisplayChange} 
              active={connectDisplay === 'signin' ? true : false}
            />
            <Signup 
              registerUser={registerUser} 
              handleOnSubmitSignup={handleOnSubmitSignup} 
              handleConnectDisplayChange={handleConnectDisplayChange} 
              active={connectDisplay === 'signup' ? true : false}
            />
          </ModuleContainer>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
