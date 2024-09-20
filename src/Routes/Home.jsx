import React from 'react'
import Card from '../Components/Card'
import { useDentistStates } from '../Context/GlobalContext'

const Home = () => {
  const { state } = useDentistStates();

  return (
    <main>
      <h1>Contenido sobre nuestros dentistas</h1>
      <section className='list-container'>
        {state.dentist.map((getDentist) => (
          <Card key={getDentist.id} getDentist={getDentist} />
        ))}
      </section>
    </main>
  )
}

export default Home