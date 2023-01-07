import React from 'react';
import { Link } from 'react-router-dom';
import { FcHome, FcShop, FcDocument } from "react-icons/fc";

const Navbar = () => (
  <nav className='menu-principal'>
    <ul>
        <li>
            <Link to="/"><FcHome size={16} /> <span>Home</span></Link>
        </li>
        <li>
            <Link to="/contacto"><FcDocument size={16} /> <span>Contacto</span></Link>
        </li>
        <div className='logo-derecha'>
        Happy Cake <FcShop size={16} />
        </div>
    </ul>
    
  </nav>
);

export default Navbar;
