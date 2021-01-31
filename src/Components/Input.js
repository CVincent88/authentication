import { useState } from 'react'
import styled from 'styled-components'

import HelpBox from './HelpBox'

import eye from '../images/eye-solid.svg'
import eye_closed from '../images/eye-closed-solid.svg'

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  margin: 10px 0 5px 0;
  position: relative;
`;

const InputBox = styled.input`
  padding: 10px;
  border: ${
    props => props.border === 'none' ? 
      '1px solid transparent' 
      : props.border === 'valid' ?
        '1px solid #2DC01B'
        :
        '1px solid red'
  };
  ::placeholder{
    font-weight: 300;
  }
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
`;

function Input({ 
  originalType, 
  placeholder, 
  value, 
  emailRegex, 
  passwordRegex, 
  inputPurpose, 
  password1,
  onChangeInput,
  border
}) {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [inputType, setInputType] = useState(originalType)
  const [displayHelpbox, setDisplayHelpbox] = useState(false)
  const [passwordConditions, setPasswordConditions] = useState({
    hasEnoughCharacter: false,
    hasOneUpperCase: false,
    hasOneLowerCase: false,
    hasOneDigit: false,
    hasOneSpecialCharacter: false,
    containsNoSpace: false
  })
   
  const enoughCharacterRegex = /^.{8,}/
  const oneUpperCaseRegex = /[A-Z]/
  const oneLowerCaseRegex = /[a-z]/
  const oneDigitRegex = /[0-9]/
  const oneSpecialRegex = /[!@#$%^&^*]/
  const containsSpaceRegex = /[\s]/

  const setHelpBox = (input) => {
    if(enoughCharacterRegex.test(input)){
      setPasswordConditions(prevState => (
        {...prevState,
        hasEnoughCharacter: true}
      ))
    }else{
      setPasswordConditions(prevState => (
        {...prevState,
        hasEnoughCharacter: false}
      ))
    }

    if(oneUpperCaseRegex.test(input)){
      setPasswordConditions(prevState => (
        {...prevState,
        hasOneUpperCase: true}
      ))
    }else{
      setPasswordConditions(prevState => (
        {...prevState,
        hasOneUpperCase: false}
      ))
    }

    if(oneLowerCaseRegex.test(input)){
      setPasswordConditions(prevState => (
        {...prevState,
        hasOneLowerCase: true}
      ))
    }else{
      setPasswordConditions(prevState => (
        {...prevState,
        hasOneLowerCase: false}
      ))
    }

    if(oneDigitRegex.test(input)){
      setPasswordConditions(prevState => (
        {...prevState,
        hasOneDigit: true}
      ))
    }else{
      setPasswordConditions(prevState => (
        {...prevState,
        hasOneDigit: false}
      ))
    }

    if(oneSpecialRegex.test(input)){
      setPasswordConditions(prevState => (
        {...prevState,
        hasOneSpecialCharacter: true}
      ))
    }else{
      setPasswordConditions(prevState => (
        {...prevState,
        hasOneSpecialCharacter: false}
      ))
    }

    if(containsSpaceRegex.test(input)){
      setPasswordConditions(prevState => (
        {...prevState,
        containsNoSpace: false}
      ))
    }else{
      setPasswordConditions(prevState => (
        {...prevState,
        containsNoSpace: true}
      ))
    }
  }

  const setHelpboxVisibility = (input) => {
    if(input === ''){
      setDisplayHelpbox(false)
    }else{
      if(inputPurpose === 'password'){
        if(passwordRegex.test(input)){
          setDisplayHelpbox(false)
        }else{
          setDisplayHelpbox(true)
        }
      }else if(inputPurpose === "email"){
        if(emailRegex.test(input)){
          setDisplayHelpbox(false)
        }else{
          setDisplayHelpbox(true)
        }
      }else{
        if(password1 === input){
          setDisplayHelpbox(false)
        }else{
          setDisplayHelpbox(true)
        }
      }
    }
  }

  const handlePasswordVisibility = () => {
    if(inputType === 'text'){
      setInputType('password')
    }else if(inputType === 'password'){
      setInputType('text')
    }
    setIsPasswordVisible(prevState => prevState = !prevState)
  }

  const onChange = (input) => {

    if(inputPurpose === 'email'){
      onChangeInput(emailRegex, inputPurpose, input)
    }else if(inputPurpose === 'password'){
      onChangeInput(passwordRegex, inputPurpose, input)
    }else if(inputPurpose === 'confirm-password'){
      onChangeInput(passwordRegex, inputPurpose, input)
    }

    setHelpBox(input)
    setHelpboxVisibility(input)
  }

  return(
    <Container className="inputContainer">
      <InputBox 
        type={inputType}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={(text) => onChange(text.target.value)}
        border={border}
      />
      <Underline className="underline"></Underline>
      {originalType === 'password' &&
        <Img onClick={() => handlePasswordVisibility()} src={isPasswordVisible ? eye : eye_closed} alt="Icon visible password"/>
      }
      {displayHelpbox &&
        <HelpBox 
          type={inputPurpose}
          conditions={passwordConditions}
        />
      }
    </Container>
  )
}

export default Input