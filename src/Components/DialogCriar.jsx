import { useState } from 'react'
import { DialogActions,Dialog, DialogTitle, DialogContent } from '@mui/material'
import Formulario from './Formulario';
import Botao from './Botao';

function DialogCriar(props) {
  const [abrirCriar, setAbrirCriar] = useState(false);
  return (
    <>
      <Botao cadastrar onClick={() => setAbrirCriar(true)}>{props.children}</Botao>
      <Dialog
        open={abrirCriar}
        onClose={() => setAbrirCriar(false)}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'>
        <DialogTitle id='dialog-title'> Cadastrando Usuario: </DialogTitle>
        <DialogContent>
          <DialogContent id='dialog-description'>
            <Formulario identificador={props.identificador} enviar={true} metodo="POST"/>
          </DialogContent>
        </DialogContent>
        <DialogActions>
          <Botao onClick={() => setAbrirCriar(false)}>Fechar</Botao>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DialogCriar