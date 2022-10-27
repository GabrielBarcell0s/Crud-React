import React, { useContext } from 'react'
import styled from '@emotion/styled'
import MyContext from './MyContext';
import DialogCriar from './DialogCriar';

function Cabecalho() {
  const { setUsuario, url } = useContext(MyContext);
  const [search, setSearch] = React.useState("");

  const Header = styled.header`
    position: relative;
    left:5vw;
    box-sizing:border-box;
    display:flex;
    justify-content:space-between;
    margin:0 0 20px;
    padding: 10px 30px 10px;
    border-radius:0 0 25px 25px;
    border: 1px solid black;
    width: 90vw;
  `

  const procurar = (value) => {
    if (isNaN(value[0])) {
      fetch(url + "?PrimeiroNome=" + value).then((res) => res.json()).then((res) => setUsuario(res))
    }
    else if (value === "") {
      fetch(url).then((res) => res.json()).then((res) => setUsuario(res))
    }
    else if (!isNaN(value)) {
      fetch(url + "?CPF=" + value).then((res) => res.json()).then((res) => setUsuario(res))

    }
  }

  return (
    <Header>
      <div>Logo</div>
      <div>
        <input value={search} onChange={(evento) => setSearch(evento.target.value)} type="search" name="pesquisar" id="pesquisar" placeholder='Nome ou CPF' autoFocus />
        <button onClick={() => procurar(search)} >Pesquisar</button>
      </div>

      <div>
        <DialogCriar>
          Cadastrar
        </DialogCriar>
      </div>
    </Header>
  )
}

export default Cabecalho