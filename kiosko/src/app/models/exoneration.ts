export class exoneration{
    
    private _id : number;
    private _alt_id : number;
    private _description : string;
    private _hacienda_id : number;

    constructor(new_description: string, new_hacienda_id: number){
        this._description=new_description;
        this._hacienda_id= new_hacienda_id;
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

    public get description() : string {
        return this._description;
    }
    public set description(new_description : string) {
        this._description = new_description;
    }

    public get hacienda_id() : number {
        return this._hacienda_id;
    }
    public set hacienda_id(new_hacienda_id : number) {
        this._hacienda_id = new_hacienda_id;
    }
    
}