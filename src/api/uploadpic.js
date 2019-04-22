/* eslint-disable */
import * as qiniu from "qiniu-js"
function uploadPic(file){
  let key = `test/fe/${file.name}`
  let token = `Qw7aqtmlX09_O4JkjBDKYS8UZIawZPdGo5tWGOtG:bbEMmuPZG2Zc2EvHm8OyenjiqZs=:eyJyZXR1cm5Cb2R5Ijoie1wia2V5XCI6XCIkKGtleSlcIixcImhhc2hcIjpcIiQoZXRhZylcIixcImZzaXplXCI6JChmc2l6ZSksXCJidWNrZXRcIjpcIiQoYnVja2V0KVwiLFwibmFtZVwiOlwiJCh4Om5hbWUpXCJ9Iiwic2NvcGUiOiJ1cGxvYWR0ZXN0IiwiZGVhZGxpbmUiOjE1NTU5NTU2Njl9`
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
export async function uploadAllPicAsync(files){
  let allPromeise = []
  for(let i = 0;i<files.length;i++){
    allPromeise.push(uploadPic(files[i]))
  }
  return Promise.all(allPromeise)
    .then(res =>{
      return Promise.resolve(res)
    })
    .catch(err =>{
      return Promise.reject(err)
    })
}
