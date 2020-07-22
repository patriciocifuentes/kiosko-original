export class cash_count{
    
    private _id : number;
    private _alt_id : number;
    private _id_cashier_control : number;
    private _amount : number;

    constructor(new_id_cashier_Control:number,new_amount:number){
        this._id_cashier_control=new_id_cashier_Control;
        this._amount=new_amount;
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

    public get amount() : number {
        return this._amount;
    }
    public set amount(new_amount : number) {
        this._amount = new_amount;
    }
    
}