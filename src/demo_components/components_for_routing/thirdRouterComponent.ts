import {Component, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";

@Component({
   template:`
        <section>
        <br/>
        <div align="center"><h2>Third Router Component</h2></div>
        </section>
   ` 
})

export class ThirdRouterComponent implements OnInit{
    constructor(private routeParams: RouteParams) {
        
    }
    
    ngOnInit(){
        console.log(this.routeParams.get("category"));
    }
}