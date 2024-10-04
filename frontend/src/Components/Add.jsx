import React, { useState } from 'react'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput 
} from 'mdb-react-ui-kit';
import { uploadVideo } from '../../services/allApi';

const Add = () => {
  const [basicModal, setBasicModal] = useState(false);
  const toggleOpen = () => setBasicModal(!basicModal);
  const [data,setData]=useState({
    id:'',
    text:'',
    caption:'',
    image_url:'',
    youtub_link:'',
  })
  const getEmbedLink=(e)=>{
    const {value}=e.target
    // console.log(value.slice(17))
    const full_link= `https://www.youtube.com/embed/${value.slice(17)}`
    setData({...data,youtub_link:full_link})
  }
//upload function
const handleUpload = async()=>{
  try {

      const {id,text,caption,image_url,youtub_link} = data
      if(id &&  text && caption && image_url && youtub_link){

        const response = await uploadVideo(data)
        if(response.status == 201){
          setData({
            id:'', 
            text:'',
            caption:'',
            image_url:'',
            youtub_link:'',
          })
          alert('Video Uploaded successfully')
          toggleOpen()
      }
    }
    else{
      alert('Please fill all fields')
    }
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div>
      <button onClick={toggleOpen} className='btn btn-dark mt-3 btn-sm'>Upload a new video</button>
      <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Upload New Video</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="form">
              <MDBInput value={data.id} onChange={(e)=>setData({...data,id:e.target.value})} className='my-2' label="id" id="form1" type="text" />
              <MDBInput value={data.text} onChange={(e)=>setData({...data,text:e.target.value})} className='my-2' label="text" id="form1" type="text" />
              <MDBInput value={data.caption} onChange={(e)=>setData({...data,caption:e.target.value})} className='my-2' label="caption" id="form1" type="text" />
              <MDBInput value={data.image_url} onChange={(e)=>setData({...data,image_url:e.target.value})} className='my-2' label="image url" id="form1" type="text" />
              <MDBInput value={data.youtub_link} onChange={(e)=>getEmbedLink(e)} className='my-2' label="youtube link" id="form1" type="text" />

              </div>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn onClick={handleUpload}>Upload</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default Add

