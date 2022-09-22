import React, { useEffect, useState } from 'react'

function Tabela() {
  const url = "https://632c7f045568d3cad887090c.mockapi.io/MeuProjetos/1/Pessoas";
  const [Carregando, setCarregado] = useState(true);
  const [pessoas, setPessoas] = useState(new Date());

  console.log(pessoas);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setPessoas(res)
        setCarregado(false)
      })
  }
    , [url])


  if (Carregando) return <>Espere</>

  return (
    <>
      {pessoas.map((pessoa,i) =>
        <table key={`Pessoa${i}`}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Data de Nascimento</th>
              <th>CPF</th>
              <th>Editar</th>
              <th>Modificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{pessoa.Nome}</td>
              <td>{pessoa.Sobrenome}</td>
              <td>{pessoa.Email}</td>
              <td>{pessoa.Telefone}</td>
              <td>{pessoa.DataNasc}</td>
              <td>{pessoa.CPF}</td>
              <td>📝</td>
              <td>🗑</td>
            </tr>
          </tbody>
        </table>
      )}

    </>
  )
}

export default Tabela