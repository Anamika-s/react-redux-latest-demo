import React from 'react'
import { Link } from 'react-router-dom'
export const Links = () => {
  return (
    <div>
        <nav>
            
        <Link to="/aboutus"> About Us </Link>
        <Link to='/contactus'> Contact Us </Link>
        <Link to='/shop'> Shop </Link>
        <Link to='/search/2/shirt'> Search </Link>
        
        </nav>
        
    </div>
  )
}
