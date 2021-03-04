import MessageModel from '../../model/MessageModel';
import { CREATE_MESSAGE, FETCH_MESSAGE } from '../action/message';

const initialState = {
    message:[]
};

export default (state=initialState,action)=>{
    switch(action.type){
        case CREATE_MESSAGE:
            const newMessage = new MessageModel(
                action.messageData.id,
                action.messageData.companyid,
                action.messageData.DepId,
                action.messageData.senderName,
                action.messageData.message,
                new Date(),
                action.messageData.senderId
            )
            return{
                ...state,
                message:newMessage
            }
        case FETCH_MESSAGE:
            return{
                ...state,
                message:action.message
            }
        default: return state;
    }
}