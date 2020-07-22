export class check_detail {

    private _id : number;
    private _alt_id : number;
    private _id_check_header : number;
    private _id_product : number;
    private _id_service_type : number;
    private _id_discount : number;
    private _id_exoneration : number;
    private _price : number;
    private _quantity : number;
    private _status : number;
    private _father : number;

    constructor( new_id_check_header : number, new_id_product : number, new_id_service_type : number,
    new_id_discount : number, new_id_exoneration : number, new_price : number, new_quantity : number,
    new_status : number, new_father : number,) {
        this.id_check_header=new_id_check_header;
        this._id_product=new_id_product;
        this._id_service_type=new_id_service_type;
        this.id_discount=new_id_discount;
        this._id_exoneration=new_id_exoneration;
        this._price=new_price;
        this._quantity=new_quantity;
        this._status=new_status;
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

    
   
    public get id_check_header() : number {
        return this._id_check_header;
    }
    public set id_check_header(new_id_check_header : number) {
        this._id_check_header = new_id_check_header;
    }
    
    
    
    public get id_product() : number {
        return this._id_product;
    }
    public set id_product(new_id_product : number) {
        this._id_product = new_id_product;
    }

    
    
    public get id_service_type() : number {
        return this._id_service_type;
    }
    public set id_service_type(new_id_service_type : number) {
        this._id_service_type = new_id_service_type;
    }

    
    
    public get id_discount() : number {
        return this._id_discount;
    }
    public set id_discount(new_id_discount : number) {
        this._id_discount = new_id_discount;
    }

    
    
    public get id_exoneration() : number {
        return this._id_exoneration;
    }
    public set id_exoneration(new_id_exoneration : number) {
        this._id_exoneration = new_id_exoneration;
    }

    
    
    public get price() : number {
        return this._price;
    }
    public set price(new_price : number) {
        this._price = new_price;
    }

    
    
    public get quantity() : number {
        return this._quantity;
    }
    public set quantity(new_quantity : number) {
        this._quantity = new_quantity;
    }

    
    
    public get status() : number {
        return this._status;
    }
    public set status(new_status : number) {
        this._status = new_status;
    }

    
    
    public get father() : number {
        return this._father;
    }
    public set father(new_father : number) {
        this._father = new_father;
    }
    

    
    
    
    
    


    

    
}