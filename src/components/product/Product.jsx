import React, { useEffect, useState } from 'react';
import './ProductCard.css';
import Skeleton from "react-loading-skeleton";
import{addCart} from "../redux/action"
import {  useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const Product=()=>{
const {id}=useParams();
 const [products, setProduct]=useState([]);
 const [loading,setLoading]=useState(false);
 const dispatch = useDispatch();
 const addProduct = (products)=>{
     dispatch(addCart(products))
 }
 useEffect(()=>{
     const getProduct= async () => {
         setLoading(true);
         const response = await fetch(`http://localhost:8000/products/${products.id}`);
         setProduct(await response.json());
         setLoading(false);
     }
     getProduct();
 },[]);
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
   const ShowProducts=(products)=>{
       return(
<>
<div className='col-md-6'>
    <img src={products.image} alt={products.title} height="400px" width="400"/>
</div>
<div className="col-md-6">
    <h4 className='text-uppercase text-black'>
        {products.category}
    </h4>
    <h1 className='display-5'>{products.title}</h1>
<p className='lead fw-bolder'>
    Rating {products.rating && products.rating.rate}
    <i className='fa fa-star'></i>
</p>
<h3 className='display-6 fw bold my-4'>₹{products.price}</h3>
<p className="lead">{products.description}</p>
<button className="btn btn-outline-danger px-4 py-2" onClick={()=>addProduct(products)}>Add to Cart</button>
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

export default Product;