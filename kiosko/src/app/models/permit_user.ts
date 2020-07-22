export class permit_user{
    
    private _id : number;
    private _alt_id : number;
    private _id_user : number;
    private _id_module : number;
    private _create_ : number;
    private _delete_ : number;
    private _update_ : number;
    private _read_ : number;

    constructor(new_id_user:number, new_id_module:number, new_create_:number, new_delete_:number, new_update_:number, new_read_:number){
        this._id_user=new_id_user;
        this._id_module=new_id_module;
        this._create_=new_create_;
        this._delete_=new_delete_;
        this._update_=new_update_;
        this._read_=new_read_;
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

    public get id_module() : number {
        return this._id_module;
    }
    public set id_module(new_id_module : number) {
        this._id_module = new_id_module;
    }

    public get create_() : number {
        return this._create_;
    }
    public set create_(new_create_ : number) {
        this._create_ = new_create_;
    }

    public get delete_() : number {
        return this._delete_;
    }
    public set delete_(new_delete_ : number) {
        this._delete_ = new_delete_;
    }

    public get update_() : number {
        return this._update_;
    }
    public set update_(new_update_ : number) {
        this._update_ = new_update_;
    }

    public get read_() : number {
        return this._read_;
    }
    public set read_(new_read_ : number) {
        this._read_ = new_read_;
    }
    
}