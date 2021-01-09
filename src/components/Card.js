import React, { useState } from "react";
import {makeStyles, Typography} from "@material-ui/core";
import {Favorite, Info} from "@material-ui/icons";
import Modal from './Modal'
import BrokenHeart from "../assets/broken.svg"

const useStyles = makeStyles((theme) => ({
  root: {
    width: 330,
    height: 340,
    backgroundColor: "#c4c4c4",
    display: "flex",
    flexDirection: "column",
    borderRadius: 15,
    padding: 30,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
      width: 300,
    },
  },
  imgBox: {
    height: 230,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    width: "100%",
    textTransform: "uppercase",
    paddingLeft: 15,
  },
  img: {
    width: 150,
  },
  pokemonTypeBox: {
    width: "100%",
    height: 30,
    paddingLeft: 20,
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  typeTitle: {
    width: 50,
    height: 20,
    backgroundColor: theme.colors.green,
    color: "#fff",
    marginLeft: 5,
    display: "flex",
    justifyContent: "center",
    fontWeight: "bold",
    borderRadius: 6,
  },
  optionsBox: {
    height: 50,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 10,
  },
  info: {
    color: theme.colors.yellow,
    fontSize: 35,
    marginRight: 10,
    cursor: "pointer",
  },
  heart: {
    color: theme.colors.secundaryRed,
    fontSize: 35,
    marginRight: 10,
    cursor: "pointer",
  },
  brokenHeart: {
    color: "#ddd",
    width: 35,
    marginRight: 10,
    cursor: "pointer",
  }
}));

function CustonCard(props) {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false)

  const {name, img, types, favorite, pokemon} = props;

  return (
    <div className={classes.root}>
      <div className={classes.imgBox}>
        <Typography className={classes.title} variant="body1" align="left">
          {name}
        </Typography>
        <img className={classes.img} src={img} />
        <div className={classes.pokemonTypeBox}>
          <Typography variant="caption">Tipo:</Typography>
          {types.map((type) => (
            <Typography className={classes.typeTitle} variant="caption">
              {type["type"].name}
            </Typography>
          ))}
        </div>
      </div>
      <div className={classes.optionsBox}>
        <Info className={classes.info} onClick={() => setOpenModal(true)}/>
        {favorite
        ?
          <img src={BrokenHeart} className={classes.brokenHeart} />
        :
          <Favorite className={classes.heart} />
        }
      </div>
      <Modal 
        open={openModal} 
        handleClose={() => setOpenModal(false)} 
        pokemon={pokemon} 
        image={img}
      />
    </div>
  );
}

export default CustonCard;
