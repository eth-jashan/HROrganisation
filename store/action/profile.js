import EmployerModel from "../../model/EmployerModel"

export const LOGIN='Login'
export const LOG_OUT='Log-out'
export const CREATE_ACCOUNT='Sign-Up'
export const FETCH_PROFILE='Fetch_Profile'
export const UPDATE_PROFILE='Update_Profile'
export const login=(email,password)=>{
    return async(dispatch)=>{
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD5F91cUBTP4erSBrU4ZDz5HMRcP_ONY68',{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify({
                email : email,
                password : password,
                returnSecureToken : true
            })
        });
        if(!response.ok){
            const errordata=await response.json();
            const errorid=errordata.error.message;
            let message='Something Went Wrong'
            if(errorid==='EMAIL_NOT_FOUND'){
                message="Incorrect Email-Id.Please Enter the valid email-ID"
            }
            else if(errorid==='INVALID_PASSWORD'){
                message="Incorrect Password.Please Enter the valid password"
            }
            throw new Error(message);
        }
        const resData = await response.json();
        console.log(resData)
        dispatch({type : LOGIN, token : resData.idToken, userId : resData.localId })
    }
}

export const signup=( DepId, CompId, name, number, email,age,password,role,joineddate)=>{
    return async(dispatch, getState)=>{
        const response1=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD5F91cUBTP4erSBrU4ZDz5HMRcP_ONY68',{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify({
                email : email,
                password : password,
                returnSecureToken : true
            })
        });
        const resData1=await response1.json();
        console.log("uid :", resData1)
        
        const response2=await fetch(`https://customerapp-2cd9c.firebaseio.com/${CompId}/employee.json?`,{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({
                EmpId:resData1.localId,
                DepId:DepId,
                CompId:CompId,
                Name:name,
                Number:number,
                Age:age,
                email:email,
                Role:role,
                Teamleader:false,
                joinedDate:joineddate
            })
        })
        const resData2=await response2.json();
        console.log("ID :", resData2)
        await fetch(`https://customerapp-2cd9c.firebaseio.com/employee/${resData1.localId}.json?`,{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({compId:CompId})
        })
        

        dispatch({type:CREATE_ACCOUNT,token : resData1.idToken, userId : resData1.localId,detailslist:{
            id:resData2.name,
            depid:DepId,
            compid:CompId,
            Name:name,
            number:number,
            Age:age,
            email:email,
            Role:role,
            teamleader:false,
            joinedDate:joineddate
        }})

    }
}

export const updateProfile=( id,DepId, CompId, name, number, email,age,role,teamleader,joineddate)=>{
    return async (dispatch,getState)=>{
        const token=getState().login.token;
        const userid=getState().login.userid;
        await fetch(`https://customerapp-2cd9c.firebaseio.com/${CompId}/employee/${id}.json?auth=${token}`,
        {
            method:'PATCH',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                DepId:DepId,
                CompId:CompId,
                Name:name,
                Number:number,
                Age:age,
                email:email,
                Role:role,
                Teamleader:teamleader,
                joinedDate:joineddate
            })

        }

        )
        dispatch({type:UPDATE_PROFILE,updatedata:{id,DepId, CompId, name, number, email,age,role,teamleader,joineddate}})
    }

}

export const fetchProfile=()=>{
    return async (dispatch,getState)=>{
        const uid=getState().auth.userid;
        const token=getState().auth.token;

        const response1 = await fetch(`https://customerapp-2cd9c.firebaseio.com/employee/${uid}.json?`)
        const resData2 = await response1.json()
        let companyId = []
        for(const key in resData2){
            companyId.push(resData2[key].compId)
        }

        const response=await fetch(`https://customerapp-2cd9c.firebaseio.com/${companyId[0]}/employee.json?`)
        const resData=await response.json()
        let profile=[]
        for(const key in resData){
            profile.push(new EmployerModel(key,resData[key].DepId,resData[key].CompId
                ,resData[key].Name,resData[key].Number,resData[key].email,resData[key].Age,
                resData[key].Role,resData[key].teamleader,resData[key].joinedDate, resData[key].EmpId))
        }
        console.log(profile.filter(x=>x.empId === uid), uid)
        dispatch({type:FETCH_PROFILE,profilelist:profile.filter(x=>x.empId === uid),userId:uid,Token:token})
    }
}

export const logout=()=>{
    return{type:LOG_OUT}
}