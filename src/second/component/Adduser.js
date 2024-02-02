import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AddUser } from '../redu/Action';

function Adduser() {
  const[id , setId] = useState('');
  const[name , setName] = useState('');
  const[email , setEmail] = useState('');
  const[phone , setPhone] = useState('')

  const dispatch = useDispatch();
  const nevigate = useNavigate();

  const userobj={id,name,email,phone};
  const handleSubmit =(e)=>{
      e.preventDefault();
      const userobj={id,name,email,phone};
      dispatch(AddUser(userobj));
      nevigate('/user')
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div className='card'>
        <div className='card-header' style={{textAlign:'left'}}></div>
          <h2>Add User</h2>
      </div>
      <div className='card-body' >
        <div className='row'>
          <div className='col-lg-12'>
            <div className='form-group'>
              <label>Id</label>
              <input value={id} onChange={e=>setId(e.target.value)}  className='form-conrol'></input>
            </div> 
          </div> 
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='form-group'>
              <label>Name</label>
              <input value={name} onChange={e=>setName(e.target.value)} className='form-conrol'></input>
            </div> 
          </div> 
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='form-group'>
              <label >Email</label>
              <input value={email} onChange={e=>setEmail(e.target.value)} className='form-conrol'></input>
            </div> 
          </div> 
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='form-group'>
              <label>Phone</label>
              <input value={phone} onChange={e=>setPhone(e.target.value)} className='form-conrol'></input>
            </div> 
          </div> 
        </div>
      </div>
      
      <div className='card-footer' >
        <button className='btn btn-primary' type='submit' > Submit</button>
        <Link className='btn btn-danger' to={'/user'}> Back</Link>
      </div>
      </form>
    </div>
  )
}

export default Adduser