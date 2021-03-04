import DepartmentModel from "../../model/DepartmentModel";
import OrganisationModel from "../../model/OrganisationModel";

export const FETCH_COMP='Fetch_Company'
export const FETCH_DEPT = 'FETCH_DEPT'

export const fetchdetails=()=>{
    return async dispatch=>{
        const response=await fetch('https://customerapp-2cd9c.firebaseio.com/organisation.json?')
        const resData=await response.json();
        let companydetails=[]
        for(const key in resData){
            companydetails.push(new OrganisationModel(key, resData[key].name,resData[key].locality, resData[key].city,resData[key].email,resData[key].website, resData[key].state, resData[key].uid))

        }
        dispatch({type:FETCH_COMP,list:companydetails})
    }
}

export const fetchdepartment=(id)=>{
    return async dispatch =>{
        const response=await fetch(`https://customerapp-2cd9c.firebaseio.com/${id}/department.json?`)
        const resData=await response.json();

        console.log('ResData::::', resData)
        
        let departmentDetails=[]
        for(const key in resData){

            departmentDetails.push( new DepartmentModel(resData[key].orgId, key, resData[key].name,resData[key].type,resData[key].emailSlug))

        }
        console.log('List :',departmentDetails)
        dispatch({type:FETCH_DEPT,list1:departmentDetails})
    }
}