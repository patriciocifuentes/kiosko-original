export class check_detail_tax{
    
    private _id : number;
    private _alt_id : number;
    private _id_tax : number;
    private _id_check_detail : number;
    private _percentage : number;
    private _status : number;

    constructor(new_id_tax: number, new_id_check_detail: number, new_percentage:number, new_status: number){
        this._id_tax=new_id_tax;
        this._id_check_detail=new_id_check_detail;
        this._percentage=new_percentage;
        this._status=new_percentage;
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

    public get id_tax() : number {
        return this._id_tax;
    }
    public set id_tax(new_id_tax : number) {
        this._id_tax = new_id_tax;
    }

    public get id_check_detail() : number {
        return this._id_check_detail;
    }
    public set id_check_detail(new_id_check_detail : number) {
        this._id_check_detail = new_id_check_detail;
    }

    public get percentage() : number {
        return this._percentage;
    }
    public set percentage(new_percentage : number) {
        this._percentage = new_percentage;
    }

    public get status() : number {
        return this._status;
    }
    public set status(new_status : number) {
        this._status = new_status;
    }
    
}