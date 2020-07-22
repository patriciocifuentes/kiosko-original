export class user_action_logbook{
    
    private _id : number;
    private _alt_id : number;
    private _id_user : number;
    private _id_action_logbook_type : number;
    private _description: string;
    private _date : any;

    constructor(new_id_user:number, new_id_action_logbook_type:number, new_description:string, new_date:any){
        this._id_user=new_id_user;
        this._id_action_logbook_type=new_id_action_logbook_type;
        this._description=new_description;
        this._date=new_date;
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

    public get id_action_logbook_type() : number {
        return this._id_action_logbook_type;
    }
    public set id_action_logbook_type(new_id_action_logbook_type : number) {
        this._id_action_logbook_type = new_id_action_logbook_type;
    }

    public get description() : string {
        return this._description;
    }
    public set description(new_description : string) {
        this._description = new_description;
    }

    public get date() : any {
        return this._date;
    }
    public set date(new_date : any) {
        this._date = new_date;
    }
    
}