import React, { useState } from 'react'
import { Form, Field, Formik } from 'formik'
import * as Yup from 'yup'
import { IMaskInput } from 'react-imask';

function Formulario(props) {
  const url = "https://632c7f045568d3cad887090c.mockapi.io/Pessoas";
  const [cadastrado, setCadastrado] = useState({});
  const config = { method: props.metodo, headers: { "Content-Type": "application/json" }, body: JSON.stringify(cadastrado) };

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
    if(props.enviar){
      const pessoa = { ...values }
      setCadastrado(pessoa)
      fetch(url, config)
      .then((res) => res.json())
      .then(() => console.log("Cadastrado"))
    }
  else{
    const pessoa = { ...values }
      setCadastrado(pessoa)
      fetch(url+`/${props.identificador}`, config)
      .then((res) => res.json())
      .then(() => console.log("Atualizado"))
  }
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

            <div>
              <label htmlFor="Sobrenome">Sobrenome:</label>

              <Field id="Sobrenome" name="Sobrenome" type="text" placeholder="Santos"></Field>


            </div>

            <div>
              <label htmlFor="Email">Email:</label>

              <Field id="Email" name="Email" type="email" placeholder="joaoExemple@exemple.com" />


            </div>

            <div>
              <label htmlFor="Telefone">Telefone:</label>

              <Field as={IMaskInput} id="Telefone" mask="+00 (00) 00000-0000" name="Telefone" type="tel" placeholder="+99(99)9 9999-9999" />

            </div>

            <div>
              <label htmlFor="DataNasc">Data de Nascimento:</label>

              <Field id="DataNas" name="DataNasc" type="date" />


            </div>

            <div>
              <label htmlFor="CPF">CPF:</label>

              <Field as={IMaskInput} mask="000.000.000-00" id="CPF" name="CPF" type="string" placeholder="000.000.000-00" />


            </div>

            <br />

            {props.enviar ? <button disabled={!isValid} type="submit">Cadastrar</button> : <button disabled={!isValid} type="submit">Editar</button>}

          </Form>
        )}
      </Formik>
    </>
  )
}

export default Formulario;