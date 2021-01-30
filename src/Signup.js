import { useState } from 'react'

import styled from 'styled-components'

import Input from './Components/Input'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px;
  transform: ${props => props.active ? 'translateX(-50%)' : 'translateX(200px)'};
  opacity: ${props => props.active ? '1' : '0'};
`;

const Title = styled.span`
  font-weight: 600;
  letter-spacing: 1px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px;
  font-size: 14px;
`;

const Arrow = styled.span`
  postition: relative;
  left: 2px;
  border-radius: 50%;
  background-color: red;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px;
  position: relative;
  background-color: green;
`;

const ButtonText = styled.p`
  font-size: 16;
  margin: 0;
`;

function Signup({ active, handleConnectDisplayChange, handleOnSubmitSignup }) {

  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  return(
    <Container className="form" active={active}>
      <Title>Sign Up</Title>
        <Input 
          originalType="text"
          placeholder="email"
          autoComplete="off"
          value={email}
          onChange={setEmail}
        />
        <Input
          originalType="password"
          placeholder="Password"
          autoComplete="off"
          value={password1}
          onChange={setPassword1}
        />
        <Input 
          originalType="password"
          placeholder="Confirm password"
          autoComplete="off"
          value={password2}
          onChange={setPassword2}
        />
      {/* <InputContainer className="inputContainer">
        <Input 
          type="text"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={(text) => setEmail(text.target.value)}
        />
        <Underline className="underline"></Underline>
      </InputContainer>
      <InputContainer>
        <Input 
          type={isPassword1Visible ? "text" : "password"}
          placeholder="Password"
          autoComplete="off"
          value={password1}
          onChange={(text) => setPassword1(text.target.value)}
        />
        <Underline className="underline"></Underline>
        <Img onClick={() => handlePasswordVisibility(1)} src={isPassword1Visible ? eye_closed : eye} alt="Logo view password"/>
      </InputContainer>
      <InputContainer>
        <Input 
          type={isPassword2Visible ? "text" : "password"}
          placeholder="Password"
          autoComplete="off"
          value={password2}
          onChange={(text) => setPassword2(text.target.value)}
        />
        <Underline className="underline"></Underline>
        <Img onClick={() => handlePasswordVisibility(2)} src={isPassword2Visible ? eye_closed : eye} alt="Logo view password"/>
      </InputContainer> */}
      <Button onClick={() => handleOnSubmitSignup(email, password1, password2)} type="submit">Submit</Button>
      <ButtonWrapper onClick={() => handleConnectDisplayChange()}>
        <Arrow>m</Arrow>
        <ButtonText>Sign In</ButtonText>
      </ButtonWrapper>
    </Container>
  )
}

export default Signup