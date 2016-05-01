import {Component} from "angular2/core";

@Component({
    
    selector: "template-driven-form",
    template: `
        <section>
            <br/>
            <div style = "position:absolute; padding-left:40%;" align= "left">
                <h2>Sign-in</h2>
                <div align="left" style = "position:relative">
                
                <form (ngSubmit) = "onLogin(f)" #f = "ngForm">
                    <label for="email" style="display:block;"><strong>Email:</strong></label>
                    <input ngControl="email" type="text" id="email" #email = "ngForm" required />
                    <span *ngIf="!email.valid" [style.color]="'red'" style= "padding-left:10px;">{{errorMessage}}</span><br />
                    
                    <label for="password" style="display:block;"><strong>Password:</strong></label>
                    <input ngControl="password" type="password" id="password" #password = "ngForm" required />
                    <span *ngIf="!password.valid" [style.color]="'red'" style= "padding-left:10px;">{{errorMessage}}</span><br />
                    
                    <button type="submit" [disabled] = "!f.valid">Sign in</button>
                </form>
                
                </div><br/>
                <div align="left" style = "position:relative" *ngIf= "f.valid">
                    <h3>Values Entered:</h3>
                    Email: <span>{{signIn.email}}</span><br/>
                    Password: <span>{{signIn.password}}</span>
                </div>
            </div>
        </section>
    `
})
export class TemplateDrivenForms {
    
    private errorMessage:string;
    private signIn:{email:string,password:string};
    
    constructor(){
        
        this.errorMessage = "Invalid";
        this.signIn = {
            
            email: "",
            password: ""
        };
    }
    
    onLogin(formObject) {
        
        console.dir(formObject);
        this.signIn.email = formObject.value.email;
        this.signIn.password = formObject.value.password;
    }
}