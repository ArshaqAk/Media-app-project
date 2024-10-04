import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import icon from '../assets/icon.png'
import {useNavigate} from 'react-router-dom'
const Landing = () => {
  const navigate = useNavigate()
  return (
    <div style={{minHeight:'68vh'}} className='container'>
      <div className="row pt-4">
        <div className="col-lg-6 col-sm-12" >
          <h1 className='uppercase'>WELCOME TO <span className='text-primary'>MEDIA PLAYER</span></h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec libero faucibus, convallis neque vel, maximus justo. Sed vel neque non est sodales dictum vel id ligula. Donec nec mauris vel neque dignissim semper.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid dolorem, suscipit mollitia iusto nisi quae a amet odit excepturi in, incidunt eos sed omnis, expedita eum reprehenderit unde hic option.
          </p>
          <button onClick={()=>navigate('/home')} className='btn btn-outline-dark'>Get started</button>
        </div>
        <div className="col-lg-6 col-sm-12 d-flex  justify-content-center align-items-center">

          {/* <img className='w-25 ' src="https://lh3.googleusercontent.com/jK97DT0-t8o2tZOfSbiccQyl7Sw7gLkfgx_FZJa0T43CO2tpq0bt21H4bE8Sy8EXsQ" alt="" /> */}
        </div>
      </div>
      
      {/* second row */}
      <div className="row text-center mt-5">
        <h2 className='my-5 text-primary'>FEATURES</h2>
          <div className="col-lg-4 col-sm-12">
              <MDBCard className='shadow'>
                <MDBCardImage className='w-25 m-auto my-3' src={icon} position='top' alt='...' />
                <MDBCardBody>
                  <MDBCardTitle>Managing Videos</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    lorem 
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
          </div>
          <div className="col-lg-4 col-sm-12">
          <MDBCard className='shadow'>
                <MDBCardImage  className='w-25 m-auto my-3' src={icon} position='top' alt='...' />
                <MDBCardBody>
                  <MDBCardTitle>Watch History</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    lorem 
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>

          </div>
          <div className="col-lg-4 col-sm-12">
          <MDBCard className='shadow'>
                <MDBCardImage  className='w-25 m-auto my-3' src={icon} position='top' alt='...' />
                <MDBCardBody>
                  <MDBCardTitle>Managing Videos</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    lorem 
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>

          </div>
      </div>
      {/* third row */}
      <div className="row border border-4 mt-5">
        <div className="col-lg-6 col-sm-12 p-4">
        <div className="box">
            <h2 className='text-primary'>Simple,Fast and Powerful</h2>
            <h4>Play Everthing</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus ipsum placeat non illo fugiat corrupti quidem architecto aut eaque. Vitae voluptatem dolor, accusantium quaerat nisi minus corporis dolore commodi.
            </p>
            <h4>Categorise Videos</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus ipsum placeat non illo fugiat corrupti quidem architecto aut eaque. Vitae voluptatem dolor, accusantium quaerat nisi minus corporis dolore commodi.
            </p>

            <h4>Managing History</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia doloribus ipsum placeat non illo fugiat corrupti quidem architecto aut eaque. Vitae voluptatem dolor, accusantium quaerat nisi minus corporis dolore commodi.
            </p>

          </div>
        </div>
        <div className="col-lg-6 col-sm-12 pt-5">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/B0jPCvKH5kQ?si=NazG2q7GQ-xs0e5D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing
