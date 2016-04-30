import {Component} from "angular2/core";
import {ToggleHighlight} from "../demo_directives/toggleHighlight";

@Component({
    selector: "attribute-directives-custom",
    templateUrl: "../../assets/templates/demo_components/attributeDirectivesCustom.html",
    directives: [ToggleHighlight]
})

export class AttributeDirectivesCustom {
    private componentText: string;
    
    constructor(){
        this.componentText = "This text is highlighted using a custom attribute directive";
    }
}