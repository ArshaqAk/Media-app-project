//single api for every methods
import axios from 'axios'

export const commonApi =async (httpMethod,url,reqBody)=>{
    let reqConfig = {
        method: httpMethod,
        url,
        data:reqBody,
        headers:{
            "content-Type":"application/json"
        }
    }

    return await axios(reqConfig).then((result)=>{
        return result
    })
    .catch((err)=>{
        return err
    })
}