export class service_tax{
    private _id : number;
    private _alt_id : number;
    private _id_tax : number;
    private _id_service_type : number;

    constructor(new_id_tax: number, new_id_service_type:number){
        this._id_tax=new_id_tax;
        this._id_service_type=new_id_service_type;
    }

    public get id() : number {
        return this._id;
    }
    public set id(new_id : number) {
        this._id = new_id;
    }
    
    public get alt_id() : number {
        return this._alt_id;
    }
    public set alt_id(new_alt_id : number) {
        this._alt_id = new_alt_id;
    }

    public get id_tax() : number {
        return this._id_tax;
    }
    public set id_tax(new_id_tax : number) {
        this._id_tax = new_id_tax;
    }

    public get id_service_type() : number {
        return this._id_service_type;
    }
    public set id_service_type(new_id_service_type : number) {
        this._id_service_type = new_id_service_type;
    }

}