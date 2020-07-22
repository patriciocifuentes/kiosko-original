export class license_plan{
    
    private _id : number;
    private _alt_id : number;
    private _amount : number;
    private _description : string;

    constructor(new_amount: number, new_description:string){
        this._amount=new_amount;
        this._description=new_description;
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

    public get amount() : number {
        return this._amount;
    }
    public set amount(new_amount : number) {
        this._amount = new_amount;
    }

    public get description() : string {
        return this._description;
    }
    public set description(new_description : string) {
        this._description = new_description;
    }
    
}