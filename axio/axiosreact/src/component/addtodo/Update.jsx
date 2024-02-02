import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Update() {
    const[values , setValues] = useState({
        id:'',
        name:'',
        email:''
        })
    const {id} =useParams();
    // const [data , setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3006/users/"+id)
        .then((res)=>setValues(res.data))
        .catch((err)=>setValues (err))
    },[])

    const navigate = useNavigate();
    const handleSubmit =(event)=>{
        event.preventDefault();
        axios.put('http://localhost:3006/users/'+id,values)
        .then(res=>{
            console.log(res);
            navigate('/')
        })
        .catch(err =>console.log(err));
    }
  return (
  
    <>
        <div>
       <h4>Add a User</h4>
            <div>
                <form onSubmit={handleSubmit}>
                         Id:<input type='number' placeholder='enter id'
                             value={values.id}
                             onChange={e=>setValues({...values,id:e.target.value})}></input><tr></tr>


                        Name:<input type='text' placeholder='enter Name'
                             value={values.name}
                             onChange={e=>setValues({...values,name:e.target.value})}></input><tr></tr>

                        Email:<input type='email' placeholder='enter Email'
                               value={values.email}
                               onChange={e=>setValues({...values, email:e.target.value})}></input><tr></tr>

                        <button className='btn btn-success'>Submiit</button>
                        <Link to="/" className='btn btn-primary ms-3'>Back</Link>
                </form>
            </div>
       </div>
    </>
  )
}

export default Update