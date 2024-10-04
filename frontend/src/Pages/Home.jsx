import React from 'react'
import { Link } from 'react-router-dom'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
const Home = () => {
  return (
    <div style={{minHeight:'68vh',overflowX:'hidden'}}>
      <div className='row d-flex justify-content-between px-2 align-items-center'>
        <div className="col-lg-6 add_video">
            <Add/>
        </div>
        <div className='col-lg-6 text-end'>
        <Link to={'/watch-history'}>
            watch history
        </Link>

        </div>
      </div>
      <hr />
      {/* second row */}
      <div className='row d-flex justify-content-between px-2 '>
        <div className="col-lg-10 col-sm-12 view-video">
          <h2 className='text-cente'>All videos</h2>
            <View/>
        </div>
        <div className='col-lg-2 col-sm-12 text-end' style={{borderLeft:'1px solid black'}}>
            <Category/>
        </div>
      </div>
    </  div>
  )
}

export default Home
