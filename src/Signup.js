import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
`;

const Title = styled.span`
  font-weight: 600;
  letter-spacing: 1px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  margin-top: 10px;
  :focus{
    outline: none;
    & + .underline{
      opacity: 1;
      width: 100%;
    }
  }
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

function Signup({ handleSubmitLogin }) {
  return(
    <Container className="form">
      <Title>Sign Up</Title>
      <Form onSubmit={() => handleSubmitLogin()}>
        <InputContainer className="inputContainer">
          <Input 
            type="text"
            placeholder="Email"
            autoComplete="off"
          />
          <Underline className="underline"></Underline>
        </InputContainer>
        <InputContainer>
          <Input 
            type="password"
            placeholder="Password"
            autoComplete="off"
          />
          <Underline className="underline"></Underline>
        </InputContainer>
        <InputContainer>
          <Input 
            type="password"
            placeholder="Confirm password"
            autoComplete="off"
          />
          <Underline className="underline"></Underline>
        </InputContainer>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  )
}

export default Signup