import React from "react";
import logo from "./img/logo.png";
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className="row">
      <div className="col-md-12 bg-black text-white p-3">
        <ul className="nav d-flex align-items-center">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" href="#"><img src={logo} width="100px" /></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link link_header" to='/'>Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link link_header" to='/category/items'>$-3000</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link link_header" to='/category/producto'>$+3000</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link  link_header" to=''>contacto</NavLink>
          </li>
          <li>
            <NavLink className="nav-link"><CartWidget /></NavLink>
          </li>
        </ul>
      </div>
      <CartWidget />

    </div>
  );
};

export default NavBar;
