import { ADD_USER, FAIL_REQ, GET_USER, GET_USER_OBJ, MAKE_REQ , REMOVE_USER, UPDATE_USER } from "./ActionType"

const initialstate={
    loading:true,
    userlist:[],
    userobj:{},
    errmassage:''
}
export const Reducer=(state =initialstate, action)=>{
    switch(action.type){
        case MAKE_REQ:
            return{
                ...state,
                loading:true
            }
        case FAIL_REQ:
            return{
                ...state,
                loading:false,
                errmassage:action.payload
            }
        case GET_USER:
            return{
                ...state,
                loading:false,
                errmassage:'',
                userlist:action.payload,
                userobj:{}

            }
        case REMOVE_USER:
            return{
                ...state,
                loading:false
            }

        case ADD_USER:
                return{
                    ...state,
                    loading:false
        }
        case UPDATE_USER:
                return{
                    ...state,
                    loading:false
            }
        case GET_USER_OBJ:
                return{
                    ...state,
                    loading:false,
                    userobj:action.payload
            }
        

        default:return state
    }
}