export class FruitsService {
    
    private fruits:string[];

    constructor(){
        this.fruits = [];
    }
    
    addFruit(fruit:string) {
        this.fruits.push(fruit);
    }
    
    getFruits(){
        return this.fruits;
    }
}