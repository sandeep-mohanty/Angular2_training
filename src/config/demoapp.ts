import {Component} from "angular2/core";
import {TwoWayBinding} from "../demo_components/twoWayBinding";
import {DataFlow} from "../demo_components/dataFlow";
import {AttributeDirectivesBuiltin} from "../demo_components/attributeDirectivesBuiltin";
import {StructuralDirectivesBuiltin} from "../demo_components/structuralDirectivesBuiltin";
import {AttributeDirectivesCustom} from "../demo_components/attributeDirectivesCustom";
import {StructuralDirectivesCustom} from "../demo_components/structuralDirectivesCustom";
import {ParentComponentForService} from "../demo_components/components_for_services/parentComponentForService";

@Component({
    selector: "app",
    template: `
        <div align="center"><span [style.color] = "color"><h1>{{title}}</h1></span></div>
        
        <!-- Component Examples -->
        <two-way></two-way>
        <data-flow [dataToChild] = "dataToChild" (childDataChange) = updateDataFromChild($event)></data-flow><br/>
        <!--<div align = "center"><span>Data from child: {{dataFromChild}}</span></div>-->
        
        <!-- Directive Examples -->
        <attribute-directives-builtin></attribute-directives-builtin>
        <structural-directives-builtin></structural-directives-builtin>
        <attribute-directives-custom></attribute-directives-custom>
        <structural-directives-custom></structural-directives-custom>
        <parent-component-for-service></parent-component-for-service>
    `,
    //directives: [TwoWayBinding,DataFlow,AttributeDirectivesBuiltin]
    //directives: [AttributeDirectivesBuiltin, StructuralDirectivesBuiltin,AttributeDirectivesCustom,StructuralDirectivesCustom]
    directives: [ParentComponentForService]
})

export class Demo_App {
    
    private title:string;
    private color:string;
    private dataToChild:string;
    private dataFromChild:string;
    
    constructor() {
        this.title = "Angular2 Demo Application";
        this.color = "blue";
        this.dataToChild = "Hello from parent";
        this.dataFromChild = "No data yet";
        /*setInterval(()=>{
           
           if (this.title === "Angular2 Demo Application" ) {
               this.title = "This title changes every 2 seconds";
               this.color = "blue";
           } else {
               this.title = "Angular2 Demo Application";
               this.color = "red";
           }
            
        }, 2000);*/
    }
    
    updateDataFromChild(data){
       this.dataFromChild = data; 
    }
}