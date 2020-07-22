export class currency{
    
    private _id : number;
    private _alt_id : number;
    private _name : string;
    private _symbol : string;

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

    public get symbol() : string {
        return this._symbol;
    }
    public set symbol(new_symbol : string) {
        this._symbol = new_symbol;
    }
    
}