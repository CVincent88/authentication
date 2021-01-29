import { useState } from 'react'

import styled from 'styled-components'
import eye from './images/eye-solid.svg'
import eye_closed from './images/eye-closed-solid.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  min-height: 250px;
  max-height: 500px;
  transform: ${props => props.active ? 'translateX(50%)' : 'translateX(-200px)'};
  opacity: ${props => props.active ? '1' : '0'};
`;

const Title = styled.span`
  font-weight: 600;
  letter-spacing: 1px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  :focus{
    outline: none;
    & + .underline{
      opacity: 1;
      width: 100%;
    }
  }
`;

const Img = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const Underline = styled.span`
  display: block;
  height: 2px;
  opacity: 0;
  width: 0%;
  transition: all .3s linear
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px;
  font-size: 14px;
`;

function Signin({ active, handleConnectDisplayChange, handleOnSubmitSignin }) {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(prevState => prevState = !prevState)
  }

  return(
    <Wrapper className="form" active={active}>
      <Title>Sign In</Title>
      <InputContainer className="inputContainer">
        <Input 
          type="text"
          placeholder="Email"
          value={email}
          onChange={(text) => setEmail(text.target.value)}
        />
        <Underline className="underline"></Underline>
      </InputContainer>
      <InputContainer >
        <Input 
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(text) => setPassword(text.target.value)}
        />
        <Underline className="underline"></Underline>
        <Img onClick={() => handlePasswordVisibility()} src={isPasswordVisible ? eye_closed : eye} alt="Logo view password"/>
      </InputContainer>
      <Button 
        onClick={() => handleOnSubmitSignin(email, password)} 
        type="submit" 
      >
        Submit
      </Button>
      <Button onClick={() => handleConnectDisplayChange()}>
        Sign Up
      </Button>
    </Wrapper>
  )
}

export default Signin