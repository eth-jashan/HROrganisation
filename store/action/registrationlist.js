import OrganisationModel from "../../model/OrganisationModel";

export const FETCH_COMP='Fetch_Company'
export const FETCH_DEPARTMENT = 'FETCH_DEPARTMENT'

export const fetchdetails=()=>{
    
    return async (dispatch, getState)=> {

        const response = await fetch('https://customerapp-2cd9c.firebaseio.com/organisation.json?')
        const resData=await response.json();
        let companydetails=[]

        for(const key in resData){
            companydetails.push(new OrganisationModel(key, resData[key].name,resData[key].locality, resData[key].city,resData[key].email,resData[key].website, resData[key].state,resData[key].listId))
        }
        
        console.log('Company :', resData)
        dispatch({type:FETCH_COMP,list:companydetails})
    }
}

export const fetchDepartment = (id) => {

    return async(dispatch, getState)=>{

        
        console.log('User Id :', id)

        const response = await fetch(`https://customerapp-2cd9c.firebaseio.com/${id}/department.json?`)
        const resData = await response.json()
        let list = []
        console.log("Resdata :", resData)
        for(const key in resData){
            list.push(new DepartmentModel(resData[key].orgId, key, resData[key].name,resData[key].type,resData[key].emailSlug))
        }
        
        dispatch({type:FETCH_DEPARTMENT, list:list})
    }

}