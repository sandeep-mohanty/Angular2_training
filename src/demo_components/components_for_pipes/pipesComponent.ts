import {Component} from "angular2/core";
import {CustomReversePipe} from "../../demo_pipes/customReversePipe";

@Component({
    selector: "pipes-component",
    template: `
        <div align ="center">
            <br />
            <h2>Built-in Pipes</h2>
            <h4>Date Pipe</h4>   
            Today's Date: <span>{{today | date:"longDate"}}</span> <br/>
            <h4>Uppercase & Lowercase Pipes</h4>
            Enter some text: <input type="text" [(ngModel)] = "someText" /> <br/>
            <span>{{someText | uppercase}}</span><br/>
            <span>{{someText | lowercase}}</span> <br/><br/>
            <h2>Custom Pipes</h2>
            <h4>Custom Reverse Pipe</h4>
            <span>{{someText | custom_reverse_pipe}}</span><br/>
        </div>
    `,
    pipes: [CustomReversePipe]
})

export class PipesComponent {
    private today:Date;
    private someText:string;
    
    constructor(){
        this.today = new Date();
        this.someText = "";
    }
}