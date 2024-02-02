import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FetchUser ,RemoveUser} from '../redu/Action'
import { Link } from 'react-router-dom';
import { Button, Toast } from 'react-bootstrap';


function Userlisting(props) {
    useEffect(()=>{
        props.loaduser();
    },[])
    const handledelete=(code)=>{
        if(window.confirm("do you want to remove?")){
            props.removeuser(code);
            props.loaduser();
            // Toast.success("User Removed Sucessfully")
        }
    }
  return (
    props.user.loading?<div><h2>Loading....</h2></div>:
    props.user.errmassage?<div><h2>{props.user.errmassage}</h2></div>:
    <div>
        <div className='card'>
            <div className='card-header'>
                <Link to={'/user/add'} className='btn btn-success'>Add user +</Link>
            </div>
            <div className='card-body'>
                <table className='table table-bordered'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.user.userlist && props.user.userlist.map(item=>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <Link to={'/user/edit/'+item.id} className='btn btn-primary '>Edit</Link>
                                        <Button onClick={()=>{handledelete(item.id)}} className='btn btn-danger'>Delete</Button>
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    </div>
  )
}

const mapStatetoProps =(state)=>{
    return{
        user:state.user
    }
}

const mapDispatchtoProps =(dispatch)=>{
    return{
        loaduser:()=>dispatch(FetchUser()),
        removeuser:(code)=>dispatch(RemoveUser(code))
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps) (Userlisting)