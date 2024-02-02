import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Axio() {
    const[data , setData] = useState();
    useEffect(()=>{
      async function data1(){
        const res = await axios.get("https://reqres.in/api/users?page=2");
        console.log(res.data);
        setData(res.data);
      }
      data1();
        
    })
  return (
    <>
    {
      data.map((d,i)=>{
        return <p key={i}>{d.email}</p>
      })
    }
    </>
  )
}

export default Axio