import {Component, OnInit} from "angular2/core";
import {FormBuilder,ControlGroup,Validators,Control} from "angular2/common";

@Component({
    
    selector: "form-builder-driven-form",
    template: `
        <section>
            <br/>
            <div style = "position:absolute; padding-left:40%;" align= "left">
                <h2>Sign-in</h2>
                <div align="left" style = "position:relative">
                
                <form [ngFormModel] = "signInForm" (ngSubmit) = onLogin(signInForm) #f = "ngForm">
                    <label for="email" style="display:block;"><strong>Email:</strong></label>
                    <input  [ngFormControl] = "signInForm.controls['email']" type="text" #email = "ngForm"  />
                    <span *ngIf = "!email.valid" [style.color]="'red'" style= "padding-left:10px;">{{errorMessage.email}}</span><br />
                    
                    <label for="password" style="display:block;"><strong>Password:</strong></label>
                    <input  [ngFormControl] = "signInForm.controls['password']" type="password" #password = "ngForm" />
                    <span *ngIf = "!password.valid" [style.color]="'red'" style= "padding-left:10px;">{{errorMessage.password}}</span><br />
                    
                    <button [disabled] = "!f.valid" type="submit" >Sign in</button>
                </form>
                
                </div><br/>
                <div *ngIf= "f.valid" align="left" style = "position:relative">
                    <h3>Values Entered:</h3>
                    Email: <span>{{signIn.email}}</span><br/>
                    Password: <span>{{signIn.password}}</span>
                </div>
            </div>
        </section>
    `
})
export class FormBuilderDrivenForms implements OnInit {
    
    private errorMessage:{email:string,password:string};
    private signIn:{email:string,password:string};
    private signInForm:ControlGroup;
    private shouldbe8characters:any;
    
    constructor(private formBuilder:FormBuilder) {
        
        this.errorMessage = {
            email: "This is a required field and cannot be blank.",
            password: "This is a required field and should be 8 characters long."
        };
        this.signIn = {
            
            email: "",
            password: ""
        };
        
        this.shouldbe8characters = (control:Control) => {

            if (control.value.length !== 8 ) {
                return {
                    "length error": true
                }
            }
        };
    }
    
    
    
    ngOnInit(){
        this.signInForm = this.formBuilder.group({
            email: ["",Validators.required],
            password: ["",Validators.compose([
                Validators.required,
                this.shouldbe8characters
            ])]
        })
    }
    
    onLogin(formObject) {
        
        console.dir(formObject);
        this.signIn.email = formObject.value.email;
        this.signIn.password = formObject.value.password;
    }

}