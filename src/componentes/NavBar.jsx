import React from "react";
import logo from "./img/logo.png";
import CartWidget from "./CartWidget";


const NavBar = () => {
  return (
    <div className="row">
      <div className="col-md-12 bg-black text-white p-3">
        <ul className="nav d-flex align-items-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="100px" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link disablede link_header">WhatsApp</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link_header" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link_header" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link_header" href="#">Nosotros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  link_header" href="#">contacto</a>
          </li>
          <li>
            <a className="nav-link"><CartWidget /></a>
          </li>
        </ul>
      </div>
      <CartWidget />

    </div>
  );
};

export default NavBar;
