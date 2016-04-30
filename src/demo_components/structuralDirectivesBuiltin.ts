import {Component} from "angular2/core";

@Component({
    selector: "structural-directives-builtin",
    templateUrl: "../../assets/templates/demo_components/structuralDirectivesBuiltin.html"
    
})

export class StructuralDirectivesBuiltin {
    
    private JSFrameworks:string[];
    private showFlag:boolean;
    private buttonText:string;
    
    constructor() {
        
        this.JSFrameworks = [
            "Angular",
            "Ember",
            "Meteor",
            "Knockout"
        ];
        this.showFlag = false;
        this.buttonText = "Show Frameworks"
    }
    
    handleShow($event){
        this.showFlag = !this.showFlag;
        if (this.showFlag) {
            this.buttonText = "Hide Frameworks";
        } else {
            this.buttonText = "Show Frameworks";
        }
    }
}