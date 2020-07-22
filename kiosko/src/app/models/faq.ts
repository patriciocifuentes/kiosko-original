export class faq{
    
    private _id : number;
    private _alt_id : number;
    private _question : string;
    private _title : string;
    private _answer : string;
    private _url_video : string;
    private _url_image : string;

    constructor(){

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

    public get question() : string {
        return this._question;
    }
    public set question(new_question : string) {
        this._question = new_question;
    }

    public get title() : string {
        return this._title;
    }
    public set title(new_title : string) {
        this._title = new_title;
    }

    public get answer() : string {
        return this._answer;
    }
    public set answer(new_answer : string) {
        this._answer = new_answer;
    }

    public get url_video() : string {
        return this._url_image;
    }
    public set url_video(new_url_video : string) {
        this._url_video = new_url_video;
    }

    public get url_image() : string {
        return this._url_image;
    }
    public set url_image(new_url_image : string) {
        this._url_image = new_url_image;
    }
}