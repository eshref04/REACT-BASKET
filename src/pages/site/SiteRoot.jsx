import React from 'react'
import Header from '../../layout/site/Header'
import { Outlet } from 'react-router'
import Footer from './../../layout/site/Footer';

const SiteRoot = () => {
  return (
    <React.Fragment>
      <Header/>
      <Outlet/>
      <Footer/>
    </React.Fragment>
  )
}

export default SiteRoot
