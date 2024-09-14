import React from "react";
import detinstImage from "../assets/doctor.jpg";
import CardStyles from "../Styles/Card.module.css";
import { Link } from "react-router-dom";
import { useDentistStates } from "../Context/GlobalContext";
import { routes } from "../utils/routes";
import Button from "./Button";

const Card = ({ getDentist }) => {
  const { id, name, username } = getDentist;
  const { state, dispatch } = useDentistStates();
  const isFavAdded = state.favs.find(
    (fav) => fav.id == id || null
  );
  
  const addFav = () => {
    dispatch({ type: isFavAdded ? "REMOVE_FAVS" : "ADD_FAVS", payload: getDentist });
  }

  return (
    <div className={CardStyles.cardContainer}>
        <img className={CardStyles.cardImg} src={detinstImage} alt="Imagen de dentista" />
        <h4>Nombre: {name}</h4>
        <h4>Usuario: {username}</h4>
        <Link to={routes.detail(id)}>
          <Button>Ver detalle</Button>
        </Link>
        <Button onClick={addFav} className="favButton">{isFavAdded ? "Remove fav" : "Add fav"}</Button>
    </div>
  );
};

export default Card;
