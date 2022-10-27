import React, { useState } from 'react';
import { Form, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { IMaskInput } from 'react-imask';
import MyContext from './MyContext';
import Carregamento from './Carregamento'

function Formulario(props) {
  const { url, atualizar, setAtualizar} = React.useContext(MyContext);
  const [edit, setEdit] = useState({});
  const [looding, setLooding] = useState(true);

  const RegExp = {
    nome: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
  }

  const schema = Yup.object().shape({
    PrimeiroNome: Yup.string().matches(RegExp.nome).required(),
    Sobrenome: Yup.string().matches(RegExp.nome).required(),
    Email: Yup.string().email().required(),
    Telefone: Yup.string().trim().required(),
    DataNasc: Yup.date().required(),
    CPF: Yup.string().required()
  })

  React.useEffect(() => {
    if (!props.enviar) {
      fetch(url + `/${props.identificador}`)
        .then((res) => res.json())
        .then((res) => {
          setEdit(res)
          setLooding(false)
        }
        )
    }
    else {
      setLooding(false)
    }
  }, [props.enviar, props.identificador, url])


  const onSubmit = (values) => {
    const pessoa = { ...values }

    const config = { method: props.metodo, headers: { "Content-Type": "application/json" }, body: JSON.stringify(pessoa) };

    if (props.enviar) {
      fetch(url, config)
        .then((res) => res.json())
        .then(() => setAtualizar(atualizar + 1))
    }
    else {
      fetch(url + `/${props.identificador}`, config)
        .then((res) => res.json())
        .then(() => setAtualizar(atualizar + 1))
    }
  }

  if (looding) return <Carregamento tipo="editar" />

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={{
          PrimeiroNome: `${props.enviar ? "" : edit.PrimeiroNome}`,
          Sobrenome: `${props.enviar ? "" : edit.Sobrenome}`,
          Email: `${props.enviar ? "" : edit.Email}`,
          Telefone: `${props.enviar ? "" : edit.Telefone}`,
          DataNasc: `${props.enviar ? "" : edit.DataNasc}`,
          CPF: `${props.enviar ? "" : edit.CPF}`
        }}
      >
        {({ isValid }) => (
          <Form>
            <div>
              <label htmlFor="PrimeiroNome">Nome:</label>

              <Field id="PrimeiroNome" name="PrimeiroNome" type="text" placeholder="João" autoFocus></Field>

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