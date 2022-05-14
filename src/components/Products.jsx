import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
//import { Navbar } from "./navbar/Navbar";

export const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:8000/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  const Loading = () => {
    return (
        <>
        <div className="col-md-3">
            <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
            <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
            <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
            <Skeleton height={350}/>
            </div>
        </>
    );
  };
  const filterProduct = (cat)=>{
      const updatedList = data.filter((x)=>x.category === cat);
      setFilter(updatedList);
  }
  const ShowProducts = () => {
    return (
        <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All Products</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Bridal Clothing")}>Bridal Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Jewellery")}>Jewellery</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Bridal Jewellery")}>Bridal Jewellery</button>
        </div>
        {filter.map((products) => {
          return (
            <>
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" key={products.id}>
                <img className="card-img-top" src={products.image} alt={products.title} height="250px" />
                <div className="card-body">
                  <h5 className="card-title text-danger mb-0">{products.title.substring(0,15)}...</h5>
                  <p className="card-text lead fw-bold text-success">
            ₹{products.price}
                  </p>
                  <NavLink to={`/products/${products.id}`} className="btn btn-outline-danger">
                    Buy Now
                  </NavLink>
                </div>
              </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
        {/* <Navbar/> */}
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center text-danger">
              Latest Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};
