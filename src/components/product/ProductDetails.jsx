import React from 'react';
import { Navbar } from '../navbar/Navbar';
import { Subscription } from '../subscription/Subscription';
import Data from "./db.json";
import "./ProductDetails.css";

export const ProductDetails = () => {
  return (
      <div className='ProductDetails'>
          <Navbar/>
          <Subscription/>
    <div className='card'>

        <div className='posts'>
{Data.map(post=>{
    return(
            <div key={ post.id }>
            <div>{post.image}</div>
            <h4>{post.title}</h4>
            <h4>{post.price}</h4>
        </div>
        
    )
})}
        </div>
    </div>
    </div>
  )
}
