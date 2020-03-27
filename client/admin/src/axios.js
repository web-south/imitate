import Vue from 'vue'
import axios from 'axios'

const http = axios.create({
	baseURL: 'http://localhost:3000/admin/api'
})

//1. Add a request interceptor
http.interceptors.request.use(config => {
	if(localStorage.token){
		config.headers.Authorization = 'Bearer ' + localStorage.token
	}
    return config;
  }, err => {
    return Promise.reject(err);
});

//2.  Add a response interceptor
http.interceptors.response.use(res => { 
	return res
	},err => {
		Vue.prototype.$message({
			type: 'error',
			message: err.response.data.message
		})
		return Promise.reject(err)
});


export default http