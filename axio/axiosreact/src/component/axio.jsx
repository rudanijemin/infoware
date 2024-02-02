import axios from "axios";

const API = axios.create({
    baseUrl:"https://jsonplaceholder.typicode.com"
})

export default API;