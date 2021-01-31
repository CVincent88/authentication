import { useState } from 'react'

import styled from 'styled-components'

import Input from './Components/Input'
import Title from './Components/Title'
import SignupError from './Components/SignupError'
import arrow_left_black from './images/chevron-left-black.svg'
import arrow_left_white from './images/chevron-left-white.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px;
  transform: ${props => props.active ? 'translateX(-50%)' : 'translateX(130%)'};
  opacity: ${props => props.active ? '1' : '0'};
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  position: relative;
`;

const SubmitButton = styled.button`
  border-radius: 5px;
  margin: 10px 0 20px 0;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
`;

const ToSignIn = styled.div`
  font-size: 14px;
  padding: 4px 6px 4px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  position: relative;
  align-self: flex-start;
  cursor: pointer;
`;

const LeftArrow = styled.img`
  transform: translateX(0) 
`;

const ButtonText = styled.p`
  font-size: 16;
  margin: 0 0 0 5px;
`;

function Signup({ 
  active, 
  handleConnectDisplayChange, 
  handleOnSubmitSignup, 
  theme, 
  emailRegex, 
  passwordRegex,
  signupErrorVisible,
  setSignupErrorVisible
}) {

  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [emailBorder, setEmailBorder] = useState('none')
  const [password1Border, setPassword1Border] = useState('none')
  const [password2Border, setPassword2Border] = useState('none')

  const onClickToSignIn = () => {
    setSignupErrorVisible(false)
    handleConnectDisplayChange()
  }

  const setBorder = (regex, inputPurpose, input) => {
    if(inputPurpose === 'email'){
      if(input === ''){
        setEmailBorder('none')
      }else if(input !== '' && !regex.test(input)){
        setEmailBorder('invalid')
      }else if(input !== '' && regex.test(input)){
        setEmailBorder('valid')
      }
    }else if(inputPurpose === 'password'){
      if(input === ''){
        setPassword1Border('none')
      }else if(input !== '' && !regex.test(input)){
        setPassword1Border('invalid')
      }else if(input !== '' && regex.test(input)){
        setPassword1Border('valid')
      }
    }else if(inputPurpose === 'confirm-password'){
      if(input === ''){
        setPassword2Border('none')
      }else if(input !== '' && input !== password1){
        setPassword2Border('invalid')
      }else if(input !== '' && input === password1){
        setPassword2Border('valid')
      }
    }
  }

  const saveInput = (inputPurpose, input) => {
    switch (inputPurpose) {
      case 'email':
        setEmail(input)
        break;
      case 'password':
        setPassword1(input)
        break;
      case 'confirm-password':
        setPassword2(input)
        break;
      default:
        break;
    }
  }

  const handleOnChangeInput = (regex, inputPurpose, input) => {
    saveInput(inputPurpose, input)
    setBorder(regex, inputPurpose, input)
  }

  const onClickSubmitSignUp = () => {
    handleOnSubmitSignup(email, password1, password2)
    setEmail('');
    setPassword1('')
    setPassword2('')
    setEmailBorder('none')
    setPassword1Border('none')
    setPassword2Border('none')
  }

  return(
    <Container className="form" active={active}>
      <SignupError active={signupErrorVisible}/>
      <Title value="Sign Up" />
        <Input 
          originalType="text"
          inputPurpose="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          emailRegex={emailRegex}
          onChangeInput={handleOnChangeInput}
          border={emailBorder}
        />
        <Input
          originalType="password"
          inputPurpose="password"
          placeholder="Password"
          autoComplete="off"
          value={password1}
          passwordRegex={passwordRegex}
          onChangeInput={handleOnChangeInput}
          border={password1Border}
        />
        <Input 
          originalType="password"
          inputPurpose="confirm-password"
          placeholder="Confirm password"
          autoComplete="off"
          value={password2}
          passwordRegex={passwordRegex}
          password1={password1}
          onChangeInput={handleOnChangeInput}
          border={password2Border}
        />
      <SubmitButton className="submit-button" type="submit" onClick={() => onClickSubmitSignUp()}>Confirm</SubmitButton>
      <ToSignIn className="navButton" onClick={() => onClickToSignIn()}>
        <LeftArrow src={theme === 'light' ? arrow_left_black : arrow_left_white} alt="Icon link to SignIn" />
        <ButtonText>Sign In</ButtonText>
      </ToSignIn>
    </Container>
  )
}

export default Signup