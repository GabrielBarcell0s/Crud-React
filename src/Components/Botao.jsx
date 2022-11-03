import styled from '@emotion/styled'

const Botao = styled.button`
  border:1px solid ${props => (props.cadastrar ? "#1fc235" :"#5992e3")};
  background-color:${props => (props.cadastrar ? "#1fc235" :"#5992e3")};
  color: white;
  border-radius: 25px;
  margin-left: 5px;
  padding:5px;
  cursor:pointer;
  &:hover {
    background-color: ${props => (props.cadastrar ? "#2baa3c" :"#8cace5")};
    border: 1px solid ${props => (props.cadastrar ? "#2baa3c" :"#8cace5")};
  }
`

export default Botao