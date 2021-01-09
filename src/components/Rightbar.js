import React from "react";
import {makeStyles, Drawer} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 85,
    flexShrink: 0,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: 85,
    backgroundColor: theme.colors.secundaryRed,
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <Drawer
      anchor="right"
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    />
  );
}
