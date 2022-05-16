import React, { useState, useEffect } from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart } from "../redux/action";




export const Cart = () => {
  const [product,setProduct] = useSelector((state)=>state.handleCart);
const state =  useSelector((state)=>state.handleCart);
 // const handleButton =useState([product])
let   componentMounted = true;
useEffect(()=>{
  const getProduct= async () => {
      const response = await fetch(`http://localhost:8000/product`);
      if (componentMounted) {
      setProduct(await response.json());
      console.log(product);
    
  }
  return () => {
    componentMounted = false;
  };
};
  getProduct();
},[]);
const handleButton=()=>{

}
const ShowProducts=()=>{
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src={product.image}
              alt={product.title}
              height="200px"
              width="180px"
            />
          </div>
          <div className="col-md-4">
            <h3>{product.title}</h3>
            <p className="lead fw-bold">
              {product.qty} x ₹{product.price}=₹{product.qty}*{product.price}
            </p>
            <button
              className="btn btn-outline-danger me-4"
              onClick={() => handleButton(product)}
            >
              <i className="fa fa-minus"></i>
            </button>
            <button
              className="btn btn-outline-danger me-4"
              onClick={() => handleButton(product)}
            >
              <i className="fa fa-plus"></i>
            </button>
            <div className="col-md-15 py-5 "><NavLink to="/checkout" className="btn btn-danger btn-lg mx-4 px-4">Proceed to CheckOut</NavLink></div>
            
          </div>
          

        </div>
      </div>
    </>
  );
};
const emptyCart = ()=>{
  <div className="px-4 my-5 bg-light rounded-3 py-5">
    <div className="container py-4">
      <div className="row">
        <h3>Your Cart is Empty!</h3>
      </div>
    </div>
  </div>
}
return(
  <>
{product.length===0 && emptyCart()}
  <div>
      <div className="container py-5">
          <div className="row py-4">
              <ShowProducts/>
          </div>
      </div>
  </div>
</>
);
};
