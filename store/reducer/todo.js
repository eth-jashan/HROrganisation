import TodoModel from "../../model/TodoModel"
import { FETCH_COMP } from "../action/registrationlist"
import { CREATE_TODO, FETCH_TODO } from "../action/todo"

const initialState={
    todoList:[]
}

export default todohandler=(state=initialState,action)=>{
    switch(action.type){
        case CREATE_TODO:
            const newtodo=new TodoModel(
                action.tododata.id,
                action.tododata.title,
                action.tododata.description,
                action.tododata.role,
                action.tododata.settime,
                action.tododata.duetime
            )
            return{
                ...state,
                todoList:state.todoList.concat(newtodo)
            }
        case FETCH_TODO:
            return{
                ...state,
                todoList:action.fetchlist
            }
    }
}