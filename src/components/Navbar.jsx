import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between items-center text-lg font-semibold px-10 py-3'>
      <div>
        <Link to='/'>Movie Explorer</Link>
      </div>
      <div>
        <Link to='/favorites'>Favorites</Link>
      </div>
    </div>
  )
}

export default Navbar