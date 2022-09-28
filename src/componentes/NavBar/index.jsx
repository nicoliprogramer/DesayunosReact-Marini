import React from 'react'
// import logo from "../img/logo.png";
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="row">
            <div className="navbar">
                <div className="col-md-8 bg-green text-white p-1">
                    <ul className="nav d-flex align-items-center">
                        {/* <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" href="#"><img src={logo} width="100px" /></NavLink>
                    </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link link_header" aria-current="page" to='/'>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link link_header" to='/category/items'>-$3000</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link link_header" to='/category/producto'>+$3000</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/cart'><CartWidget /></NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;