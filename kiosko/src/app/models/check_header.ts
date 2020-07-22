export class check_header {

    private _id : number;
    private _alt_id : number;
    private _check_number : number;
    private _id_document_type : number;
    private _id_identification_type : number;
    private _id_service_type : number;
    private _id_user : number;
    private _id_status_check_header : number;
    private _id_cashier_control : number;
    private _id_subsidiary : number;
    private _id_client : number;
    private _id_discount : number;
    private _id_exchange_rate : number;
    private _id_exoneration : number;
    private _client_name : string;
    private _status : number;
    private _email : string;
    private _date : any;
    private _comments : string;
    private _check_name : string;
    private _hacienda_consecutive : string;
    private _hacienda_key : string;

  


    constructor( new_check_number : number, new_id_document_type : number, new_id_identification_type : number,
    new_id_service_type : number, new_id_user : number, new_id_status_check_header : number,
    new_id_cashier_control : number, new_id_subsidiary : number, new_id_client : number,
    new_id_discount : number, new_id_exchange_rate : number, new_id_exoneration : number,
    new_client_name : string, new_status : number, new_email : string,
    new_date : any, new_comments : string, new_check_name : string,
    new_hacienda_consecutive : string, new_hacienda_key : string,) {
        this._check_number=new_check_number;
        this._id_document_type= new_id_document_type;
        this._id_identification_type=new_id_identification_type;
        this._id_service_type=new_id_service_type;
        this._id_user=new_id_user;
        this._id_status_check_header=new_id_status_check_header;
        this.id_cashier_control=new_id_cashier_control;
        this._id_subsidiary=new_id_subsidiary;
        this._id_client=new_id_client;
        this._id_discount=new_id_discount;
        this._id_exchange_rate=new_id_exchange_rate;
        this._id_exoneration=new_id_exoneration;
        this._client_name=new_client_name;
        this._status=new_status;
        this._email=new_email; 
        this._date=new_date; 
        this._comments=new_comments; 
        this._check_name=new_check_name;
        this._hacienda_consecutive=new_hacienda_consecutive;
        this._hacienda_key=new_hacienda_key;
        
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

    
    
    public get check_number() : number {
        return this._check_number;
    }
    public set check_number(new_check_number : number) {
        this._check_number = new_check_number;
    }

    
    
    public get id_document_type() : number {
        return this._id_document_type;
    }
    public set id_document_type(new_id_document_type : number) {
        this._id_document_type = new_id_document_type;
    }

    
    
    public get id_identification() : number {
        return this._id_identification_type;
    }
    public set id_identification(new_id_identification_type : number) {
        this._id_identification_type = new_id_identification_type;
    }

    
    
    public get id_service_type() : number {
        return this._id_service_type;
    }
    public set id_service_type(new_id_service_type : number) {
        this._id_service_type = new_id_service_type;
    }
    
    
    
    public get id_user() : number {
        return this._id_user;
    }
    public set id_user(new_id_user : number) {
        this._id_user = new_id_user;
    }

    
    
    public get id_status_check_header() : number {
        return this._id_status_check_header;
    }
    public set id_status_check_header(new_id_status_check_header : number) {
        this._id_status_check_header = new_id_status_check_header;
    }
    
    
    
    public get id_cashier_control() : number {
        return this._id_cashier_control;
    }
    public set id_cashier_control(new_id_cashier_control : number) {
        this._id_cashier_control = new_id_cashier_control;
    }

    
    
    public get id_subsidiary() : number {
        return this._id_subsidiary;
    }
    public set id_subsidiary(new_id_subsidiary : number) {
        this._id_subsidiary = new_id_subsidiary;
    }

    
    
    public get id_client() : number {
        return this._id_client;
    }
    public set id_client(new_id_client : number) {
        this._id_client = new_id_client;
    }

    
    
    public get id_discount() : number {
        return this._id_discount;
    }
    public set id_discount(new_id_discount : number) {
        this._id_discount = new_id_discount;
    }

    
    
    public get id_exchange_rate() : number {
        return this._id_exchange_rate;
    }
    public set id_exchange_rate(new_id_exchange_rate : number) {
        this._id_exchange_rate = new_id_exchange_rate;
    }

    
    
    public get id_exoneration() : number {
        return this._id_exoneration;
    }
    public set id_exoneration(new_id_exoneration : number) {
        this._id_exoneration = new_id_exoneration;
    }

    
    
    public get client_name() : string {
        return this._client_name;
    }
    public set client_name(new_client_name : string) {
        this._client_name = new_client_name;
    }

    
    
    public get status() : number {
        return this._status;
    }
    public set status(new_status : number) {
        this._status = new_status;
    }

    
    
    public get email() : string {
        return this._email;
    }
    public set email(new_email : string) {
        this._email = new_email;
    }

    
    
    public get date() : any {
        return this._date;
    }
    public set date(new_date : any) {
        this._date = new_date;
    }

    
    
    public get comments() : string {
        return this._comments;
    }
    public set comments(new_comments : string) {
        this._comments = new_comments;
    }

    
    
    public get check_name() : string {
        return this._check_name;
    }
    public set check_name(new_check_name : string) {
        this._check_name = new_check_name;
    }

    
    
    public get hacienda_consecutive() : string {
        return this._hacienda_consecutive;
    }
    public set hacienda_consecutive(new_hacienda_consecutive : string) {
        this._hacienda_consecutive = new_hacienda_consecutive;
    }

    
    
    public get hacienda_key() : string {
        return this._hacienda_key;
    }
    public set hacienda_key(new_hacienda_key : string) {
        this._hacienda_key = new_hacienda_key;
    }
     
}