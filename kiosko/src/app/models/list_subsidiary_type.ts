export class list_subsidiary_type{
    
    private _id : number;
    private _alt_id : number;
    private _id_subsidiary : number;
    private _id_subsidiary_type : number;

    constructor(new_id_subsidiary:number, new_id_subsidiary_type:number){
        this._id_subsidiary=new_id_subsidiary;
        this._id_subsidiary_type=new_id_subsidiary_type;
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

    public get id_subsidiary() : number {
        return this._id_subsidiary;
    }
    public set id_subsidiary(new_id_subsidiary: number) {
        this._id_subsidiary = new_id_subsidiary;
    }

    public get id_subsidiary_type() : number {
        return this._id_subsidiary_type;
    }
    public set id_subsidiary_type(new_id_subsidiary_type : number) {
        this._id_subsidiary_type = new_id_subsidiary_type;
    }


    
}