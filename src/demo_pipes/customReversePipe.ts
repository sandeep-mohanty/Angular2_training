import {Pipe, PipeTransform} from "angular2/core";

@Pipe({
    name: "custom_reverse_pipe"
})

export class CustomReversePipe implements PipeTransform {
    
    transform(value:string){
        
        let reversedString = "";
        
        for ( let i = 0; i < value.length; i += 1) {
            reversedString = value[i] + reversedString;
        }
        
        return reversedString;
    }
}