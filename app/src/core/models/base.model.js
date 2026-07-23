export class BaseModel{

    constructor(){

        this.id=crypto.randomUUID();

        this.createdAt=new Date().toISOString();

        this.updatedAt=new Date().toISOString();

        this.syncStatus="pending";

        this.deleted=false;

        this.version=1;

    }

}