import {Component} from "angular2/core";

@Component({
    selector: "attribute-directives-builtin",
    templateUrl: "../../assets/templates/demo_components/attributeDirectivesBuiltin.html",
    styleUrls: ["../../assets/styles/highlight.css","../../assets/styles/bold.css"],
})

export class AttributeDirectivesBuiltin {
    
    private customClasses:any;
    private customStyles:any;
    private styleApplied:boolean;
    
    constructor() {
        
        this.styleApplied = false;
        this.customStyles = {
            highlight: false,
            bold: false
        };
        
        this.customClasses = {
            highlight: false,
            bold: false
        };
    }
    
    private onMouseOver(event){

        this.customClasses = {
            highlight: true,
            bold: false
        };
    }
    
    private onMouseClick(event){

        this.customClasses = {
            highlight: true,
            bold: true
        };

    }
    
    private onMouseLeave(event){
        
       this.customClasses = {
            highlight: false,
            bold: false
        };

    }
    
    private changeStyle(event) {
        
        if (!this.styleApplied ) {
            this.customStyles = {
                'font-style': "italic", 
                'font-size': "30px", 
                'font-weight': "bold"
            };
        } else {
           this.customStyles = {
                'font-style': null, 
                'font-size': null, 
                'font-weight': null
            }; 
        }
        
        this.styleApplied = !this.styleApplied;

    }
    
}