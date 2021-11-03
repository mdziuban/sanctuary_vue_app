import axios from 'axios'





const getAPI = axios.create({
    baseURL: 'https://sanctuary-django.herokuapp.com',
    // baseURL: process.env.BASE_URL,
    timeout: 1000,
})


export { getAPI }