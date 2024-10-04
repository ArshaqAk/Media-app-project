import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { deleteVideo, watchHistory } from '../../services/allApi';

const VideoCard = ({props}) => {
  const [data,setData]=useState({})
  const [basicModal, setBasicModal] = useState(false);
  const toggleOpen = () =>setBasicModal(!basicModal)

  //delete function
  const handleDelete=async(id)=>{
    let response= await deleteVideo(id)
    console.log(response)
  }
  //history
  const handleaddhistory=async()=>{
    let time= new Date()
    console.log(time)
    await watchHistory({video:props, clicktime:time})
    console.log(response)
  }

  return (
    <div>

          <MDBCard onClick={()=>handleaddhistory()} className='border p-1 my-2' style={{height:'37vh'}}>
          <MDBCardImage className='px-3' style={{height:'20vh'}}  onClick={toggleOpen} src={props.image_url} position='top' alt='...' />
          <MDBCardBody style={{height:'20vh'}} className='d-flex justify-content-between '>
            <MDBCardTitle>{props.caption}</MDBCardTitle>
            <button onClick={()=>handleDelete(props.id)} className='btn'><i className='fa-solid fa-trash'></i></button>
          </MDBCardBody>
          </MDBCard>
    {/* modal */}

      <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{props.caption}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <iframe width="100%" height="315" src={props.youtub_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default VideoCard
