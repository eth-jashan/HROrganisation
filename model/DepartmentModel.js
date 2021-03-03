class DepartmentModel {
    
    constructor(orgId,id,name,type, emailSlug){
        
        this.orgId = orgId
        this.id = id;
        this.name = name;
        this.type = type;
        this.emailSlug = emailSlug
    }
}
export default DepartmentModel;