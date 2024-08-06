export default class {
    constructor(name){
        this.name = name;
    }

    sayHi(name){
        console.info(`Hello ${name}, my name is ${this.name} `);
    }
}
