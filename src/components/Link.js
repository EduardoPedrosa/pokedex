import React from "react";
import {Link} from "react-router-dom";
import {makeStyles, Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
  },
  linkButton: {
    width: "100%",
    margin: "3px 10px",
    height: "45px",
    borderRadius: 10,
    backgroundColor: "#fff",
    color: theme.colors.blue,
    "&:hover": {
      backgroundColor: theme.colors.pink,
    },
  },
}));

function CustomLink(props) {
  const classes = useStyles();

  const {to, icon, label} = props;

  return (
    <Link className={classes.link} to={to}>
      <Button
        variant="contained"
        color="secondary"
        className={classes.linkButton}
        startIcon={icon}
      >
        {label}
      </Button>
    </Link>
  );
}

export default CustomLink;
