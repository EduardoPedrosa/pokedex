import React from "react"
import {
  Dialog,
} from "@material-ui/core"

import "./modal.css"

const imageSorce = "https://pokeres.bastionbot.org/images/pokemon/1.png"

export default function ModalContainer(props) {
  const { open, handleClose, children } = props

  return (
    <Dialog classes={{ paper: "modal" }} onClose={handleClose} open={open} maxWidth="sm" fullWidth>
      {children}
    </Dialog>
  )
}
