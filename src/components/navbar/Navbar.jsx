import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector} from "react-redux";
//import handleCart from "../redux/reducer/handleCart";
export const Navbar = () => {
const state = useSelector((state)=>state.handleCart);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow em">
     
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
          <img src='https://th.bing.com/th/id/R.2ca53069ae24cccef974244f5378e978?rik=wMgxCivTHXruRg&riu=http%3a%2f%2fwww.pngimagesfree.com%2fWedding_png%2fWedding_clipart_image_thirteen.png&ehk=R8O1FvJEHuDnHyx1PUE7Hxuz%2fhbBrek8jZPJIqwQ0bU%3d&risl=&pid=ImgRaw&r=0' height="80px" width="80px"/>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
           
        <div className="buttons">
         <NavLink to="/login" className="btn btn-outline-dark me-2">
           <i className="fa fa-sign-in me-2"></i>Login</NavLink>
           <NavLink to="/register" className="btn btn-outline-dark me-2">
           <i className="fa fa-user-plus me-2"></i>Register</NavLink>
           <NavLink to="/cart" className="btn btn-outline-dark me-2">
           <i className="fa fa-shopping-cart me-2"></i>Cart({state.length})</NavLink>
        </div>
         
          </div>
        </div>
    
      </nav>
    </div>
  );
};
