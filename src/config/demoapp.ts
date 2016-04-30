import {Component} from "angular2/core";
import {TwoWayBinding} from "../demo_components/twoWayBinding";
import {DataFlow} from "../demo_components/dataFlow";

@Component({
    selector: "app",
    template: `
        <div align="center"><span [style.color] = "color"><h1>{{title}}</h1></span></div>
        
        <!-- Component Examples -->
        <two-way></two-way>
        <data-flow [dataToChild] = "dataToChild" (childDataChange) = updateDataFromChild($event)></data-flow><br/>
        <div align = "center"><span>Data from child: {{dataFromChild}}</span></div>
        
        <!-- Directive Examples -->
    `,
    directives: [TwoWayBinding,DataFlow]
})

export class Demo_App {
    
    private title:string;
    private color:string;
    private dataToChild:string;
    private dataFromChild:string;
    
    constructor() {
        this.title = "Angular2 Demo Application";
        this.color = "red";
        this.dataToChild = "Hello from parent";
        this.dataFromChild = "No data yet";
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
    
    updateDataFromChild(data){
       this.dataFromChild = data; 
    }
}