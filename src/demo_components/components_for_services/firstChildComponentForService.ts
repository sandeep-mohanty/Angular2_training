import {Component} from "angular2/core";
import {FruitsService} from "../../demo_services/fruitsService";

@Component({
    selector: "first-child-component-for-service",
    template:`
        <section>
            <br />
            <h3>Enter a fruit: </h3><input type="textbox" #fruit [(ngModel)] = "fruitToBeAdded" /> <button type="button" (click) = "addFruit(fruit.value)">Add Fruit</button>
            <h3>Fruits:</h3>
            <div *ngFor = "let fruit of fruits" style = "display:block;">{{fruit}}</div>
        </section>
    `
    //providers: [FruitsService]
})

export class FirstChildComponentForService {
    
    private fruits:string[];
    private fruitToBeAdded:string;
    
    constructor(private fruitsService:FruitsService){
        this.fruits = this.fruitsService.getFruits();
    }
    
   addFruit(fruit:string){
        if (fruit) {
            this.fruitsService.addFruit(fruit);
        }
        this.fruitToBeAdded = "";
    }
}