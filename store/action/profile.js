export const LOGIN='Login'
export const LOG_OUT='Log-out'
export const CREATE_ACCOUNT='Sign-Up'
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
        dispatch({type : LOGIN_ACCOUNT, token : resData.idToken, userId : resData.localId })
    }
}

export const signup=( DepId, CompId, name, number, email,age,password)=>{
    return async(dispatch, getState)=>{
        const response1=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD5F91cUBTP4erSBrU4ZDz5HMRcP_ONY68',{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body:({
                email:email,
                password:password,
                returnSecureToken : true
            })
        })
        const resData1=await response1.json();
        const uid=resData1.name;

        const response2=await fetch(`https://customerapp-2cd9c.firebaseio.com/${uid}/employer.json?`,{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body:({
                EmpId:resData1.name,
                DepId:DepId,
                CompId:CompId,
                Name:name,
                Number:number,
                Age:age,
                email:email
            })
        })
        const resData2=await response2.json();
        dispatch({type:CREATE_ACCOUNT,token : resData1.idToken, userId : resData1.localId,detailslist:{
            id:resData2.name,
            depid:DepId,
            compid:CompId,
            Name:name,
            Number:number,
            Age:age,
            email:email
        }})

    }
}

export const logout=()=>{
    return{type:LOG_OUT}
}