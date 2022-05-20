import React from 'react';

import "./order.css";
import { useNavigate } from 'react-router';
export const Order = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  return (
    <>
   
      <div>
        
      </div>
      <hr />
    
      <div className="PBtn">
        <h3>Your Order Has been Placed..</h3>
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
