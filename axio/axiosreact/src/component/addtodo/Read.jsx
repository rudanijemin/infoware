import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


function Read() {
    const {id} =useParams();
    const [data , setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3006/users/"+id)
        .then((res)=>setData(res.data))
        .catch((err)=>setData(err))
    },[])
  return (
    <>
        <div>
            <h4>Details of user</h4>
            <div>
                <strong> Id:{data.id}</strong>
            </div>
            <div>
                <strong> Name:{data.name}</strong>
            </div>
            <div>
                <strong> Email:{data.email}</strong>
            </div>
            <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
            <Link to={'/'} className='btn btn-primary ms-3' >Back</Link>

        </div>
    </>
  )
}

export default Read