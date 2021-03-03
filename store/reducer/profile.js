import EmployerModel from "../../model/EmployerModel"
import { LOGIN, LOG_OUT, CREATE_ACCOUNT } from "../action/profile"

const initialState={
    detailList:[],
    token:null,
    userid:null
}

export default authHandler=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                detailList:[...state.detailList],
                token:action.token,
                userid:action.userid
            }
        case CREATE_ACCOUNT:
            const EmployerDetail=new EmployerModel(
                action.detailslist.id,
                action.detailslist.depid,
                action.detailslist.compid,
                action.detailslist.Name,
                action.detailslist.number,
                action.detailslist.Age,
                action.detailslist.email
            )
            return{
                ...state,
                detailList:EmployerDetail,
                token:action.token,
                userid:action.userId
            }
        case LOG_OUT:
            return{
                ...state,
                detailList:[...state.detailList],
                token:null,
                userid:null
            }
        default:return state;
    }
}