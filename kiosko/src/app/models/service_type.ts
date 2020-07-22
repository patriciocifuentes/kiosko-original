export class service_type{
    private _id: number;
    private _alt_id: number;
    private _name: string;

    constructor(new_name: string){
        this._name=new_name;
    }
    // set y get de id
    get id() : number {
        return this._id;
    }

    //new_id es la variable que viene con el valor a guardar en el objeto como id
    set id(new_id: number) {
        this._id = new_id;
    }

    //set y get de alt_id
    get alt_id() : number{
        return this._alt_id;
    }

    //new_alt_id es la variable que viene con el valor a guardar en el objeto como alt_id
    set alt_id(new_alt_id : number) {
        this._alt_id = new_alt_id;
    }

    //set y get de name
    get name() : string{
        return this._name;
    }
    //new_alt_id es la variable que viene con el valor a guardar en el objeto como name
    set name(new_name : string) {
        this._name = new_name;
    }
    
    
    
}