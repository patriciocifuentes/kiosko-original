export class denomination{
    private _id : number;
    private _alt_id : number;
    private _id_currency : number;
    private _id_denomination_type : number;
    private _id_cash_count : number;
    private _name : string;
    private _quantity : number;

    constructor(new_id_currency:number, new_id_denomination_type:number, new_id_cash_count:number, new_name:string, new_quantity:number){
        this._id_currency=new_id_currency;
        this._id_denomination_type=new_id_denomination_type;
        this._id_cash_count=new_id_cash_count;
        this._name=new_name;
        this._quantity=new_quantity;
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

    public get id_currency() : number {
        return this._id_currency;
    }
    public set id_currency(new_id_currency : number) {
        this._id_currency = new_id_currency;
    }

    public get id_denomination_type() : number {
        return this._id_denomination_type;
    }
    public set id_denomination_type(new_id_denomination_type : number) {
        this._id_denomination_type = new_id_denomination_type;
    }

    public get id_cash_count() : number {
        return this._id_cash_count;
    }
    public set id_cash_count(new_id_cash_count : number) {
        this._id_cash_count= new_id_cash_count;
    }

    public get name() : string {
        return this._name;
    }
    public set name(new_name : string) {
        this._name = new_name;
    }
    

    public get quantity() : number {
        return this._quantity;
    }
    public set quantity(new_quantity : number) {
        this._quantity = new_quantity;
    }

}