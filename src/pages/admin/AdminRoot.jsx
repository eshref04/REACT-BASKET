import React from 'react'
import Header from '../../layout/admin/Header'
import { Outlet } from 'react-router';
import Footer from '../../layout/admin/Footer';

const AdminRoot = () => {
  return (
    <React.Fragment>
      <Header/>
      <Outlet/>
      <Footer/>
    </React.Fragment>
  )
}

export default AdminRoot
