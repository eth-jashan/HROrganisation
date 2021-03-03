import { LOGIN } from "../action/auth"

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
        default:return state;
    }
}