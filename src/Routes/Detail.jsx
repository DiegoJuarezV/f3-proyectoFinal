import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentistId, setDentistId] = useState({});
  const params = useParams(); 
  
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  useEffect(() => {
    const getDentistId = async () => {
      try {
        let response = await fetch(url);
        let data = await response.json();
        setDentistId(data);
      } catch (error) {
        console.error(error.message);
      }
    }

    getDentistId();
  }, [])

  return (
    <>
      <h1>Información sobre el(la) dentista {dentistId.name}</h1>
      <h4>Nombre: {dentistId.name}</h4>
      <h4>Email: {dentistId.email}</h4>
      <h4>Telefono: {dentistId.phone}</h4>
      <h4>Sitio web: {dentistId.website}</h4>
    </>
  )
}

export default Detail;