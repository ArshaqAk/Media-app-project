import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from 'mdb-react-ui-kit';
import { addCategory, deleteCategory, getCategory } from '../../services/allApi';

const Category = () => {
  const [basicModal, setBasicModal] = useState(false);
  const toggleOpen = () => setBasicModal(!basicModal);
  const [category,setCategory]=useState({
    name:''
  })
  const [data,setData]=useState([])
  const [dep,setDep]=useState(false)

  //add category
  const handleAddcategory=async()=>{
    try {
      let response= await addCategory(category)
      setDep(!dep)
      if(response.request.status == 201){
        toggleOpen()
      }
    } catch (error) {
      console.log(error)
    }
  }

  //get category
  const handlegetcategory=async()=>{
    try {
      let response = await getCategory()
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    handlegetcategory()
  },[dep])

  //handle delete
  const handleDelete=async(id)=>{
      try {
        let response = await deleteCategory(id)
        console.log(response)
        setDep(!dep)
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <div className='row'>
      <div className="col-12 ">
        <button onClick={toggleOpen} className='btn btn-dark btn-sm'>Add new category</button>
        {
          data.map((item,index)=>(
            <div key={index} className='w-100    border border-1  d-flex justify-content-between mt-2'>
             <p>{item.name}</p>
             <i onClick={()=>handleDelete(item.id)} className='fa-solid fa-trash mt-1' style={{cursor:'pointer'}}></i>
            </div>
          ))
        }

      </div>
      <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Category</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            {/* <MDBInput className='my-1' label="category id" id="form1" type="text" /> */}
            <MDBInput onChange={(e)=>setCategory({...category,name:e.target.value})} className='my-1' label="category name" id="form1" type="text" />

            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn onClick={()=>handleAddcategory()}>Add</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

    </div>
  )
}

export default Category
