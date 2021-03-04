
class MessageModel {
    constructor(id,comapanyid,DepId,senderName,message,date,senderId){
        this.id=id
        this.companyid = comapanyid;
        this.DepId = DepId;
        this.senderName = senderName
        this.message = message;
        this.date = date;
        this.senderId = this.senderId;
    }
}
export default MessageModel
