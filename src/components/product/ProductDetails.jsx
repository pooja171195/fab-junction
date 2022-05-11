import React from 'react';
import { Navbar } from '../navbar/Navbar';
//import { Subscription } from '../subscription/Subscription';
import Data from "./db.json";
import "./ProductDetails.css";


export const ProductDetails = () => {
  return (
      <>
      <Navbar/>
      <div className='ProductDetails'>  
    <div className='card'>
   
        <div className='posts'>
{Data.map(post=>{
    return(
            <div className='post' key={ post.id }>
            <img className='Card-img' src={post.image}/>
          <div className='container'>  <h3>{post.title}</h3>
            <h4>{post.price}</h4>
            </div>
        </div>
        
    )
})}
        </div>
    </div>
    </div>
    </>
  )
}
