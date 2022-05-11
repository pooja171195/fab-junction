import React from 'react'
import "./Home.css";
import { Navbar } from '../navbar/Navbar';
import { Subscription } from '../subscription/Subscription';



export const Home = () => {
  return (
    <>
    <div className='Home'>
     <Navbar/>
     <div className="home-header">

<h1>WELCOME to Wedding Junction</h1>
<p>we are commit to make your special day Memorable.</p>
<Subscription/>
</div>
</div>
<div className='Cat'> <h1>- Categories -</h1>
<div className='Cat-card'>
<div className="polaroid">
<img className='img' src="https://womenxo.com/wp-content/uploads/2021/01/137626679_2764304903830813_5840884603807788258_n.jpg" alt="Bridal"/>
<div class="container">
<p>Bridal</p>
</div>
</div>
<div className="polaroid">
<img className='img' src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/04/Embroidered-Net-Lehenga-in-Beige-and-Red-%E2%80%93-The-Glamorous-708x1024.png" alt="New-Arrival"/>
<div class="container">
<h3>New-Arrival</h3>
</div>
</div>
<div className="polaroid">
<img className='img' src="https://www.ethnicplus.in/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/2003_1__1.jpg"/>
<div class="container">
<h3>Popular-Product</h3>
</div>
</div>
</div>
</div>
<div className='footer'>
<hr/>
<p> CopyRight2022 Designed by @Pooja yadav All Rights Reserved </p>
</div>
    </>
   
  )
}
