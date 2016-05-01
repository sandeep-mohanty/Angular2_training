import {Component} from "angular2/core";
import {RouteConfig,ROUTER_DIRECTIVES} from "angular2/router";
import {FirstRouterComponent} from "./firstRouterComponent";
import {SecondRouterComponent} from "./secondRouterComponent";
import {ThirdRouterComponent} from "./thirdRouterComponent";

@Component({
    selector:"parent-router-component",
    template:`
        <section>
            <br/>
            <div align="center">
                <h2>Parent Router Component</h2>
                <button type="button" [routerLink] = "['FirstComponent']">First Router Component</button>
                <button type="button" [routerLink] = "['SecondComponent']">Second Router Component</button>
                <button type="button" [routerLink] = "['ThirdComponent',{category:'Device Group'}]">Third Router Component</button>
            </div>
            
        </section>
        <div align="center"><router-outlet></router-outlet></div>
   `,
   directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/firstroutercomponent', name: 'FirstComponent', component: FirstRouterComponent},
    {path: '/secondroutercomponent', name: 'SecondComponent', component: SecondRouterComponent},
    {path: '/thirdroutercomponent', name: 'ThirdComponent', component: ThirdRouterComponent}
])

export class ParentRouterComponent{
    
    constructor(){
        console.log("Parent Router Component Initialized");
    }
}