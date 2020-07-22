export class check_payment_method {
    
    private _id : number;
    private _alt_id : number;
    private _id_payment_method : number;
    private _id_currency : number;
    private _id_check_header : number;
    private _amount : number;
    private _change : number;


    constructor(new_id_payment_method : number, new_id_currency : number, 
    new_id_check_header : number, new_amount : number, new_change : number,) {
        this.id_payment_method=new_id_payment_method;
        this.id_currency=new_id_currency;
        this._id_check_header=new_id_check_header;
        this._amount=new_amount;
        this._change=new_change;
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

    
    
    public get id_payment_method() : number {
        return this._id_payment_method;
    }
    public set id_payment_method(new_id_payment_method : number) {
        this._id_payment_method = new_id_payment_method;
    }

    
    
    public get id_currency() : number {
        return this._id_currency;
    }
    public set id_currency(new_id_currency : number) {
        this._id_currency = new_id_currency;
    }

    
    
    public get id_check_header() : number {
        return this._id_check_header;
    }
    public set id_check_header(new_id_check_header : number) {
        this._id_check_header = new_id_check_header;
    }

    
    
    public get amount() : number {
        return this._amount;
    }
    public set amount(new_amount : number) {
        this._amount = new_amount;
    }

    
    
    public get change() : number {
        return this._change;
    }
    public set change(new_change : number) {
        this._change = new_change;
    }

}