import styled from '@emotion/styled'

const IconeBotao = styled.button`
  border:0;
  cursor: pointer;
  width: 50px;
  height: 50px;

  &:hover{
    background: ${props => props.lixeira ? "#e70a0ab7" : "#8cace5"};
    border-radius: 50%
  }
`

export default IconeBotao;
