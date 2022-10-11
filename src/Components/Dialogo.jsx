import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { useState } from 'react'
import Formulario from './Formulario';

function Dialogo(props) {
  const [abrir, setAbrir] = useState(false);
  return (
    <>
      <Button onClick={() => setAbrir(true)}>{props.children}</Button>
      <Dialog
        open={abrir}
        onClose={() => setAbrir(false)}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'>
        <DialogTitle id='dialog-title'> Editando Usuario: </DialogTitle>
        <DialogContent>
          <DialogContentText id='dialog-description'>
            <Formulario identificador={props.identificador} enviar={false} metodo="PUT"/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAbrir(false)}>
            Finalizar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Dialogo