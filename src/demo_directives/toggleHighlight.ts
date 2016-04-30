import {Directive} from "angular2/core";

@Directive({
    selector: "[toggleHighlight]",
    host: {
        "(click)": "doToggle()",
        "[style.backgroundColor]": "style"
    }
})

export class ToggleHighlight {
    
    private style:string;
    private styleApplied:boolean;
    
    constructor() {
        this.style = "blue"; 
    }
    
    doToggle() {

        if (!this.styleApplied) {
            
            this.style = "";
            
        } else {
             this.style = "blue";
        }
        
        this.styleApplied = !this.styleApplied;
    }
}