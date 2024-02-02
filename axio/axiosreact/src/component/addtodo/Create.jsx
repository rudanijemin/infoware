import axios from 'axios';
import React ,{useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'

function Create() {
    const[values , setValues] = useState({
        id:'',
        name:'',
        email:''
        })
        
        const navigate = useNavigate(); 
    const handleSubmit =(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3006/users',values)
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
                        onChange={e=>setValues({...values,id:e.target.value})}></input><tr></tr>


                        Name:<input type='text' placeholder='enter Name'
                        onChange={e=>setValues({...values,name:e.target.value})}></input><tr></tr>

                        Email:<input type='email' placeholder='enter Email'
                        onChange={e=>setValues({...values,email:e.target.value})}></input><tr></tr>

                        <button className='btn btn-success'>Submiit</button>
                        <Link to="/" className='btn btn-primary ms-3'>Back</Link>
                </form>
            </div>
       </div>
    </>
  )
}

export default Create