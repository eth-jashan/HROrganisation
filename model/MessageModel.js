
class MessageModel {
    constructor(id,companyid,DepId,senderName,message,date,senderId){
        this.id=id
        this.companyid = companyid;
        this.DepId = DepId;
        this.senderName = senderName
        this.message = message;
        this.date = date;
        this.senderId = this.senderId;
    }
}
export default MessageModel
