import TodoModel from "../../model/TodoModel"

export const CREATE_TODO='Create_todo'
export const FETCH_TODO='Fetch_todo'

export const createtodo=(title,description,role,settime,duetime,cmpid,depid)=>{
    return async dispatch=>{
        const response=await fetch(`https://customerapp-2cd9c.firebaseio.com/${cmpid}/todo/${depid}`,{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({
                Title:title,
                Description:description,
                Role:role,
                Settime:settime,
                DueTime:duetime
            })

        })
        const resData=await response.json()
        dispatch({type:CREATE_TODO,tododata:{
            id:resData.name,
            title:title,
            description:description,
            role:role,
            settime:settime,
            duetime:duetime
        }})
    }
}

export const fetchtodo=()=>{
    return async dispatch=>{
        const response=await fetch(`https://customerapp-2cd9c.firebaseio.com/${cmpid}/todo/${depid}`)
        let todolist=[]
        const resData=await response.json()
        for(const key in resData){
            todolist.push(new TodoModel(key,resData[key].Title,
                resData[key].Description,
                resData[key].Role,
                resData[key].Settime,
                resData[key].DueTime))
        }
        dispatch({type:FETCH_TODO,fetchlist:todolist})
    }
}