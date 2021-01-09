import React from "react";
import {makeStyles, Drawer, Toolbar} from "@material-ui/core";
import {Category, Star} from "@material-ui/icons";

import Link from "./Link";
import control from "../assets/poke-seta.png";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.colors.secundaryRed,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  controlContainer: {
    width: "100%",
    position: "absolute",
    bottom: 10,
    display: "flex",
    justifyContent: "center",
    marginBottom: 30,
  },
  control: {
    width: 100,
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <Link to="/" icon={<Category color="primary" />} label="POKEMONS" />
      <Link to="/favoritos" icon={<Star color="primary" />} label="FAVORITOS" />
      <div className={classes.controlContainer}>
        <img className={classes.control} src={control} alt="Controle" />
      </div>
    </Drawer>
  );
}
