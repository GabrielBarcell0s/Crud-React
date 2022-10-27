import { useState } from 'react'
import { DialogActions,Dialog, DialogTitle, DialogContent } from '@mui/material'
import Formulario from './Formulario';

function DialogCriar(props) {
  const [abrirCriar, setAbrirCriar] = useState(false);
  return (
    <>
      <button onClick={() => setAbrirCriar(true)}>{props.children}</button>
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
          <button onClick={() => setAbrirCriar(false)}>Fechar</button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DialogCriar