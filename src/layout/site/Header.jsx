import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
 <header className='header__start '>
   <div className='container d-flex justify-content-between  p-3 align-items-center '>
       <ul className='header__left d-flex gap-5 align-items-center'>
        <li className='header__left__call'> +12312-3-1209</li>
        <li className="header__left__mail"> SUPPORT@COLORLIB.COM</li>
       </ul>
       <div className='header__right'>
         LOGIN
       </div>
    </div>
    </header>

    <header className='header__end '>
    <div className="container d-flex justify-content-between align-items-center p-3">
    <img width={"50px"} height={"30px"} src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" />

    <ul className='header__end__menu  d-flex gap-5 align-items-center'>
      <li><Link>HOME</Link></li>
      <li><Link>CATEGORY</Link></li>
      <li><Link>ADMIN</Link></li>
      <li><Link>WOMEN</Link></li>
      <li><Link to="/basket">CART</Link></li>
    </ul>
    </div>
      
    </header>
    </>
   
   
  )
}

export default Header
