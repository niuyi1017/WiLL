import Maxios from 'axios'
import {app} from '@/main.js'

Maxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.common['Authorization'] = 'Bearer ' + token;
  return config;
})
Maxios.interceptors.response.use(config => {
  return config
},err=>{
    if (err.response.status){
      app.$router.push('/user')
    }
})
export default Maxios