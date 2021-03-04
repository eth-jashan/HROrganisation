import { FETCH_COMP, FETCH_DEPT } from "../action/registrationlist"

const initialState={
    companylist:[],
    departmentList:[]
}

export default companyHandler=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_COMP:
            return{
                ...state,
                companylist:action.list
            }
        
        case FETCH_DEPT:
            const depList = action.list1
            return{
                ...state,
                departmentList:depList
            }
        
        default:
            return state

    }
}