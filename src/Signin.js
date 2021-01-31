import { useState } from 'react'
import styled from 'styled-components'
import Input from './Components/Input'
import Title from './Components/Title'
import LoginError from './Components/LoginError'
import arrow_right_black from './images/chevron-right-black.svg'
import arrow_right_white from './images/chevron-right-white.svg'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px;
  transform: ${props => props.active ? 'translateX(50%)' : 'translateX(-130%)'};
  opacity: ${props => props.active ? '1' : '0'};
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  position: relative;
`;

const PasswordLink = styled.a`
  font-size: 12px;
  align-self: flex-end;
  margin-bottom: 10px;
  text-decoration: none;
`;

const SubmitButton = styled.button`
  border-radius: 5px;
  margin: 10px 0 20px 0;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
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

function Signin({ 
  active, 
  handleConnectDisplayChange, 
  handleOnSubmitSignin, 
  theme, 
  emailRegex, 
  passwordRegex,
  loginErrorVisible,
  setLoginErrorVisible
}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailBorder, setEmailBorder] = useState('none')
  const [password1Border, setPassword1Border] = useState('none')

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
    }
  }

  const saveInput = (inputPurpose, input) => {
    switch (inputPurpose) {
      case 'email':
        setEmail(input)
        break;
      case 'password':
        setPassword(input)
        break;
      default:
        break;
    }
  }

  const handleOnChangeInput = (regex, inputPurpose, input) => {
    saveInput(inputPurpose, input)
    setBorder(regex, inputPurpose, input)
  }

  const onClickToSignUp = () => {
    setLoginErrorVisible(false)
    handleConnectDisplayChange()
  }

  const onClickSubmitSignin = () => {
    handleOnSubmitSignin(email, password)
    setEmail('');
    setPassword('')
    setEmailBorder('none')
    setPassword1Border('none')
  }

  return(
    <Wrapper className="form" active={active}>
      <LoginError active={loginErrorVisible}/>
      <Title value="Sign In" />
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
        value={password}
        passwordRegex={passwordRegex}
        onChangeInput={handleOnChangeInput}
        border={password1Border}
      />
      <PasswordLink href="#">Forgot your password ?</PasswordLink>
      <SubmitButton className="submit-button" type="submit" onClick={() => onClickSubmitSignin()}>Confirm</SubmitButton>
      <ToSignUp className="navButton" onClick={() => onClickToSignUp()}>
        <ButtonText >Sign Up</ButtonText>
        <RightArrow src={theme === 'light' ? arrow_right_black : arrow_right_white} alt="Icon to SignUp" />
      </ToSignUp>
    </Wrapper>
  )
}

export default Signin