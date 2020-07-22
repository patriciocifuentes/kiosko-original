export class amount_cashier_control{
    
    private _id : number;
    private _alt_id : number;
    private _id_cashier_control : number;
    private _id_currency : number;
    private _open_amount : number;
    private _closing_amount : number;

    constructor(new_id_cashier_Control:number, new_id_currency:number, new_open_amount:number, new_closing_amount: number){
        this._id_cashier_control=new_id_cashier_Control;
        this._id_currency=new_id_currency;
        this._open_amount=new_open_amount;
        this._closing_amount=new_closing_amount;
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

    public get id_cashier_control() : number {
        return this._id_cashier_control;
    }
    public set id_cashier_control(new_id_cashier_Control : number) {
        this._id_cashier_control = new_id_cashier_Control;
    }

    public get id_currency() : number {
        return this._id_currency;
    }
    public set id_currency(new_id_currency : number) {
        this._id_currency = new_id_currency;
    }

    public get open_amount() : number {
        return this._open_amount;
    }
    public set open_amount(new_open_amount : number) {
        this._open_amount = new_open_amount;
    }

    public get closing_amount() : number {
        return this._closing_amount;
    }
    public set closing_amount(new_closing_amount : number) {
        this._closing_amount = new_closing_amount;
    }
}