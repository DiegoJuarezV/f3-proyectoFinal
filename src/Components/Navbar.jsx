import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes'
import { useDentistStates } from '../Context/GlobalContext'
import Button from './Button'

const Navbar = () => {
  const { toggleTheme } = useDentistStates();

  return (
    <nav className='navbar'>
      <Link to={routes.home}>Home</Link>
      <Link to={routes.contact}>Contact</Link>
      <Link to={routes.favs}>Favs</Link>
      <Button onClick={toggleTheme}>Change theme</Button>
    </nav>
  )
}

export default Navbar