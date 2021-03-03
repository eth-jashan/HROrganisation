import { LOGIN, LOG_OUT } from "../action/auth"

const initialState={
    token:null,
    userid:null
}

export default authHandler=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                token:action.token,
                userid:action.userid
            }
        case LOG_OUT:
            return{
                initialState
            }
        default:return state;
    }
}