import { useState } from 'react'

import styled from 'styled-components'
import eye from './images/eye-solid.svg'
import eye_closed from './images/eye-closed-solid.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px;
  height: 40vh;
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

function Signup({ handleOnSubmitSignup }) {

  const [isPassword1Visible, setIsPassword1Visible] = useState(false)
  const [isPassword2Visible, setIsPassword2Visible] = useState(false)

  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  const handlePasswordVisibility = (password) => {
    if(password === 1){
      setIsPassword1Visible(prevState => prevState = !prevState)
    }else{
      setIsPassword2Visible(prevState => prevState = !prevState)
    }
  }

  return(
    <Container className="form">
      <Title>Sign Up</Title>
      <InputContainer className="inputContainer">
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
      </InputContainer>
      <Button onClick={() => handleOnSubmitSignup(email, password1, password2)} type="submit">Submit</Button>
    </Container>
  )
}

export default Signup