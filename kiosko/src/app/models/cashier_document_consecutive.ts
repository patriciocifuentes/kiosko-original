export class cashier_document_consecutive{
    private _id : number;
    private _alt_id : number;
    private _id_cashier : number;
    private _id_document_type : number;
    private _consecutive : string;

    constructor(new_id_cashier:number, new_id_document_type:number, new_consecutive:string){
        this._id_cashier = new_id_cashier;
        this._id_document_type = new_id_document_type;
        this._consecutive = new_consecutive;
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

    public get id_cashier() : number {
        return this._id_cashier;
    }
    public set id_cashier(new_id_cashier : number) {
        this._id_cashier = new_id_cashier;
    }

    public get id_document_type() : number {
        return this._id_document_type;
    }
    public set id_document_type(new_id_document_type : number) {
        this._id_document_type = new_id_document_type;
    }

    public get consecutive() : string {
        return this._consecutive;
    }
    public set consecutive(new_consecutive : string) {
        this._consecutive = new_consecutive;
    }
}