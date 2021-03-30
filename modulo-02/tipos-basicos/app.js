"use strict";
/* -------------------------
Sintaxe em declaração de Variável
let varName: TypeAnnotation = value;
Ex.:
------------------------- */
let myName = 'Erô';
console.log(myName);
/* -------------------------
Sintaxe em declaração de Array
let array: TypeAnnotation[] = [1,2,3];
Ex.:
------------------------- */
let array = [1, 2, 3];
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
let person;
person = { name: 'Erô', id: 10983 };
console.log(person);
/* -------------------------
Sintaxe em declaração de função
function functionName(value: TypeAnnotation) {...}
Ex.:
------------------------- */
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(2, 2));
