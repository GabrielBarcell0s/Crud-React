import React from 'react'
//import Formulario from '../Components/Formulario'
import Tabela from '../Components/Tabela'
import Cabecalho from '../Components/Cabecalho'
import Rodape from '../Components/Rodape'
import MyContext from '../Components/MyContext';
import { Global, css } from '@emotion/react'

function Crud() {
  const url = "https://632c7f045568d3cad887090c.mockapi.io/Pessoas";

  const [usuario, setUsuario] = React.useState([]);
  const [carregando, setCarregando] = React.useState(true);
  const [atualizar, setAtualizar] = React.useState(0);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setUsuario(res)
        setCarregando(false)
      }
      )
  }, [atualizar])

  const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');

  body{
    margin:0
  }

  td,th{
    font-family: 'Inconsolata', monospace;
  }

  table{
    border: 1px solid rgba(0,0,0,.4);
  }
  `
  return (
    <main>
      <MyContext.Provider value={{ usuario, setUsuario, carregando, setCarregando, url, atualizar, setAtualizar }}>
        <Global styles={GlobalStyles} />
        <Cabecalho />
        <Tabela />
        <Rodape />
      </MyContext.Provider>
    </main>
  )
}

export default Crud