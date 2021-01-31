import React, { useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyle";
import { lightTheme, darkTheme } from "./Components/Themes"

import Signin from './Signin'
import Signup from './Signup'
import WelcomePage from './WelcomePage'

import moon from './images/cloud-moon-solid.svg'
import sun from './images/sun-solid.svg'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const ConnectionPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  position: absolute;
  top:0; left: 0; bottom: 0; right: 0;
  overflow-x: hidden;
  transform: ${props => props.active ? 'scaleY(1)' : 'scaleY(0)'};
  transform-origin: top center;
  transition: transform .3s linear
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
  cursor: pointer;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-size: 12px;
  display: ${props => props.active ? 'flex' : 'none'};
  & p {
    margin: 0;
  }
`;

function App() {

  const [theme, setTheme] = useState('light');
  const [connectDisplay, setConnectDisplay] = useState('signin')
  const [registeredUser, setRegisteredUser] = useState({
    email: '',
    password: ''
  })
  const [isConnectionPageActive, setConnectionPageActive] = useState(true)
  const [isWelcomePageActive, setWelcomePageActive] = useState(false)
  const [loginErrorVisible, setLoginErrorVisible] = useState(false)
  const [signupErrorVisible, setSignupErrorVisible] = useState(false)

  const emailRegex = /^[a-zA-Z0-9.-]{2,20}@([a-zA-Z0-9]{2,15})+(\.[a-zA-Z]{2,3})+((\.[a-zA-Z]{2,3})?)+$/
  const passwordRegex = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&^*])(?!.*[\s])(?!.*[<>]).*$/

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const pageToggler = () => {
    setConnectionPageActive(prevState => prevState = !prevState);
    setWelcomePageActive(prevState => prevState = !prevState)
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
    pageToggler()
  }

  const handleOnSubmitSignup = (email, password1, password2) => {

    if(signupErrorVisible === true){
      setSignupErrorVisible(false)
    }

    if(checkPasswordConformity(password1, password2) && checkInputValidity(emailRegex, email)){
      if(registeredUser.email !== email){
        registerUser(email, password2)
        return true
      }else{
        setSignupErrorVisible(true)
        return
      }
    }else{
      // Credentials do not match regex
      return
    }
  }

  const handleOnSubmitSignin = (email, password) => {
    if(checkInputValidity(passwordRegex, password) && checkInputValidity(emailRegex, email)){
      if(email === registeredUser.email && password === registeredUser.password){
        pageToggler()
        if(loginErrorVisible){
          setLoginErrorVisible(false)
        }
        return
      }else{
        setLoginErrorVisible(true)
      }
    }else{
      if(loginErrorVisible){
        setLoginErrorVisible(false)
      }
      return
    }
  }

  return (
     <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>

        <Wrapper>
          <ThemeToggler className="theme-toggler" onClick={themeToggler}>
              <img src={theme === 'light' ? moon : sun} alt="Toggle theme icon" />
          </ThemeToggler>

          <ConnectionPage active={isConnectionPageActive}>
            <ModuleContainer>
              <Signin 
                handleOnSubmitSignin={handleOnSubmitSignin} 
                handleConnectDisplayChange={handleConnectDisplayChange} 
                active={connectDisplay === 'signin' ? true : false}
                theme={theme}
                emailRegex={emailRegex}
                passwordRegex={passwordRegex}
                loginErrorVisible={loginErrorVisible}
                setLoginErrorVisible={setLoginErrorVisible}
              />
              <Signup 
                handleOnSubmitSignup={handleOnSubmitSignup} 
                handleConnectDisplayChange={handleConnectDisplayChange} 
                active={connectDisplay === 'signup' ? true : false}
                theme={theme}
                emailRegex={emailRegex}
                passwordRegex={passwordRegex}
                signupErrorVisible={signupErrorVisible}
                setSignupErrorVisible={setSignupErrorVisible}
              />
            </ModuleContainer>
            <Footer active={isConnectionPageActive}>
              <p>This is a demo version, you may only register one account at a time.</p>
            </Footer>
          </ConnectionPage>
          <WelcomePage pageToggler={pageToggler} active={isWelcomePageActive}/>
        </Wrapper>
      </>
    </ThemeProvider>
  );
}

export default App;
