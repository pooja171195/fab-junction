import React from 'react';

import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";
export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
   
      <div>
        
      </div>
      <hr />
      <div className="PImg">
        <img
          src="https://gifimage.net/wp-content/uploads/2017/09/404-gif-8.gif"
          alt=""
        />
      </div>
      <div className="PBtn">
        <h3>We can't seem to find the page you're looking for...</h3>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back to home
        </button>
      </div>
    </>
  );
};
