import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { useState } from 'react'
import Botao from './Botao';
import Formulario from './Formulario';
import IconeBotao from './IconeBotao';

function DialogEditar(props) {
  const [abrirEditar, setAbrirEditar] = useState(false);

  return (
    <>
      <IconeBotao onClick={() => setAbrirEditar(true)}>{props.children}</IconeBotao>
      <Dialog
        open={abrirEditar}
        onClose={() => setAbrirEditar(false)}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'>
        <DialogTitle id='dialog-title'> Editando Usuario: </DialogTitle>
        <DialogContent>
          <DialogContent id='dialog-description'>
            <Formulario identificador={props.identificador} enviar={false} metodo="PUT"/>
          </DialogContent>
        </DialogContent>
        <DialogActions>
          <Botao onClick={() => setAbrirEditar(false)}>Fechar</Botao>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DialogEditar