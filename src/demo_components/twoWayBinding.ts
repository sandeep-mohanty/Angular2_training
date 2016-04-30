import {Component} from "angular2/core";

@Component({
    selector:"two-way",
    templateUrl: "../../assets/templates/demo_components/twoWayBinding.html"
})

export class TwoWayBinding {
    private name:string;
    
    constructor() {
        this.name = "Angular";
    }
}