export class cashier{
    
    private _id : number;
    private _alt_id : number;
    private _id_subsidiary : number;
    private _name : string;
    private _terminal : number;
    private _status : number;

    constructor(new_id_subsidiary: number, new_name:string, new_terminal:number, new_status: number){
        this._id_subsidiary= new_id_subsidiary;
        this._name=new_name;
        this._terminal=new_terminal;
        this._status=new_status;
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

    public get id_subsidiary() : number {
        return this._id_subsidiary;
    }
    public set id_subsidiary(new_id_subsidiary : number) {
        this._id_subsidiary = new_id_subsidiary;
    }

    public get name() : string {
        return this._name;
    }
    public set name(new_name : string) {
        this._name = new_name;
    }

    public get terminal() : number {
        return this._terminal;
    }
    public set terminal(new_terminal : number) {
        this._terminal = new_terminal;
    }

    public get status() : number {
        return this._status;
    }
    public set status(new_status : number) {
        this._status = new_status;
    }
}