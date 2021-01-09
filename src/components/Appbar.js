import React from "react";
import {makeStyles, AppBar, Toolbar, Typography} from "@material-ui/core";
import logo from "../assets/poke-logo.png";
import pokecolors from "../assets/poke-colors.png";

const useStyles = makeStyles((theme) => ({
  appbar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.colors.primaryRed,
    boxShadow: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 50,
    marginLeft: 10,
  },
  pokecolors: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  pokecolorsLogo: {
    width: 90,
  },
  title: {
    marginRight: 85,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <img src={logo} alt="Logo" className={classes.logo} />
        <div className={classes.pokecolors}>
          <img src={pokecolors} alt="Logo" className={classes.pokecolorsLogo} />
        </div>
        <Typography align="right" variant="body1" className={classes.title}>
          POKEDEX
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
