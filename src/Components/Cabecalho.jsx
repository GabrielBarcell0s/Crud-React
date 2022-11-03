import React, { useContext } from 'react'
import styled from '@emotion/styled'
import MyContext from './MyContext';
import Botao from './Botao';
import DialogCriar from './DialogCriar';

function Cabecalho() {
  const { setUsuario, url } = useContext(MyContext);
  const [search, setSearch] = React.useState("");

  const Header = styled.header`
    box-sizing:border-box;
    display:flex;
    justify-content:space-between;
    margin:0 0 20px;
    padding: 10px 30px 11px;
    border: 1px solid rgba(0,0,0,1);
    width: 100vw;
    background-color: rgba(0,0,0,1);
  `

  const LogoImagem = styled.img`
    position: fixed;

    top: 0px;
    width: 50px;
    height: 50px;
  `
  const LogoTexto = styled.span`
    position: fixed;
    font-size: 25px;
    left:7vw;
    top: 5px;
    color: white;
  `

  const Pesquisa = styled.input`
    width: 160px;
    height: 23px;
    border: 1px solid white;
    :focus{
      border: 1px solid white;
    }
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
      <div><LogoImagem src="https://i.postimg.cc/281wXHFK/dee704163b1bd7c8c4c95130120ad855d8e75ea3r1-736-736v2-uhq-removebg-preview.png" alt="FotoLogo" />
      <LogoTexto id='LogoTexto'>G Barc</LogoTexto>
      </div>
      <div>
        <Pesquisa value={search} onChange={(evento) => setSearch(evento.target.value)} type="search" name="pesquisar" id="pesquisar" placeholder='Nome ou CPF' autoFocus />
        <Botao onClick={() => procurar(search)} >Pesquisar</Botao>
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