import React, {useState, useEffect} from "react";
import {makeStyles, Toolbar, Grid} from "@material-ui/core";
import axios from "axios";

import Card from "../components/Card";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginLeft: 200,
    marginRight: "85px",
    overflow: "auto",
    padding: 30,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  box: {
    marginBottom: 30,
    display: "flex",
    justifyContent: "center",
  },
}));

const pokemonsURL = "https://pokeapi.co/api/v2/pokemon";
const pokemonsImage = "https://pokeres.bastionbot.org/images/pokemon";

function Content(props) {
  const classes = useStyles();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getAllPokemons();
  }, []);

  const getPokemonDataUrl = (number) => {
    return `${pokemonsURL}/${number}`;
  };

  const getAllPokemons = () => {
    const promisses = [];

    for (let i = 1; i <= 150; i++) {
      promisses.push(
        axios.get(getPokemonDataUrl(i)).then((response) => response.data)
      );
    }

    Promise.all(promisses)
      .then((pokemons) => setPokemons(pokemons))
      .catch((err) => alert("ERRO"));
  };

  return (
    <div className={classes.content}>
      <Toolbar />
      <Grid container className={classes.container}>
        {pokemons.length
          ? pokemons.map((pokemon, index) => {
              const {types} = pokemon;

              return (
                <Grid item className={classes.box} xs={12} md={4}>
                  <Card
                    types={types}
                    name={pokemon.name}
                    img={`${pokemonsImage}/${index + 1}.png`}
                    pokemon={pokemon}
                  />
                </Grid>
              );
            })
          : "Carregando..."}
      </Grid>
    </div>
  );
}

export default Content;
