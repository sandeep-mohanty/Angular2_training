import {Component,provide} from "angular2/core";
import {ColorsService} from "../../demo_services/colorsService";


@Component({
    selector: "third-child-component-for-service",
    template:`
        <section>
            <br />
            <h3>Enter a Color: </h3><input type="textbox" #color [(ngModel)] = "colorToBeAdded"  /> <button type="button" (click) = "addColor(color.value)">Add Color</button>
            <h3>Colors:</h3>
            <div *ngFor = "let color of colors" style = "display:block;">{{color}}</div>
        </section>
    `,
    providers: [provide(ColorsService,{useClass:ColorsService})]
})

export class ThirdChildComponentForService {
    
    private colors:string[];
    private colorToBeAdded:string;
    
    constructor(private colorsService:ColorsService){
        this.colors = this.colorsService.getColors();
    }
    
    addColor(color:string){
        if (color) {
            this.colorsService.addColor(color);
        }
        this.colorToBeAdded = "";
    }
}