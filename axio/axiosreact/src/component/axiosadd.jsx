import React, { useEffect, useState } from 'react'
import api from "./api/contact"
import axios from 'axios';

function Axiosadd() {
    const[contant , setContant]=useState([]);
    const retrivecontant= async()=>{
        const res= await axios.get("http://localhost:3006/contacts");
        console.log(res.data);
        return res.data;
    }
    useEffect(()=>{
        const getAllContact = async()=>{
            const allContact = await retrivecontant();
            if(allContact) setContant(allContact);
        };
        getAllContact();
    })

  return (
    <>

    </>
  )
}

export default Axiosadd