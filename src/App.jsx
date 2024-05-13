import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ROUTES from './routes/Routes'
import MainContext from './context/Context';
import axios from 'axios';





function App() {
  const [data,setData] = useState([])
  const contextData={
    data,setData
  }
 const router = createBrowserRouter(ROUTES)

 useEffect(()=>{
  axios.get("http://localhost:3000/games").then(res=>{
    setData([...res.data])
   
    }).catch(error=>{
      alert(error)
  })
 },[])

  return (
    <>
    <MainContext.Provider value={contextData}>
    <RouterProvider router={router}/>
    </MainContext.Provider>
      
        
      
    </>
  )
}

export default App
