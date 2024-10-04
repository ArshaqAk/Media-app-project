import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { getwatchHistory } from '../../services/allApi';

const WatchingHistory = () => {
  const [data,setData]= useState([])

const fetchData=async()=>{
try {
  let response= await getwatchHistory()
  setData(response.data)

  } catch (error) {
    console.log(error)
  }
}

  useEffect(()=>{
      fetchData()
  },[])

  return (
    <div className='container-fluid' style={{minHeight:'67vh'}}>
     <h3 className='text-center my-1'>Watch history</h3>

        <div className="row">
          <div className="col-lg-12 col-sm-12">
          <MDBTable className='mt-4'>
        <MDBTableHead>
        <tr className='bg-light border'>
          <th scope='col'>Id</th>
          <th scope='col'>Caption</th>
          <th scope='col'>Url</th>
          <th scope='col'>Time</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          data.map((item,index)=>(
            <tr key={index}>
            <th scope='row'>{item.video.id}</th>
            <td>{item.video.caption}</td>
            <td>{item.video.youtub_link
            }</td>
            <td>{item.clicktime}</td>
          </tr>
  
          ))
        }
      </MDBTableBody>
    </MDBTable>
          </div>
        </div>
    </div>
  )
}

export default WatchingHistory
