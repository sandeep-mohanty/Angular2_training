import {Component, EventEmitter} from "angular2/core";

@Component({
    
    selector: "data-flow",
    templateUrl: "../../assets/templates/demo_components/dataFlow.html",
    inputs: ["dataFromParent:dataToChild"],
    outputs: ["childDataChange"]
})

export class DataFlow {
    
    private dataFromParent:string;
    private childDataChange:EventEmitter<string>;
    private myData:string;
    
    constructor(){
        this.childDataChange = new EventEmitter<string>();
        this.myData = "Child Component Data"
    }
    
    private updateData(data){
        this.myData = data;
        this.childDataChange.emit(this.myData + " from child");
    }
}