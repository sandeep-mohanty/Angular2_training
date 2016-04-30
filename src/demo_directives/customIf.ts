import {Directive, TemplateRef,ViewContainerRef} from "angular2/core";

@Directive({
    selector: "[customIf]",
    inputs: ["customIf"]
})

export class CustomIf {
    
    constructor(private _templateRef: TemplateRef, private _viewContainerRef: ViewContainerRef) {
    }
    
    set customIf(flag:boolean) {
        
        if (flag) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        } else {
            this._viewContainerRef.clear();
        }
    }
}