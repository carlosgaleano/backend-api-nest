const myName = 'carlos';
const myAge = 12;
const suma = (a: number, b: number) => {
  a + b;
};
suma(12, 23);

class Persona {

  constructor(private age:number, private name:string) {
  }

  getSummay() {
    return `my name is ${this.age},${this.age}`;
  }
}

const carlos=new Persona(18, 'Carlos Galeano');

carlos.getSummay();
