import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import "./Navbar.css";


const Navbar = () => {
  return (
    <div className='Navbar'>
       <div className='Links'></div>
       <Link to="/"> Shop </Link>
       <Link to="/cart"> 
      
       <ShoppingCart size={32}/> </Link>
    </div>
  )
}

export default Navbar
