export class license_payment{
    
    private _id : number;
    private _alt_id : number;
    private _id_license : number;
    private _pay_date : any;

    constructor(new_id_license: number, new_pay_date: any){
        this._id_license=new_id_license;
        this._pay_date=new_pay_date;
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

    public get id_license() : number {
        return this._id_license;
    }
    public set id_license(new_id_license : number) {
        this._id_license = new_id_license;
    }

    public get pay_date() : any {
        return this._pay_date;
    }
    public set pay_date(new_pay_date : any) {
        this._pay_date = new_pay_date;
    }
    
}