import { useState } from 'react'
import styled from 'styled-components'
import Input from './Components/Input'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px;
  transform: ${props => props.active ? 'translateX(50%)' : 'translateX(-200px)'};
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

function Signin({ active, handleConnectDisplayChange, handleOnSubmitSignin }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return(
    <Wrapper className="form" active={active}>
      <Title>Sign In</Title>
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
        value={password}
        onChange={setPassword}
      />
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