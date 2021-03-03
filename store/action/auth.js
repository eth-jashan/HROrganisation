export const LOGIN='Login'

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