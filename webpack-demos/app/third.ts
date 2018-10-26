export class Person {
    name: string;
    age: number;

    constructor(name:string='', age:number=20) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}