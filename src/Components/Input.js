import { useState } from 'react'
import styled from 'styled-components'

import eye from '../images/eye-solid.svg'
import eye_closed from '../images/eye-closed-solid.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  margin-top: 10px;
`;

const InputBox = styled.input`
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

function Input({ originalType, placeholder, value, onChange }) {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [innerType, setInnerType] = useState(originalType)

  const handlePasswordVisibility = () => {
    if(innerType === 'text'){
      setInnerType('password')
    }else if(innerType === 'password'){
      setInnerType('text')
    }
    setIsPasswordVisible(prevState => prevState = !prevState)
  }

  return(
    <Container className="inputContainer">
      <InputBox 
        type={innerType}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={(text) => onChange(text.target.value)}
      />
      <Underline className="underline"></Underline>
      {originalType === 'password' &&
        <Img onClick={() => handlePasswordVisibility()} src={isPasswordVisible ? eye : eye_closed} alt="Icon visible password"/>
      }
    </Container>
  )
}

export default Input