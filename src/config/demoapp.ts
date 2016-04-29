import {Component} from "angular2/core";

@Component({
    selector: "app",
    template: `
    <div align="center"><span [style.color] = "color"><h1>{{title}}</h1></span></div>
    
    `
})

export class Demo_App {
    
    private title:string;
    private color:string;
    
    constructor() {
        this.title = "Angular2 Demo Application";
        this.color = "red";
        setInterval(()=>{
           
           if (this.title === "Angular2 Demo Application" ) {
               this.title = "This title changes every 2 seconds";
               this.color = "blue";
           } else {
               this.title = "Angular2 Demo Application";
               this.color = "red";
           }
            
        }, 2000);
    }
}