import React from 'react'
import { Form, Field, Formik } from 'formik'
import * as Yup from 'yup'

function Formulario() {
  const schema = Yup.object().shape({
    PrimeiroNome: Yup.string().required(),
    Sobrenome: Yup.string().required(),
    Email: Yup.string().email(),
    Telefone: Yup.string().length(11),
    Idade: Yup.number().positive().integer().min(15)
  })


  return (
    <>
      <h1>Formik</h1>

      <Formik
        validationSchema={schema}

        initialValues={{
          PrimeiroNome: "",
          Sobrenome: "",
          Email:"",
          Telefone:"",
          DataNasc:""
        }}
      >
        {({ errors }) => (
          <Form>
            <div>
              <label htmlFor="PrimeiroNome">Nome:</label>
              <Field id="PrimeiroNome" name="PrimeiroNome" type="text"></Field>
            </div>

            {errors.PrimeiroNome}

            <div>
              <label htmlFor="Sobrenome">Sobrenome:</label>
              <Field id="Sobrenome" name="Sobrenome" type="text"></Field>
            </div>

            {errors.Sobrenome}

            <div>
              <label htmlFor="Email">Email:</label>
              <Field id="Email" name="Email" type="email" />
            </div>

            {errors.Email}

            <div>
              <label htmlFor="Telefone">Telefone</label>
              <Field id="Telefone" name="Telefone" type="tel" />
            </div>

            {errors.Telefone}

            <div>
              <label htmlFor="Idade">Idade:</label>
              <Field id="Idade" name="Idade" type="number" />
            </div>

            {errors.Idade && "????"}

          </Form>
        )}
      </Formik>
    </>
  )
}

export default Formulario;