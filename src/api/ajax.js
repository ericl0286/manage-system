import { message } from 'antd'
import axios from 'axios'
// message.config({
//     top: 500,
//     duration: 2,
//     maxCount: 3,
// })
export default function ajax(url,data={},method='GET'){
    return new Promise(function(resolve,reject){
    let promise

    if(method === 'GET'){
        promise=axios.get(url,{params:data})
    }else{
        promise=axios.post(url,data)
    }
    
    promise.then(
        response=>resolve(response.data)
        ).catch(
            error =>message.error("请求错误:" + error.message,2)
        )
    })
}