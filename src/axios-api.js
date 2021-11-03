import axios from 'axios'





const getAPI = axios.create({
    baseURL: 'https://sanctuary-django.herokuapp.com',
    timeout: 1000,
})


export { getAPI }