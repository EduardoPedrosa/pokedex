import React from "react"

import Modal from '../components/Modal'

// const pokemonsURL = "https://pokeapi.co/api/v2/pokemon"
// const pokemonsImage = "https://pokeres.bastionbot.org/images/pokemon"
const imageSource = "https://pokeres.bastionbot.org/images/pokemon/1.png"

function Content(props) {
  return (
    <div>
      {/*
      open - controla se o modal estah aberto
      handleClose - eh disparada com evento de click de fora do modal
      */}
      <Modal open={true} handleClose={() => null} >
        <h1>Modal</h1>
      </Modal>
    </div>
  )
}

export default Content
