import React from "react";

import {makeStyles} from "@material-ui/core";

import Appbar from "./components/Appbar";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Routes from './components/Routes'

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

function Pokedex() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Appbar />
      <Leftbar />
      <Routes />
      <Rightbar />
    </div>
  );
}

export default Pokedex;
