import React from 'react'
import "./HeroSections.css";

const HeroSection = () => {
  return (
    <section className='hero__section d-flex align-items-center justify-content-center '>
  
     <div className='hero__section__left'>
        <img style={{marginRight:"114px"}} src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp" alt="" />
     </div>
     <div className='hero__section__heading'>
     <h1><span style={{fontSize:"18px",marginRight:"10px"}}>FLAT</span>75% Off</h1>
     <h2  style={{fontSize:"72px",marginTop:"18px"}}>IT’S HAPPENING <br /> THIS SEASON!</h2>
     <button >PURCHASE NOW</button>
     </div>
     
    </section>
  )
}

export default HeroSection
