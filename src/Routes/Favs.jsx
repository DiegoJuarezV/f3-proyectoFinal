import React from "react";
import Card from "../Components/Card";
import { useDentistStates } from "../Context/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useDentistStates();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((fav) => (
          <Card key={fav.id} getDentist={fav} /> 
        ))}
      </div>
    </>
  );
};

export default Favs;
