/* -------------------------
Sintaxe em declaração de Variável
let varName: TypeAnnotation = value;
Ex.: 
------------------------- */
let myName: string = 'Erô';

console.log(myName);


/* -------------------------
Sintaxe em declaração de Array
let array: TypeAnnotation[] = [1,2,3];
Ex.:
------------------------- */
let array: number[] = [1,2,3];

console.log(array);


/* -------------------------
Sintaxe em declaração de Objeto
let object: {
	foo: string;
	ba: number;
}
object = { foo: 'lorem', ba: 123 }
Ex.:
------------------------- */
let person: {
	name: string;
  id: number;
}
person = { name: 'Erô', id: 10983 }

console.log(person);


/* -------------------------
Sintaxe em declaração de função
function functionName(value: TypeAnnotation) {...}
Ex.:
------------------------- */
function sum(num1: number, num2: number) {
	return num1 + num2;
}

console.log(sum(2,2));