export class company{
    private _id : number;
    private _alt_id : number;
    private _name : string;
    private _phone_number : string;
    private _email : string;
    private _status : string;
    private _address : string;


    constructor(new_name: string){
        this._name=new_name;
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

    public get name() : string {
        return this._name;
    }
    public set name(new_name : string) {
        this._name = new_name;
    }

    public get phone_number() : string {
        return this._phone_number;
    }
    public set phone_number(new_phone_number: string) {
        this._phone_number = new_phone_number;
    }

    public get email() : string {
        return this._email;
    }
    public set email(new_email: string) {
        this._email= new_email;
    }

    public get status() : string {
        return this._status;
    }
    public set status(new_status : string) {
        this._status = new_status;
    }

    public get address() : string {
        return this._address;
    }
    public set address(new_address : string) {
        this._address = new_address;
    }
}