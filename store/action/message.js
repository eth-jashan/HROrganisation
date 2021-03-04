import MessageModel from '../../model/MessageModel';

export const FETCH_MESSAGE = 'FETCH_MESSAGE';
export const CREATE_MESSAGE = 'CREATE_MESSAGE'

export const fetchMessage = (companyid,DepId) => {
    return async(dispatch,getState) => {
        const response = await fetch(`https://customerapp-2cd9c.firebaseio.com/${companyid}/chat/${DepId}.json`);
        const resData=await response.json()

        let message = []
        for(const key in resData){
            message.push(new MessageModel(resData[key].id,resData[key].companyid,
                resData[key].DepId,resData[key].senderName,resData[key].message,resData[key].date,resData[key].senderID))
        }
        console.log('message :',message)
        dispatch({type:FETCH_MESSAGE,message:message})
    }
}

export const createMessage = (companyid,DepId,senderName,message,date,senderId) => {
    return async(dispatch,getState) => {
        const token = getState().profile.token;
        const userId = getState().profile.userId;

        const response = await fetch(`https://customerapp-2cd9c.firebaseio.com/${companyid}/chat/${DepId}.json`,{
            method:'POST',
            header:{'Content-Type':'application/json'},
            body:JSON.stringify({
                id:userId,
                companyid,
                DepId,
                senderName,
                message,
                date,
                senderId
            })
        })
        const resData = await response.json();
        
        dispatch({
            type:CREATE_MESSAGE,
            messageData: {
                id:resData.name,
                companyid:companyid,
                DepId:DepId,
                senderName:senderName,
                message:message,
                date:date,
                senderId:senderId
            }
        })
    }
}
