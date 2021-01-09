import React from "react";
import {
    makeStyles,
    Dialog, 
    Grid,
    Typography
} from "@material-ui/core";
import {Category, Star} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  name: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    padding: 5,
    textTransform: "capitalize",
    color: theme.colors.dark,
  },
  img: {
    width: 300,
    padding: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    color: theme.colors.primaryRed,
  },
  value: {
    fontSize: 20,
    padding: 5,
    color: theme.colors.dark,
  },
  typeTag: {
    backgroundColor: theme.colors.green,
    borderRadius: 8,
    margin: 5,
  },
  typeText: {
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    color: "white",
    fontSize: 18,
  },
  list: {
    paddingLeft: 25,
  },
  item: {
    fontSize: 18,
    color: theme.colors.dark,
    textTransform: "capitalize",
  }
}));

export default function ModalContainer(props) {
  const classes = useStyles();

  const { open, handleClose, pokemon, image } = props

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="sm" fullWidth>
      <Typography className={classes.name}>{pokemon.name}</Typography>
      <Grid container>
        <Grid item>
          <img src={image} className={classes.img}/>
        </Grid>
        <Grid item>
          <Grid container>
            <Typography className={classes.label}>Altura: </Typography>
            <Typography className={classes.value}>{pokemon.height}</Typography>
          </Grid>
          <Grid container>
            <Typography className={classes.label}>Peso: </Typography>
            <Typography className={classes.value}>{pokemon.weight}</Typography>
          </Grid>
          <Typography className={classes.label}>Tipos:</Typography>
          <Grid container>
            {pokemon.types.map((t) => (
              <Grid className={classes.typeTag}>
                <Typography className={classes.typeText}>{t.type.name}</Typography>
              </Grid>
            ))}
          </Grid>
          <Typography className={classes.label}>Habilidades:</Typography>
            <ul className={classes.list}>
              {pokemon.abilities.map((a) => (
                <li className={classes.item}>
                  {a.ability.name}
                </li>
              ))}
            </ul>
        </Grid>
      </Grid>
      
    </Dialog>
  );
}
