import React, { useState } from 'react';
import { Form, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { IMaskInput } from 'react-imask';
import MyContext from './MyContext';
import Carregamento from './Carregamento'
import Botao from './Botao';
import Label from './Label';
import InputCss from './InputCss';

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
            <InputCss>
              <Label htmlFor="PrimeiroNome">Nome:</Label>
      
              <Field id="PrimeiroNome" name="PrimeiroNome" type="text" placeholder="João" autoFocus></Field>

            </InputCss>

            <InputCss>
              <Label htmlFor="Sobrenome">Sobrenome:</Label>

              <Field id="Sobrenome" name="Sobrenome" type="text" placeholder="Santos"></Field>


            </InputCss>

            <InputCss>
              <Label htmlFor="Email">Email:</Label>

              <Field id="Email" name="Email" type="email" placeholder="joaoExemple@exemple.com" />


            </InputCss>

            <InputCss>
              <Label htmlFor="Telefone">Telefone:</Label>

              <Field as={IMaskInput} id="Telefone" mask="+00 (00) 00000-0000" name="Telefone" type="tel" placeholder="+99(99)9 9999-9999" />

            </InputCss>
            
            <InputCss>
              <Label htmlFor="CPF">CPF:</Label>

              <Field as={IMaskInput} mask="000.000.000-00" id="CPF" name="CPF" type="string" placeholder="000.000.000-00" />

            </InputCss>
            
            <InputCss>
              <Label htmlFor="DataNasc">Data de Nascimento:</Label>

              <Field id="DataNas" name="DataNasc" type="date" />


            </InputCss>


            <br />

            {props.enviar ? <Botao disabled={!isValid} type="submit">Cadastrar</Botao> : <Botao disabled={!isValid} type="submit">Editar</Botao>}

          </Form>
        )}
      </Formik>
    </>
  )
}

export default Formulario;