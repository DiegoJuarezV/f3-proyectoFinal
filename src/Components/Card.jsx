import React from "react";
import { Link } from "react-router-dom";


const Card = ({ getDentist }) => {
  const {id, name, username } = getDentist;
  
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img width={220} src="/public/images/doctor.jpg" alt="" />
        <h4>{name}</h4>
        <h4>{username}</h4>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/detail/${id}`}>
          <button>Ver detalle</button>
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
