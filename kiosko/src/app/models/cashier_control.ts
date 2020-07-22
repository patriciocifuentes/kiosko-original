export class cashier_control{
    
    private _id : number;
    private _alt_id : number;
    private _id_user : number;
    private _id_cashier : number;
    private _open_date : any;
    private _closing_date : any;

    constructor(new_id_user: number, new_id_cashier: number, new_open_date: any, new_closing_date: any){
        this._id_user=new_id_user;
        this._id_cashier=new_id_cashier;
        this._open_date= new_open_date;
        this._closing_date= new_closing_date;
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

    public get id_user() : number {
        return this._id_user;
    }
    public set id_user(new_id_user : number) {
        this._id_user = new_id_user;
    }

    public get id_cashier() : number {
        return this._id_cashier;
    }
    public set id_cashier(new_id_cashier : number) {
        this._id_cashier = new_id_cashier;
    }

    public get open_date() : any {
        return this._open_date;
    }
    public set open_date(new_open_date : any) {
        this._open_date = new_open_date;
    }

    public get closing_date() : any {
        return this._closing_date;
    }
    public set closing_date(new_closing_date : any) {
        this._closing_date = new_closing_date;
    }
    
}