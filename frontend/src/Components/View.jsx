import React, { useEffect, useState } from 'react'
import VideoCard from '../Components/VideoCard'
import { getAllvideos } from '../../services/allApi';

const View = () => {
  const[data,setData]=useState([])
  
    //handle get video
    const handleGetVideo=async()=>{
      try {
        let response = await getAllvideos()
        setData(response.data)  
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(()=>{
        handleGetVideo()
    },[data])
  return (
    <div className='row'>
        {
          data.map((item,index)=>(
            <div className="col-lg-4 col-sm-12 px-4" key={index}>
            <VideoCard props={item}/>
            </div>
          ))
        }
    </div>
  )
}

export default View
