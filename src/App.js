import './App.css';

import React from 'react';
import { Route, Routes} from "react-router-dom";
import { Home } from './components/Home/Home';
import { SignIn } from './components/signin/SignIn';
import { SignUp } from './components/signup/SignUp';
import { Contact } from './components/contact/Contact';
import { PageNotFound } from './components/pageNotFound/PageNotFound';
import { ProductDetails } from './components/product/ProductDetails';
import ProductCard from './components/product/ProductCard';
import { Cart } from './components/cart/Cart';


function App() {
  return (
 
<div className='App'>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/SignIn"  element={<SignIn/>}/>
    <Route path="/SignUp"  element={<SignUp/>}/>
    <Route path="/Product"  element={<ProductDetails/>}/>
    <Route path="/product-Details"  element={<ProductCard/>}/>
    <Route path="/Contact"  element={<Contact/>}/>
    <Route path="/Cart"  element={<Cart/>}/>
    <Route path="*"  element={<PageNotFound/>}/>
</Routes>
</div>
  );
}

export default App;
