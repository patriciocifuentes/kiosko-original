export class user {
    
    private _id : number;
    private _alt_id : number;
    private _id_subsidiary : number;
    private _pin : number;
    private _name : string;
    private _last_name : string;
    private _status : number;


    /**
     *
     */
    constructor(name:string, last_name:string ,pin:number) {
        this._name = name;
        this._last_name = last_name;
        this._pin = pin;
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

    public get pin() : number {
        return this._pin;
    }
    public set pin(new_pin : number) {
        this._pin = new_pin;
    }
    
    public get name() : string {
        return this._name;
    }
    public set name(new_name : string) {
        this._name = new_name;
    }
  
    public get last_name() : string {
        return this._last_name;
    }
    public set last_name(new_last_name : string) {
        this._last_name = new_last_name;
    }
     
    public get status() : number {
        return this._status;
    }
    public set status(new_status : number) {
        this._status = new_status;
    }

}