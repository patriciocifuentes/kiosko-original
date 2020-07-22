export class subsidiary {
    private _id : number;
    private _alt_id : number;
    private _id_license : number;
    private _id_company : number;
    private _id_regime_type : number;
    private _id_identification_type : number;
    private _hacienda_subsidiary_number : number;
    private _name : string;
    private _address : string;
    private _phone_number : string;
    private _email : string;
    private _identification : string;
    private _description : string;
    private _note_check_footer : string;
    private _password : string;
    private _trade_name : string;
    private _status : string;

    constructor(new_id_license:number, new_id_company:number, new_id_regime_type:string,
    new_identification_type:string, new_hacienda_subsidiary_number:string, new_name:string, 
    new_address:string, new_phone_number:string, new_email:string, new_identification:string, 
    new_description:string, new_note_check_footer:string, new_password:string, new_trade_name:string, 
    new_status:string) {

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
    
    
    public get id_company() : number {
        return this._id_company;
    }
    public set id_company(new_id_company : number) {
        this._id_company = new_id_company;
    }
    
    
    
    public get id_regime_type() : number {
        return this._id_regime_type;
    }
    public set id_regime_type(new_id_regime_type : number) {
        this._id_regime_type = new_id_regime_type;
    }

    
    
    public get id_identification_type() : number {
        return this._id_identification_type;
    }
    public set id_identification_type(new_id_identification_type : number) {
        this._id_identification_type = new_id_identification_type;
    }

    
    
    public get hacienda_subsidiary_number() : number {
        return this._hacienda_subsidiary_number;
    }
    public set hacienda_subsidiary_number(new_hacienda_subsidiary_number : number) {
        this._hacienda_subsidiary_number = new_hacienda_subsidiary_number;
    }

    
    
    public get name() : string {
        return this._name;
    }
    public set name(new_name : string) {
        this._name = new_name;
    }

    
    
    public get address() : string {
        return this._address;
    }
    public set address(new_address : string) {
        this._address = new_address;
    }

    
    
    public get phone_number() : string {
        return this._phone_number;
    }
    public set phone_number(new_phone_number : string) {
        this._phone_number = new_phone_number;
    }

    
    
    public get email() : string {
        return this._email;
    }
    public set email(new_email : string) {
        this._email = new_email;
    }

    
    
    public get identification() : string {
        return this._identification;
    }
    public set identification(new_identification : string) {
        this._identification = new_identification;
    }
    
    
    
    public get description() : string {
        return this._description;
    }
    public set description(new_description : string) {
        this._description = new_description;
    }

    
    
    public get note_check_footer() : string {
        return this._note_check_footer;
    }
    public set note_check_footer(new_note_check_footer : string) {
        this._note_check_footer = new_note_check_footer;
    }

    
    
    public get password() : string {
        return this._password;
    }
    public set password(new_password : string) {
        this._password = new_password;
    }
    
    
    
    public get trade_name() : string {
        return this._trade_name;
    }
    public set trade_name(new_trade_name : string) {
        this._trade_name = new_trade_name;
    }

    
    
    public get status() : string {
        return this._status;
    }
    public set status(new_status : string) {
        this._status = new_status;
    }
    
}