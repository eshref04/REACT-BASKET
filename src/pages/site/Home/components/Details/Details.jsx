import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import "./Details.css"
import { useParams } from 'react-router'
import MainContext from '../../../../../context/Context'
import axios from 'axios'

const Details = () => {
    
   
    const [item,setItem]=useState([])
    const {id}=useParams()
    
   useEffect(()=>{
    axios.get(`http://localhost:3000/games/${id}`).then(res=>{
        setItem(res.data)
    }

    )
   
   },[])
   
  return (
    <div className='details__page container d-flex align-items-center flex-column p-5'>
      <h1><i>{item.title}</i></h1>
      <div className='d-flex my-5'><img src={item.image} width={"500px"}  height={"600px"} alt="" />
      <div style={{marginLeft:"24px"}} className='details__text d-flex flex-column gap-4'>
        <h2 >{item.description}</h2>
        <h3>{item.category}</h3>
       <h4>{item.price} $</h4>
      </div>
      </div>
    </div>
  )
}

export default Details
