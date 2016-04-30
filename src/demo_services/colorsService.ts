export class ColorsService  {
    
    private colors:string[];

    constructor(){
        this.colors = [];
    }
    
    addColor(color:string) {
        this.colors.push(color);
    }
    
    getColors(){
        return this.colors;
    }
}