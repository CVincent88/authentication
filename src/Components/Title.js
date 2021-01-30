import styled from 'styled-components'

const Text = styled.h2`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0 0 5px 0;
  text-align: center;
`;

function Title({value}) {
  return(
    <Text>{value}</Text>
  )
}

export default Title