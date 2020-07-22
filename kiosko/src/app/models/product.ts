export class Product{
    
    private _id : number;
    private _alt_id : number;
    private _id_tax : number;
    private _id_hacienda : number;
    private _id_discount : number;
    private _barcode : string;
    private _name : string;
    private _price : number;
    private _status : number;
    private _tax_percentage : number;
    private _father : number;

    constructor(new_id_tax: number, new_id_hacienda: number, new_id_discount: number, new_barcode: string,
        new_name: string, new_price: number, new_status: number, new_tax_percentage: number, new_father: number){
            this._id_tax= new_id_tax;
            this._id_hacienda= new_id_hacienda;
            this._id_discount=new_id_discount;
            this._barcode= new_barcode;
            this._name=new_name;
            this._price= new_price;
            this._status=new_status;
            this._tax_percentage=new_tax_percentage;
            this._father=new_father;

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

    public get id_hacienda() : number {
        return this._id_hacienda;
    }
    public set id_hacienda(new_id_hacienda : number) {
        this._id_hacienda = new_id_hacienda;
    }

    public get id_discount() : number {
        return this._id_discount;
    }
    public set id_discount(new_id_discount : number) {
        this._id_discount = new_id_discount;
    }

    public get barcode() : string {
        return this._barcode;
    }
    public set barcode(new_barcode : string) {
        this._barcode = new_barcode;
    }

    public get name() : string {
        return this._name;
    }
    public set name(new_name : string) {
        this._name = new_name;
    }
    
    public get price() : number {
        return this._price;
    }
    public set price(new_price : number) {
        this._price = new_price;
    }
    public get status() : number {
        return this._status;
    }
    public set status(new_status : number) {
        this._status = new_status;
    }
    public get tax_percentage() : number {
        return this._tax_percentage;
    }
    public set tax_percentage(new_tax_percentage : number) {
        this._tax_percentage= new_tax_percentage;
    }
    public get father() : number {
        return this._father;
    }
    public set father(new_father : number) {
        this._father = new_father;
    }
}