export class cashier_transaction_logbook{
    
    private _id : number;
    private _alt_id : number;
    private _id_cashier_control : number;
    private _id_cashier_transaction_type : number;
    private _id_user : number;
    private _amount : number;
    private _date : any;
    private _description : string;

    constructor(new_id_cashier_control:number, new_id_cashier_transaction_type:number, new_id_user:number, new_amount:number, new_date:any, new_description:string){
        this._id_cashier_control=new_id_cashier_control;
        this._id_cashier_transaction_type=new_id_cashier_transaction_type;
        this._id_user=new_id_user;
        this._amount=new_amount;
        this._date=new_date;
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

    public get id_cashier_control() : number {
        return this._id_cashier_control;
    }
    public set id_cashier_control(new_id_cashier_control : number) {
        this._id_cashier_control = new_id_cashier_control;
    }

    public get id_cashier_transaction_type() : number {
        return this._id_cashier_transaction_type;
    }
    public set id_cashier_transaction_type(new_id_cashier_transaction_type : number) {
        this._id_cashier_transaction_type = new_id_cashier_transaction_type;
    }

    public get id_user() : number {
        return this._id_user;
    }
    public set id_user(new_id_user : number) {
        this._id_user = new_id_user;
    }

    public get amount() : number {
        return this._amount;
    }
    public set amount(new_amount : number) {
        this._amount = new_amount;
    }

    public get date() : any {
        return this._date;
    }
    public set date(new_date : any) {
        this._date = new_date;
    }

    public get description() : string {
        return this._description;
    }
    public set description(new_description : string) {
        this._description = new_description;
    }    
}