export class client{
    
    private _id : number;
    private _alt_id : number;
    private _id_identification_type : number;
    private _id_tax : number;
    private _name : string;
    private _lastname : string;
    private _identification : string;
    private _email : string;
    private _phone_number : string;
    private _address : string;
    private _status : string;
    private _company_name : string;
    private _exoneration_document_legal_number : string;
    private _exoneration_document_legal_emision_date : any;
    private _reduce_rate_percentage : number;

    constructor(new_identification_type: number, new_id_tax: number, new_name: string, new_lastname: string, new_identification: string, new_email: string, new_phone_number: string,
    new_address: string, new_status: string, new_company_name: string, new_exoneration_document_legal_number: string, new_exoneration_document_legal_emision_date: any, new_reduce_percentage: number) {
        
        this._id_identification_type=new_identification_type;
        this._id_tax= new_id_tax;
        this._name= new_name;
        this._lastname=new_lastname;
        this._identification=new_identification;
        this._email=new_email;
        this._phone_number=new_phone_number;
        this._address=new_address;
        this._status= new_status;
        this._company_name= new_company_name;
        this._exoneration_document_legal_number= new_exoneration_document_legal_number;
        this._exoneration_document_legal_emision_date= new_exoneration_document_legal_emision_date;
        this._reduce_rate_percentage= new_reduce_percentage;

    }

    public get id() : number {
        return this._id;
    }
    public set id(new_id: number) {
        this._id = new_id;
    }

    public get alt_id() : number {
        return this._alt_id;
    }
    public set alt_id(new_alt_id : number) {
        this._alt_id = new_alt_id;
    }

    public get id_identification_type() : number {
        return this._id_identification_type;
    }
    public set id_identification_type(new_id_identification_type: number) {
        this._id_identification_type = new_id_identification_type;
    }

    public get id_tax() : number {
        return this._id_tax;
    }
    public set id_tax(new_id_tax: number) {
        this._id_tax = new_id_tax;
    }

    public get name() : string {
        return this._name;
    }
    public set name(new_name : string) {
        this._name = new_name;
    }

    public get lastname() : string {
        return this._lastname;
    }
    public set lastname(new_lastname : string) {
        this._lastname = new_lastname;
    }
    
    public get identification() : string {
        return this._identification;
    }
    public set identification(new_identification : string) {
        this._identification = new_identification;
    }

    public get email() : string {
        return this._email;
    }
    public set email(new_email : string) {
        this._email = new_email;
    }

    public get phone_number() : string {
        return this._phone_number;
    }
    public set phone_number(new_phone_number : string) {
        this._phone_number = new_phone_number;
    }

    public get address() : string {
        return this._address;
    }
    public set address(new_address : string) {
        this._address = new_address;
    }

    public get status() : string {
        return this._status;
    }
    public set status(new_status : string) {
        this._status = new_status;
    }

    public get exoneration_document_legal_number() : string {
        return this._exoneration_document_legal_number;
    }
    public set exoneration_document_legal_number(new_exoneration_document_legal_number : string) {
        this._exoneration_document_legal_number = new_exoneration_document_legal_number;
    }

    public get exoneration_document_legal_emision_date() : any {
        return this._exoneration_document_legal_emision_date;
    }
    public set exoneration_document_legal_emision_date(new_exoneration_document_legal_emision_date : any) {
        this._exoneration_document_legal_emision_date = new_exoneration_document_legal_emision_date;
    }

    public get reduce_rate_percentage() : number {
        return this._reduce_rate_percentage;
    }
    public set reduce_rate_percentage(new_reduce_rate_percentage : number) {
        this._reduce_rate_percentage = new_reduce_rate_percentage;
    }




    
}