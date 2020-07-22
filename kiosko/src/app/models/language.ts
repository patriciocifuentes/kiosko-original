export class language{
    
    private _id : number;
    private _alt_id : number;
    private _id_country : number;
    private _name : string;

    constructor(new_id_country:number, new_name:string){
        this._id_country=new_id_country;
        this._name=new_name;
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

    public get id_country() : number {
        return this._id_country;
    }
    public set id_country(new_id_country : number) {
        this._id_country = new_id_country;
    }

    public get name() : string {
        return this._name;
    }
    public set name(new_name : string) {
        this._name = new_name;
    }
    
}