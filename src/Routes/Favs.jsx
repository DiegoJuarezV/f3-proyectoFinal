import React, { useState } from "react";
import Card from "../Components/Card";
import { useDentistStates } from "../Context/GlobalContext";

const Favs = () => {
  const { state } = useDentistStates();

  return (
    <>
      {state.favs.length === 0 ? (
        <div className="h1-fav">
          <h1>Sus dentistas favoritos aparecerán en esta sección.</h1>
          <img src="/public/DH.ico" alt="Imagen random de dentista" />
        </div>
      ) : (
        <>
          <h1>Dentists Favs</h1>
          <div className="card-grid">
            {state.favs.map((fav) => (
              <Card key={fav.id} getDentist={fav} /> 
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Favs;
