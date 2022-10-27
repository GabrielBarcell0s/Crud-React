import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { useState } from 'react'
import Formulario from './Formulario';

function DialogEditar(props) {
  const [abrirEditar, setAbrirEditar] = useState(false);

  return (
    <>
      <button onClick={() => setAbrirEditar(true)}>{props.children}</button>
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
          <button onClick={() => setAbrirEditar(false)} >Fechar</button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DialogEditar