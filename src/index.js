import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import "./styles/index.css"

import Pokedex from "./Pokedex"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Pokedex />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
