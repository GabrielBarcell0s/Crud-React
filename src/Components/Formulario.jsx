import React, { useEffect, useState } from 'react'
import { Form, Field, Formik } from 'formik'
import * as Yup from 'yup'

function Formulario() {
  const url = "https://632c7f045568d3cad887090c.mockapi.io/MeuProjetos/1/Pessoas";
  const [cadastrado, setCadastrado] = useState({});

  useEffect(() => {
    if (Object.key(cadastrado).lenght > 0) {
      //Colocar Post com Fetch
    }
  }
    ,[url, cadastrado])

  const RegExp = {
    nome: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
    telefone: /^\+?\d{2}?\s*\(\d{2}\)?\s*\d{4,5}\-?\d{4}$/g,
    cpf: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
  }

  const schema = Yup.object().shape({
    PrimeiroNome: Yup.string().matches(RegExp.nome).required(),
    Sobrenome: Yup.string().matches(RegExp.mome).required(),
    Email: Yup.string().email().required(),
    Telefone: Yup.string().trim().matches(RegExp.telefone).required(),
    DataNasc: Yup.date().required(),
    CPF: Yup.string().matches(RegExp.cpf).required()
  })

  const onSubmit = (values, actions) => {

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
              <Field id="PrimeiroNome" name="PrimeiroNome" type="text" placeholder="João"></Field>
            </div>

            {errors.PrimeiroNome}

            <div>
              <label htmlFor="Sobrenome">Sobrenome:</label>
              <Field id="Sobrenome" name="Sobrenome" type="text" placeholder="Santos"></Field>
            </div>

            {errors.Sobrenome}

            <div>
              <label htmlFor="Email">Email:</label>
              <Field id="Email" name="Email" type="email" placeholder="joaoExemple@exemple.com" />
            </div>

            {errors.Email}

            <div>
              <label htmlFor="Telefone">Telefone:</label>
              <Field id="Telefone" name="Telefone" type="tel" placeholder="+99(99)9 9999-9999" />
            </div>

            {errors.Telefone}

            <div>
              <label htmlFor="DataNasc">Data de Nascimento:</label>
              <Field id="DataNas" name="DataNasc" type="date" />
            </div>

              {errors.DataNasc}

            <div>
              <label htmlFor="CPF">CPF:</label>
              <Field id="CPF" name="CPF" type="string" placeholder="000.000.000-00"/>
            </div>

              {errors.CPF}

              <br />

            <button disabled={!isValid} type="submit">Submit</button>

          </Form>
        )}
      </Formik>
    </>
  )
}

export default Formulario;