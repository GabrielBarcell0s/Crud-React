import React from 'react'
//import Formulario from '../Components/Formulario'
import Tabela from '../Components/Tabela'
import Cabecalho from '../Components/Cabecalho'
import Rodape from '../Components/Rodape'

//<Formulario enviar={true} metodo="POST" />
function Crud() {
  return (
    <main>
      <Cabecalho />
      <Tabela/>
      <Rodape />
    </main>
  )
}

export default Crud