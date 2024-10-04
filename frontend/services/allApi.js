import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";


//Upload a new video - post   
export const uploadVideo = async(reqBody)=>{
//http://localhost:4000/videos
return await commonApi("post",`${serverUrl}/videos`,reqBody)
}

//get all videos -get
export const getAllvideos =async()=>{
    //http://localhost:4000/videos
    return await commonApi("get",`${serverUrl}/videos`,'')
}

//get video by id -get
export const getvideo =async (id)=>{
    //http://localhost:4000/videos/:id
    return await commonApi("get",`${serverUrl}/vieos/${id}`,'')
}

//delete video by id   -delete
export const deleteVideo = async(id)=>{
    //http://localhost:4000/videos/:id
    return await commonApi("delete",`${serverUrl}/videos/${id}`)
}


//watch history add
export const watchHistory=async(videoDetails)=>{
//http://localhost:4000/watch-history
    return await commonApi("post",`${serverUrl}/watch-history`,videoDetails)
}

//watch history get
export const getwatchHistory=()=>{
    //http://localhost:4000/watch-history
        return commonApi("get",`${serverUrl}/watch-history`)
    }

//add category
export const addCategory=(categoryName)=>{
        //http://localhost:4000/category
    return commonApi("post",`${serverUrl}/category`,categoryName)
}


//get category
export const getCategory=()=>{
    //http://localhost:4000/category
return commonApi("get",`${serverUrl}/category`)
}

//delete category
export const deleteCategory=(id)=>{
    //http://localhost:4000/category
return commonApi("delete",`${serverUrl}/category/${id}`)
}
