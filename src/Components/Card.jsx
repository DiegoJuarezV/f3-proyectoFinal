import React from "react";
import CardStyles from "../Styles/Card.module.css";
import { Link } from "react-router-dom";
import { useDentistStates } from "../Context/GlobalContext";
import { routes } from "../utils/routes";

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
        <img className={CardStyles.cardImg} src="/public/images/doctor.jpg" alt="Imagen de dentista" />
        <h4>Nombre: {name}</h4>
        <h4>Usuario: {username}</h4>
        <Link to={routes.detail(id)}>
          <button>Ver detalle</button>
        </Link>
        <button onClick={addFav} className="favButton">{isFavAdded ? "Remove fav" : "Add fav"}</button>
    </div>
  );
};

export default Card;
