import { FETCH_COMP } from "../action/registrationlist"

const initialState={
    companylist:[]
}

export default companyHandler=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_COMP:
            return{
                companylist:action.list
            }

    }
}