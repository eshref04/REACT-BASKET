import React from 'react'
import "./CategoriesSection.css"

const CategoriesSection = () => {
  return (
    <section className='categories__section'>
    <div className='container'>
       <div className='categories__section__heading'>
       <h3>Shop for Different Categories</h3>
       <p>Who are in extremely love with eco friendly system.</p>
       </div>

       <div className='categories__section__images'>

       <div className='categories__section__left'>
             <div className='categories__section__left__above'>
                <div className='categories__section__image categories__section__left__above__l'>
                    <div  className='categories__section__hov categories__section__hov1 '>Product For Women</div>
                </div>
                <div className='categories__section__image categories__section__left__above__r'>
                    <div className='categories__section__hov categories__section__hov2 '>Product For Couple</div>
                </div>
                
             </div>
             <div className='categories__section__image categories__section__left__down'>
                <div className='categories__section__hov categories__section__hov3 '>Shop Now</div>
             </div>
       </div>
       <div className='categories__section__image categories__section__right'>
             <div className='categories__section__hov categories__section__hov4 '>Product For Men</div>
       </div>
       </div>
       </div>
    </section>
  )
}

export default CategoriesSection
