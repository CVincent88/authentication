import styled from 'styled-components'

const Container = styled.div`
  display: absolute;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  transform: ${props => props.active ? 'scaleY(1)' : 'scaleY(0)'};
  transform-origin: bottom center;
  transition: transform .3s linear
`;

const MainTitle = styled.h1`
  font-size: 50px;
  align-text: center;
`;

const LogoutButton = styled.button`
  width: 75px;
  position: absolute;
  bottom: 20px; 
  margin: auto;
  border-radius: 5px;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
`;

function WelcomePage({ pageToggler, active }) {
  return(
    <Container active={active}>
      
      <MainTitle>Welcome to your app</MainTitle>
      <LogoutButton className="submit-button" onClick={() => pageToggler()} >Log Out</LogoutButton>
    </Container>
  )
}

export default WelcomePage