export class check_detail_modifier{
    
    private _id : number;
    private _alt_id : number;
    private _id_modifier : number;
    private _id_check_detail : number;

    constructor(new_id_modifier: number, new_id_check_detail: number){
        this._id_modifier= new_id_modifier;
        this._id_check_detail = new_id_check_detail;
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

    public get id_modifier() : number {
        return this._id_modifier;
    }
    public set id_modifier(new_id_modifier : number) {
        this._id_modifier = new_id_modifier;
    }


    public get id_check_detail() : number {
        return this._id_check_detail;
    }
    public set id_check_detail(new_id_check_detail : number) {
        this._id_check_detail = new_id_check_detail;
    }

}