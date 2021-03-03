import OrganisationModel from "../../model/OrganisationModel";

export const FETCH_COMP='Fetch_Company'

export const fetchdetails=()=>{
    return async dispatch=>{
        const response=await fetch('https://customerapp-2cd9c.firebaseio.com/organisation.json?')
        const resData=await response.json();
        let companydetails=[]
        for(const key in resData){
            companydetails.push(new OrganisationModel(key, resData[key].name,resData[key].locality, resData[key].city,resData[key].email,resData[key].website, resData[key].state ))

        }
        dispatch({type:FETCH_COMP,list:companydetails})
    }
}