export class discount {

    
    private _id : number;
    private _alt_id : number;
    private _name : string;
    private _percentage : number;
    private _description : string;
    private _start_date : any;
    private _final_date : any;
    private _permanent : number;
    private _status : number;
    private _monday : number;
    private _tuesday : number;
    private _wednesday : number;
    private _thursday : number;
    private _friday : number;
    private _saturday : number;
    private _sunday : number;

    
    constructor( new_name : string, new_percentage : number, new_description : string,
    new_start_date : any, new_final_date : any, new_permanent : number,
    new_status : number, new_monday : number, new_tuesday : number,
    new_wednesday : number, new_thursday : number, new_friday : number,
    new_saturday : number, new_sunday : number) {
        this._name=new_name;
        this._percentage=new_percentage;
        this._description=new_description;
        this._start_date=new_start_date;
        this.final_date=new_final_date;
        this._permanent=new_permanent;
        this._status=new_status;
        this._monday=new_monday;
        this._tuesday=new_tuesday;
        this._wednesday=new_wednesday;
        this._thursday=new_thursday;
        this._friday=new_friday;
        this._saturday=new_saturday;
        this._sunday=new_sunday;

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

    
    
    public get description() : string {
        return this._description;
    }
    public set description(new_description : string) {
        this._description = new_description;
    }
    
    
    
    public get start_date() : any {
        return this._start_date;
    }
    public set start_date(new_start_date : any) {
        this._start_date = new_start_date;
    }

    
    
    public get final_date() : any {
        return this._final_date;
    }
    public set final_date(new_final_date : any) {
        this._final_date = new_final_date;
    }

    
    
    public get permanent() : number {
        return this._permanent;
    }
    public set permanent(new_permanent : number) {
        this._permanent = new_permanent;
    }

    
    
    public get status() : number {
        return this._status;
    }
    public set status(new_status : number) {
        this._status = new_status;
    }

    
    
    public get monday() : number {
        return this._monday;
    }
    public set monday(new_monday : number) {
        this._monday = new_monday;
    }

    
    
    public get tuesday() : number {
        return this._tuesday;
    }
    public set tuesday(new_tuesday : number) {
        this._tuesday = new_tuesday;
    }
    
    
    public get wednesday() : number {
        return this._wednesday;
    }
    public set wednesday(new_wednesday : number) {
        this._wednesday = new_wednesday;
    }

    
    
    public get thursday() : number {
        return this._thursday;
    }
    public set thursday(new_thursday : number) {
        this._thursday = new_thursday;
    }

    
    
    public get friday() : number {
        return this._friday;
    }
    public set friday(new_friday : number) {
        this._friday = new_friday;
    }

    
    
    public get saturday() : number {
        return this._saturday;
    }
    public set saturday(new_saturday : number) {
        this._saturday = new_saturday;
    }

    
    
    public get sunday() : number {
        return this._sunday;
    }
    public set sunday(new_sunday : number) {
        this._sunday = new_sunday;
    }
    

}