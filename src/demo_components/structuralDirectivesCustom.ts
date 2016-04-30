import {Component} from "angular2/core";
import {CustomIf} from "../demo_directives/customIf";

@Component({
    selector: "structural-directives-custom",
    templateUrl: "../../assets/templates/demo_components/structuralDirectivesCustom.html",
    directives: [CustomIf]
})

export class StructuralDirectivesCustom {
    private imageUrl:string;
    private showFlag:boolean;
    
    constructor(){
        this.imageUrl = "http://www.lovethispic.com/uploaded_images/25681-Beautiful-Landscape.jpg";
    }
    
    setShowFlag(value){
        this.showFlag = value;
    }
}