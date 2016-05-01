import {Injectable} from "angular2/core";
import {Http, Response,Headers} from "angular2/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ColorsService  {
    
    private colors:string[];

    constructor(private http:Http) {
        this.colors = [];
        let data = this.http.get("/colors").map(response => response.json());
        data.subscribe(data => {
            this.colors.splice(0);
            data.forEach((color)=>{
                this.colors.push(color);
            });
        });
    }
    
    addColor(color:string) {
        //this.colors.push(color);
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let postData = JSON.stringify({color:color});
        let data = this.http.post("/colors",postData,{headers:headers}).map(response => response.json());
        data.subscribe(data => {
            this.colors.splice(0);
            data.forEach((color)=>{
                this.colors.push(color);
            });
        });
    }
    
    getColors(){
        return this.colors;
    }
}