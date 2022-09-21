import React from 'react'
import { Form, Field, Formik } from 'formik'
import * as Yup from 'yup'

function Formulario() {
  const RegExp = {
    nome: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
    telefone: /^\+?\d{2}?\s*\(\d{2}\)?\s*\d{4,5}\-?\d{4}$/g
  }

  const schema = Yup.object().shape({
    PrimeiroNome: Yup.string().matches(RegExp.nome).required(),
    Sobrenome: Yup.string().matches(RegExp.mome).required(),
    Email: Yup.string().email().required(),
    Telefone: Yup.string().trim().matches(RegExp.telefone).required(),
    DataNasc: Yup.date().required()
  })

  const onSubmit = (values, actions) => {

  }
  

  return (
    <>
      <h1>Formik</h1>

      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}

        initialValues={{
          PrimeiroNome: "",
          Sobrenome: "",
          Email: "",
          Telefone: "",
          DataNasc: ""
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
              <Field id="Email" name="Email" type="email" placeholder="joaoExemple@exemple.com"/>
            </div>

            {errors.Email}

            <div>
              <label htmlFor="Telefone">Telefone</label>
              <Field id="Telefone" name="Telefone" type="tel" placeholder="+99(99)9 9999-9999" />
            </div>

            {errors.Telefone}

            <div>
              <label htmlFor="DataNasc">Data de Nascimento:</label>
              <Field id="DataNas" name="DataNasc" type="date"/>
            </div>

            {errors.DataNasc}

            <button disabled={!isValid} type="submit">Submit</button>

          </Form>
        )}
      </Formik>
    </>
  )
}

export default Formulario;