import { MAKE_REQ ,FAIL_REQ ,GET_USER,REMOVE_USER, ADD_USER, UPDATE_USER, GET_USER_OBJ} from './ActionType'
import axios from 'axios'
import toast from "react-toastify"

export const makeRequest=()=>{
    return{
        type:MAKE_REQ
    }
}
export const failRequest=(err)=>{
    return{
        type:FAIL_REQ,
        payload:err
    }
}
export const getUser=(data)=>{
    return{
        type:GET_USER,
        payload:data
    }
}
export const deleteuser=()=>{
    return{
        type:REMOVE_USER,
    }
}
export const adduser=()=>{
    return{
        type:ADD_USER,
    }
}
export const updateuser=()=>{
    return{
        type:UPDATE_USER,
    }
}
export const getuserobj=(data)=>{
    return{
        type:GET_USER_OBJ,
        payload:data
    }
}

export const FetchUser=()=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        axios.get('http://localhost:3006/users').then(res=>{
            const userlist=res.data;
            dispatch(getUser(userlist));
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })

    }
}

export const RemoveUser=(code)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        axios.delete('http://localhost:3006/users/'+code).then(res=>{
            dispatch(deleteuser());
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })

    }
}

export const AddUser=(data)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        axios.post('http://localhost:3006/users',data).then(res=>{
            dispatch(adduser());
            // toast.success("user added sucessful")
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })

    }
}
export const Updateuser=(data,code)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        axios.put('http://localhost:3006/users/'+code,data).then(res=>{
            dispatch(updateuser());
            // toast.success("user added sucessful")
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}
export const Fetchuserobj=(code)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        axios.get('http://localhost:3006/users/',+code).then(res=>{
            dispatch(getuserobj());
            // toast.success("user added sucessful")
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })

    }
}