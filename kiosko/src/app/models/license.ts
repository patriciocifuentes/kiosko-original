export class license{
    
    private _id : number;
    private _alt_id : number;
    private _id_license_status : number;
    private _id_license_plan : number;
    private _api_key : string;
    private _pay_date : any;
    private _expiration_date : any;

    constructor(new_id_license_status: number, new_id_license_plan: number, new_api_key: string, new_pay_date: any, new_expiration_date: any){
        this._id_license_status=new_id_license_status;
        this._id_license_plan=new_id_license_plan;
        this._api_key=new_api_key;
        this._pay_date=new_pay_date;
        this._expiration_date=new_expiration_date;
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

    public get id_license_status() : number {
        return this._id_license_status;
    }
    public set id_license_status(new_id_license_status : number) {
        this.id_license_status = new_id_license_status;
    }

    public get id_license_plan() : number {
        return this._id_license_plan;
    }
    public set id_license_plan(new_id_license_plan : number) {
        this._id_license_plan = new_id_license_plan;
    }
    
    public get api_key() : string {
        return this._api_key;
    }
    public set api_key(new_id_license_plan : string) {
        this._api_key = new_id_license_plan;
    }

    public get pay_date() : any {
        return this._pay_date;
    }
    public set pay_date(new_pay_date : any) {
        this._pay_date = new_pay_date;
    }

    public get expiration_date() : any {
        return this._expiration_date;
    }
    public set value(new_expiration_date : any) {
        this._expiration_date = new_expiration_date;
    }
}