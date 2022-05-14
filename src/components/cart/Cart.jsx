import React from 'react';
import "./Cart.css";
import { useSelector } from 'react-redux';


export const Cart = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={products.imge} alt={products.title} height="200px" width="180px"/>
        </div>
        <div className="col-md-4">
          <h3>{products.title}</h3>
          <p className="lead">{products.qty}x₹{products.price}=₹{products.qty}*{products.price}</p>
        <button className="btn btn-outline-danger me-4" onClick={()=>handleButton(products)}><i className="fa fa-minus"></i></button>
        <button className="btn btn-outline-danger me-4" onClick={()=>handleButton(products)}><i className="fa fa-plus"></i></button>
        </div>

      </div>
    </div>
    </>
  )
}
