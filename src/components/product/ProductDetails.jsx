// import React from 'react';
// import { Navbar } from '../navbar/Navbar';
// import { Subscription } from '../subscription/Subscription';
// import Data from "./db.json";
// import "./ProductDetails.css";
// import { useNavigate } from "react-router-dom";


// export const ProductDetails = () => {
//     const navigate = useNavigate()
//   const handleLocation= ()=>{
//     navigate("/product-Details")

//   }
 
//   return (
//       <>
//       <Navbar/>
//       <div className='sub'>
//        <div>we are commit to make your special day Memorable.</div>
//        <Subscription/>
//        </div>
//       <div className='ProductDetails'>  
//     <div className='card'>
   
//         <div className='posts'>
// {Data.map(post=>{
//     return(
//             <div className='post' key={ post.id }onClick={()=>{
//                 handleLocation()
//               }}>
//             <img className='Card-img' src={post.image}/>
//           <div className='container'>  <h3>{post.title}</h3>
//             <h4>{post.price}</h4>
//             </div>
//         </div>
        
//     )
// })}
//         </div>
//     </div>
//     </div>
//     </>
//   )
// }
