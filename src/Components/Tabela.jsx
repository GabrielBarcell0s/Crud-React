import React, { useEffect, useState } from 'react'

function Tabela() {
  const url = "https://632c7f045568d3cad887090c.mockapi.io/Pessoas";
  const [Carregando, setCarregado] = useState(true);
  const [pessoas, setPessoas] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setPessoas(res)
        setCarregado(false)
      })
  }, [url])


  if (Carregando) return <>Espere</>

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Data de Nascimento</th>
            <th>CPF</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        {pessoas.map((pessoa, i) =>
          <tbody key={`Pessoa${i}`}>
            <tr>
              <td>{pessoa.PrimeiroNome}</td>
              <td>{pessoa.Sobrenome}</td>
              <td>{pessoa.Email}</td>
              <td>{pessoa.Telefone}</td>
              <td>{pessoa.DataNasc}</td>
              <td>{pessoa.CPF}</td>
              <td>📝</td>
              <td>🗑</td>
            </tr>
          </tbody>
        )}
      </table>

    </>
  )
}

export default Tabela