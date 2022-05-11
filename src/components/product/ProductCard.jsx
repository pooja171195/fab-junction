import React from 'react';
import './ProductCard.css';
import Colors from '../Colors';
import DetailsThumb from '../DetailsThumb';
//import products from "./db.json";
import { Navbar } from '../navbar/Navbar';
import { Subscription } from '../subscription/Subscription';

class ProductCard extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "Bridal Lehnga",
        "src": [
            "https://th.bing.com/th/id/OIP.C3cIw2nZfpFqQAYzne4UmwHaJo?pid=ImgDet&rs=1",
            "https://th.bing.com/th/id/OIP.C3cIw2nZfpFqQAYzne4UmwHaJo?pid=ImgDet&rs=1",
            "https://th.bing.com/th/id/OIP.C3cIw2nZfpFqQAYzne4UmwHaJo?pid=ImgDet&rs=1",
            "https://th.bing.com/th/id/OIP.C3cIw2nZfpFqQAYzne4UmwHaJo?pid=ImgDet&rs=1"
          ],
        "description": "Your perfect pack for Special Day",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 20509.95,
        "colors":["red","black","crimson","teal"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    
    return(
        <>
        <Navbar/>
       <div className='sub'>
       <div>we are commit to make your special day Memorable.</div>
       <Subscription/>
       </div>
        
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                <Colors colors={item.colors} />

                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className="cart" 
          >Add to cart</button>

              </div>
            </div>
          ))
        }
      </div>
      </>
    );
  };
}
export default ProductCard;