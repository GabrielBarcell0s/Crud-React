import React, { useState } from 'react'
import { Form, Field, Formik } from 'formik'
import * as Yup from 'yup'
import { IMaskInput } from 'react-imask';
import { Tooltip } from '@mui/material'

function Formulario() {
  const url = "https://632c7f045568d3cad887090c.mockapi.io/Pessoas";
  const [cadastrado, setCadastrado] = useState({});
  const config = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(cadastrado) };

  const RegExp = {
    nome: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
  }


  const schema = Yup.object().shape({
    PrimeiroNome: Yup.string().matches(RegExp.nome).required(),
    Sobrenome: Yup.string().matches(RegExp.mome).required(),
    Email: Yup.string().email().required(),
    Telefone: Yup.string().trim().required(),
    DataNasc: Yup.date().required(),
    CPF: Yup.string().required()
  })

  const onSubmit = (values) => {
    const pessoa = { ...values }
    setCadastrado(pessoa)
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => console.log(res))
  }

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}

        initialValues={{
          PrimeiroNome: "",
          Sobrenome: "",
          Email: "",
          Telefone: "",
          DataNasc: "",
          CPF: ""
        }}
      >
        {({ errors, isValid }) => (
          <Form>
            <div>
              <label htmlFor="PrimeiroNome">Nome:</label>
              <Tooltip title={errors.PrimeiroNome ? "Nome Inválido" : "✔"} placement='right-end' arrow >
                <><Field id="PrimeiroNome" name="PrimeiroNome" type="text" placeholder="João"></Field></>
              </Tooltip>

            </div>

            <div>
              <label htmlFor="Sobrenome">Sobrenome:</label>
              <Tooltip title={errors.Sobrenome ? "Sobrenome Inválido" : "✔"} placement='right-end' arrow >
                <><Field id="Sobrenome" name="Sobrenome" type="text" placeholder="Santos"></Field></>
              </Tooltip>

            </div>

            <div>
              <label htmlFor="Email">Email:</label>
              <Tooltip title={errors.Email ? "Email Inválido" : "✔"} placement='right-end' arrow >
                <><Field id="Email" name="Email" type="email" placeholder="joaoExemple@exemple.com" /></>
              </Tooltip>

            </div>

            <div>
              <label htmlFor="Telefone">Telefone:</label>
              <Tooltip title={errors.Telefone ? "Telefone Inválido" : "✔"} placement='right-end' arrow >
                <><Field as={IMaskInput} id="Telefone" mask="+00 (00) 00000-0000" name="Telefone" type="tel" placeholder="+99(99)9 9999-9999" /></>
              </Tooltip>

            </div>

            <div>
              <label htmlFor="DataNasc">Data de Nascimento:</label>
              <Tooltip title={errors.DataNasc ? "Data de Nascimento Inválida" : "✔"} placement='right-end' arrow >
                <><Field id="DataNas" name="DataNasc" type="date" /></>
              </Tooltip>

            </div>

            <div>
              <label htmlFor="CPF">CPF:</label>
              <Tooltip title={errors.CPF ? "CPF Inválido" : "✔"} placement='right-end' arrow >
                <><Field as={IMaskInput} mask="000.000.000-00" id="CPF" name="CPF" type="string" placeholder="000.000.000-00" /></>
              </Tooltip>

            </div>

            <br />

            <button disabled={!isValid} type="submit">Submit</button>

          </Form>
        )}
      </Formik>
    </>
  )
}

export default Formulario;