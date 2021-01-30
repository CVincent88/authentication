import { useState } from 'react'

import styled from 'styled-components'

import Input from './Components/Input'
import Title from './Components/Title'
import SubmitButton from './Components/SubmitButton'
import arrow_left_black from './images/chevron-left-black.svg'
import arrow_left_white from './images/chevron-left-white.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px;
  transform: ${props => props.active ? 'translateX(-40%)' : 'translateX(130%)'};
  opacity: ${props => props.active ? '1' : '0'};
  visibility: ${props => props.active ? 'visible' : 'hidden'};
`;

const ToSignIn = styled.div`
  font-size: 14px;
  padding: 4px 6px 4px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: relative;
  background-color: #fff;
  align-self: flex-start;
  cursor: pointer;
  transition: box-shadow .2s linear;
`;

const LeftArrow = styled.img`
  transform: translateX(0) 
`;

const ButtonText = styled.p`
  font-size: 16;
  margin: 0 0 0 5px;
`;

function Signup({ active, handleConnectDisplayChange, handleOnSubmitSignup, theme, emailRegex, passwordRegex }) {

  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')


  return(
    <Container className="form" active={active}>
      <Title value="Sign Up" />
        <Input 
          originalType="text"
          inputPurpose="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          saveInput={setEmail}
          emailRegex={emailRegex}
        />
        <Input
          originalType="password"
          inputPurpose="password"
          placeholder="Password"
          autoComplete="off"
          value={password1}
          saveInput={setPassword1}
          passwordRegex={passwordRegex}
        />
        <Input 
          originalType="password"
          inputPurpose="confirm-password"
          placeholder="Confirm password"
          autoComplete="off"
          value={password2}
          saveInput={setPassword2}
          passwordRegex={passwordRegex}
          password1={password1}
        />
      <SubmitButton value='Confirm' type="submit" onClick={() => handleOnSubmitSignup(email, password1, password2)}/>
      <ToSignIn className="navButton" onClick={() => handleConnectDisplayChange()}>
        <LeftArrow src={theme === 'light' ? arrow_left_black : arrow_left_white} alt="Icon link to SignIn" />
        <ButtonText>Sign In</ButtonText>
      </ToSignIn>
    </Container>
  )
}

export default Signup