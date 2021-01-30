import styled from 'styled-components'

const Button = styled.button`
  border-radius: 5px;
  margin: 10px 0 20px 0;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
`;

function SubmitButton({ value, type }) {
  return(
      <Button
        className="submit-button" 
        type={type}
      >
        {value}
      </Button>
  )
}

export default SubmitButton