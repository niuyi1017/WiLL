/* eslint-disable */
import * as qiniu from "qiniu-js"
function uploadPic(file,token){
  let key = `test/fe/${file.name}`
  let putExtra = {}
  let config = {
    useCdnDomain: true,
  }
  return new Promise((resolve, reject) => {

    let observable = qiniu.upload(file, key, token, putExtra, config)
    observable.subscribe({
      next(res) {
      },
      error(err) {
        return reject(err)
      },
      complete(res) {
        return resolve(res)
      }
    })
  })
}
export async function uploadAllPicAsync(files,token){
  let allPromeise = []
  for(let i = 0;i<files.length;i++){
    allPromeise.push(uploadPic(files[i],token))
  }
  return Promise.all(allPromeise)
    .then(res =>{
      return Promise.resolve(res)
    })
    .catch(err =>{
      return Promise.reject(err)
    })
}
