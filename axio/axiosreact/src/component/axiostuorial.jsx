import axios from 'axios'
import { useEffect } from 'react'

function Axiostuorial() {
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response.data);
        })

    },[])
  return (
    <div>axiostuorial</div>
  )
}

export default Axiostuorial