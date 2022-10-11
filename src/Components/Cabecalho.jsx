import React from 'react'
import styled from '@emotion/styled'

function Cabecalho() {
  const Header = styled.header`
    display:flex;
    justify-content:space-between;
    margin-bottom:20px;
  `

  return (
    <Header>
      <div>Logo</div>
      <div>
        <button>Cadastrar</button>
      </div>
    </Header>
  )
}

export default Cabecalho