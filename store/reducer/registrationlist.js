import { FETCH_COMP, FETCH_DEPARTMENT } from "../action/registrationlist"

const initialState={
    companylist:[],
    departmentList:[]
}

export default companyHandler=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_COMP:
            return{
                companylist:action.list
            }
        
        case FETCH_DEPARTMENT:{
            const depList = action.list
                return{
                    ...state,
                    departmentList:depList
            }
        }

        default:
            return state
    }
}

