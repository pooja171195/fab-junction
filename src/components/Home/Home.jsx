import React from "react";
//import { Navbar } from "../navbar/Navbar";
import { Products } from "../Products";
import "./Home.css";
export const Home = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className="koohu">
      <div className="card bg-dark text-danger border-0">
        <img src="https://wallpapercave.com/wp/wp6609720.jpg" className="card-img" alt="Background" height="550px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-3">
           CHECK OUT ALL THE TRENDS
          </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
    </>
  );
};
