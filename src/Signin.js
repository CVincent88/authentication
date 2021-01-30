import { useState } from 'react'
import styled from 'styled-components'
import Input from './Components/Input'
import Title from './Components/Title'
import SubmitButton from './Components/SubmitButton'
import arrow_right_black from './images/chevron-right-black.svg'
import arrow_right_white from './images/chevron-right-white.svg'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px;
  transform: ${props => props.active ? 'translateX(60%)' : 'translateX(-130%)'};
  opacity: ${props => props.active ? '1' : '0'};
  visibility: ${props => props.active ? 'visible' : 'hidden'};
`;

const PasswordLink = styled.a`
  font-size: 12px;
  align-self: flex-end;
  margin-bottom: 10px
`;

const ToSignUp = styled.div`
  font-size: 14px;
  padding: 4px 4px 4px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: relative;
  align-self: flex-end;
  cursor: pointer;
  transition: box-shadow .2s linear;
`;

const RightArrow = styled.img`
  transform: translateX(0) 
`;

const ButtonText = styled.p`
  font-size: 16;
  margin: 0 5px 0 0;
`;

function Signin({ active, handleConnectDisplayChange, handleOnSubmitSignin, theme, emailRegex, passwordRegex }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return(
    <Wrapper className="form" active={active}>
      <Title value="Sign In" />
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
        value={password}
        saveInput={setPassword}
        passwordRegex={passwordRegex}
      />
      <PasswordLink href="#">Forgot your password ?</PasswordLink>
      <SubmitButton value='Confirm' type="submit" onClick={() => handleOnSubmitSignin(email, password)}/>
      <ToSignUp className="navButton" onClick={() => handleConnectDisplayChange()}>
        <ButtonText >Sign Up</ButtonText>
        <RightArrow src={theme === 'light' ? arrow_right_black : arrow_right_white} alt="Icon to SignUp" />
      </ToSignUp>
    </Wrapper>
  )
}

export default Signin