import './App.css';
import React from 'react';
import { Home } from './components/Home/Home';
import {Routes, Route} from "react-router-dom";
import { Products } from './components/Products';
import { PageNotFound } from './components/pageNotFound/PageNotFound';
import Product from './components/product/Product';
import {SignIn} from "./components/signin/SignIn";
import {SignUp} from "./components/signup/SignUp";
import {Contact} from "./components/contact/Contact";
import {About} from "./components/contact/About"
import { Navbar } from './components/navbar/Navbar';
import { Cart } from './components/cart/Cart';
function App() {
  return (
<>
<Navbar/>
  <Routes>
   
  <Route  path='/' element={<Home/>}/>
  <Route  path='/product' element={<Products/>}/>
  <Route  path='/product/:id' element={<Product/>}/>
  <Route  path='/login' element={<SignIn/>}/>
  <Route  path='/register' element={<SignUp/>}/>
  <Route  path='/contact' element={<Contact/>}/>
  <Route  path='/about' element={<About/>}/>
  <Route  path='/cart' element={<Cart/>}/>
  <Route  path='*' element={<PageNotFound/>}/>
  </Routes>
  
  </>
  );
}

export default App;
