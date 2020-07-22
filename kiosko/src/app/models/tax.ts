export class tax{
    
    private _id : number;
    private _alt_id : number;
    private _name : string;
    private _percentage : number;

    constructor(new_name: string, new_percentage: number){
        this._name=new_name;
        this._percentage=new_percentage;
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

    public get percentage() : number {
        return this._percentage;
    }
    public set percentage(new_percentage : number) {
        this._percentage = new_percentage;
    }
    
}