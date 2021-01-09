import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import "./styles/index.css";

import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./styles/theme";

import Pokedex from "./Pokedex";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Pokedex />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);