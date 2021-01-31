import styled from 'styled-components'

const Container = styled.div`
  font-size: 12px;
  padding: 5px;
  transform: translateX(100%);
  position: absolute;
  top: 0;
  right: 0;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 15px
`;

function HelpBox({ type, conditions }) {

  return(
    <Container className="helpbox">
      {type === 'email' ?
        <p>This must be a valid email address</p>
        : 
        type === 'password' ?
          <List>
            {!conditions.hasEnoughCharacter && <li>Password is too short (minimum is 8 characters)</li>}
            {!conditions.hasOneUpperCase && <li>Password needs at least one upper case letter</li>}
            {!conditions.hasOneLowerCase && <li>Password needs at least one lower case letter</li>}
            {!conditions.hasOneDigit && <li>Password needs at least 1 number</li>}
            {!conditions.hasOneSpecialCharacter && <li>Password needs at least 1 special character (!, @, #, $, %, ^, &, ^, *)</li>}
            {!conditions.containsNoSpace && <li>Password must not contain any space</li>}
          </List>
          :
          <p>The password does not match</p>
      }
    </Container>
  )
}

export default HelpBox