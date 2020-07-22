export class exchange_rate{
    
    private _id : number;
    private _alt_id : number;
    private _id_currency : number;
    private _amount : number;

    constructor(new_id_currency: number, new_amount: number){
        this._id_currency= new_id_currency;
        this.amount= new_amount;
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

    public get amount() : number {
        return this._amount;
    }
    public set amount(new_amount : number) {
        this._amount = new_amount;
    }
}
