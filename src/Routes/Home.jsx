import React from 'react'
import Card from '../Components/Card'
import { useDentistStates } from '../Context/GlobalContext'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useDentistStates();

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.dentist.map((getDentist) => (
          <Card key={getDentist.id} getDentist={getDentist} />
        ))}
      </div>
    </main>
  )
}

export default Home