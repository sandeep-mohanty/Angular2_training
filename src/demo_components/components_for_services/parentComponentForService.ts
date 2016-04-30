import {Component} from "angular2/core";
import {FirstChildComponentForService} from "./firstChildComponentForService";
import {SecondChildComponentForService} from "./secondChildComponentForService";
import {ThirdChildComponentForService} from "./thirdChildComponentForService";
import {FruitsService} from "../../demo_services/fruitsService";

@Component({
    selector: "parent-component-for-service",
    template:`
        <section style="float:left;width:33%;padding-left:15px">
            <h2>First Child Component</h2>
            <first-child-component-for-service></first-child-component-for-service>
        </section>
        <section style="float:left;width:33%">
            <h2>Second Child Component</h2>
            <second-child-component-for-service></second-child-component-for-service>
        </section>
        <section style="float:left;width:33%">
            <h2>Third Child Component</h2>
            <third-child-component-for-service></third-child-component-for-service>
        </section>
    `,
    directives:[FirstChildComponentForService,SecondChildComponentForService,ThirdChildComponentForService],
    providers: [FruitsService]
})

export class ParentComponentForService {
    constructor(){
        
    }
}