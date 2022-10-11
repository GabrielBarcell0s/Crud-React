/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react'
import Dialogo from '../Components/Dialogo'
import Td from '../Components/Td'
import Th from '../Components/Th'
import { Global, css } from '@emotion/react'
function Tabela() {
  const url = "https://632c7f045568d3cad887090c.mockapi.io/Pessoas";
  const config = { method: "DELETE", headers: { "Content-Type": "application/json" } };
  const [Carregando, setCarregado] = useState(true);
  const [pessoas, setPessoas] = useState();


  const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');

  td,th{
    font-family: 'Inconsolata', monospace;
  }

  table{
    border: 1px solid rgba(0,0,0,.4);
  }
  `

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setPessoas(res)
        setCarregado(false)
      })
  }, [url])

  function Deletar(id) {
    fetch(url + `/${id}`, config).then((res) => res.json()).then(() => console.log("Deletado"))
  }

  if (Carregando) return <>Espere</>

  return (
    <>
      <Global styles={GlobalStyles} />
      <table>
        <thead>
          <tr>
            <Th css={css`width:130px;`}>Nome</Th>
            <Th css={css`width:130px;`}>Sobrenome</Th>
            <Th css={css`width:250px;`}>Email</Th>
            <Th css={css`width:200px;`}>Telefone</Th>
            <Th css={css`width:120px;`}>Data de Nascimento</Th>
            <Th css={css`width:160px;`}>CPF</Th>
            <Th css={css`width:50px;`}>Editar</Th>
            <Th css={css`width:70px;`}>Excluir</Th>
          </tr>
        </thead>
        {pessoas.map((pessoa, i) =>
          <tbody key={`Pessoa${i}`}>
            <tr>
              <Td>{pessoa.PrimeiroNome}</Td>
              <Td>{pessoa.Sobrenome}</Td>
              <Td>{pessoa.Email}</Td>
              <Td>{pessoa.Telefone}</Td>
              <Td>{pessoa.DataNasc}</Td>
              <Td>{pessoa.CPF}</Td>
              <Td>
                <Dialogo identificador={pessoa.id}>
                  📝
                </Dialogo>
              </Td>
              <Td>
                <button
                  css={css`
                    border:none;
                    font-size:25px;
                  `}
                  onClick={() => Deletar(pessoa.id)}>
                  🗑
                </button>
              </Td>
            </tr>
          </tbody>
        )}
      </table>
    </>
  )
}

export default Tabela