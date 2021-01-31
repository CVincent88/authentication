import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: -25%;
  border: 1px solid red;
  background-color: #fd9393;
  border-radius: 5px;
  font-size: 12px;
  padding: 5px;
  & p {
    margin: 0
  }
  display: ${props => props.active ? 'block' : 'none'}
`;

function SignupError({ active }) {
  return(
    <Container active={active}>
      <p className="error-text" >Oups, the email you provided is already registered.</p>
    </Container>
  )
}

export default SignupError