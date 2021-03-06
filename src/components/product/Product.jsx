import React, { useEffect, useState } from 'react';
import './ProductCard.css';
import Skeleton from "react-loading-skeleton";
import{addCart} from "../redux/action/index"
import {  useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

export const Prod=()=>{
const {id}=useParams();
 const [product, setProduct]=useState([]);
 const [loading,setLoading]=useState(false);
 const dispatch = useDispatch();
 const addProduct = (product)=>{
     dispatch(addCart(product));
 }
 useEffect(()=>{
     const getProduct= async () => {
         setLoading(true);
         const response = await fetch(`http://localhost:8000/product/${id}`);
         setProduct(await response.json());
         setLoading(false);
     }
     getProduct();
 },[id]);
   const Loading = ()=>{
       return(
           <>
           <div className='col-md-6'>
               <Skeleton height={400}/>
           </div>
           <div className='col-md-6' style={{lineHeight:2}}>
               <Skeleton height={50} width={300}/>
               <Skeleton height={75}/>
               <Skeleton height={25} width={150}/>
               <Skeleton height={50}/>
               <Skeleton height={150}/>
               <Skeleton height={50} width={100}/>
               <Skeleton height={50} width={100} style={{marginLeft:6}}/>
           </div>
           </>
       )
   }
   const ShowProducts=()=>{
       return(
<>
<div className='col-md-6' >
    <img src={product.image} alt={product.title} height="400px" width="400"/>
</div>
<div className="col-md-6">
    <h4 className='text-uppercase text-black'>
        {product.category}
    </h4>
    <h1 className='display-5'>{product.title}</h1>
<p className='lead fw-bolder'>
    Rating {product.rating && product.rating.rate}
    <i className='fa fa-star'></i>
</p>
<h3 className='display-6 fw bold my-4'>₹{product.price}</h3>
<p className="lead">{product.description}</p>
<button className="btn btn-outline-danger px-4 py-2" onClick={()=>addProduct(product)}>Add to Cart</button>
<NavLink to="/cart" className="btn btn-danger ms-2 px-4">Go to Cart</NavLink>
</div>
</>
       )
};
   
    return(
        <>
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading/> :<ShowProducts/>}
                </div>
            </div>
        </div>
      </>
    );
  };

