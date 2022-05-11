import React, {useState, useEffect} from 'react'

import './navbar.css'
import { useNavigate } from "react-router-dom";
export const  Navbar= () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const navigate = useNavigate()
  const handleLocation= ()=>{
    navigate("/")

  }
  const navigate2 = useNavigate()
  const handleLocation2= ()=>{
    navigate2("/SignIn")

  }
  const navigate3 = useNavigate()
  const handleLocation3= ()=>{
    navigate3("/SignUp")

  }
  const navigate4 = useNavigate()
  const handleLocation4= ()=>{
    navigate4("/Cart")

  }

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <div className="list">
     <div className='logo'onClick={()=>{
            handleLocation()
          }}><img src='https://th.bing.com/th/id/R.2ca53069ae24cccef974244f5378e978?rik=wMgxCivTHXruRg&riu=http%3a%2f%2fwww.pngimagesfree.com%2fWedding_png%2fWedding_clipart_image_thirteen.png&ehk=R8O1FvJEHuDnHyx1PUE7Hxuz%2fhbBrek8jZPJIqwQ0bU%3d&risl=&pid=ImgRaw&r=0'/></div>
        <div className='items'>
        <div  className="items" onClick={()=>{
            handleLocation2()
          }}> Sign In</div>
      <div className="items" onClick={()=>{
            handleLocation3()
          }}>Sign Up</div>
      <div className="items" onClick={()=>{
            handleLocation4()
          }}>Cart</div>
        </div>
     
    </div>
      )}

      <button onClick={toggleNav} className="btn">=</button>
    
    </nav>
  
  )
}