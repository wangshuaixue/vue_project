import axios from 'axios'
const baseUrl=''
// 发送ajax请求的函数模块
export default function ajax(url,data={},type='GET') {
  return new Promise(function (resolve,reject) {
    let promise
    url=baseUrl+url;
    if(type==='GET'){ //发送get请求需要拼接请求参数
      let paramStr=''
      Object.keys(data).forEach(key=>{
        paramStr+=key+'='+data[key]+'&'
      })
      //分情况是否有参数
      if(paramStr){
        paramStr='?'+paramStr.substring(0,paramStr.length-1)
      }
      promise=axios.get(url+paramStr)//使用axios发送ajax请求
    }else{ //POST请求
      promise=axios.post(url,data)
    }
    promise
      .then(response=>{ //请求成功回调
        resolve(response.data)
      })
      .catch(err=>{  //请求失败回调
        reject(err)
      })
    
  })
}
