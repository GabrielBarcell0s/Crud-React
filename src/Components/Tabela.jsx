/** @jsxImportSource @emotion/react */

import { useContext } from 'react'
import DialogEditar from './DialogEditar'
import Td from '../Components/Td'
import Th from '../Components/Th'
import { css } from '@emotion/react'
import MyContext from './MyContext'
import Carregamento from './Carregamento'


function Tabela() {
  const { usuario, carregando, url,atualizar, setAtualizar } = useContext(MyContext);

  function Deletar(id) {
    const config = { method: "DELETE", headers: { "Content-Type": "application/json" } };
    fetch(url + `/${id}`, config).then((res) => res.json()).then(() => setAtualizar(atualizar + 1))
  }

  if (carregando) return <Carregamento />
  return (
    <>
      <table>
        <thead>
          <tr>
            <Th css={css`width:130px;`}>Nome</Th>
            <Th css={css`width:130px;`}>Sobrenome</Th>
            <Th css={css`width:250px;`}>Email</Th>
            <Th css={css`width:200px;`}>Telefone</Th>
            <Th css={css`width:120px;`}>Data de Nascimento</Th>
            <Th css={css`width:160px;`}>CPF</Th>
            <Th css={css`width:90px;`}>Editar</Th>
            <Th css={css`width:70px;`}>Excluir</Th>
          </tr>
        </thead>
        {usuario.map((pessoa, i) =>
          <tbody key={`Pessoa${i}`}>
            <tr>
              <Td css={css`text-transform:capitalize;`}>{pessoa.PrimeiroNome}</Td>
              <Td css={css`text-transform:capitalize;`}>{pessoa.Sobrenome}</Td>
              <Td>{pessoa.Email}</Td>
              <Td>{pessoa.Telefone}</Td>
              <Td>{pessoa.DataNasc}</Td>
              <Td>{pessoa.CPF}</Td>
              <Td>
                <DialogEditar identificador={pessoa.id}>
                  📝
                </DialogEditar>
              </Td>
              <Td>
                <button
                  css={css`
                    border:none;
                    font-size:25px;
                    cursor:pointer;
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