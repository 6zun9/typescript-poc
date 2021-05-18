import { List } from './classes/list.js';
import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/HasFormatter';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('Jack', 'Web work', 300);
// docTwo = new Payment('Harry', 'Farm work', 500);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

//interfaces
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }

// const john: IsPerson = {
//   name: 'John',
//   age: 34,
//   speak(text: string) {
//     console.log('speaks', text);
//   },
//   spend(money: number) {
//     return money;
//   },
// };

// const greet = (person: IsPerson) => {
//   console.log(`Hello ${person.name}`);
// };

// greet(john);

// const invoiceOne = new Invoice('6zun9', 'to build website', 25000);

// console.log(invoiceOne, invoiceOne.format());

//form element
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//form fields
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//initiate list classe

const ul = document.querySelector('ul')!;
const list = new List(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  //defining tuples
  let values: [string, string, number];
  values = [toFrom.value, details.value, amount.valueAsNumber];

  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, 'end');
});

//Generics

const addUID = <T extends { name: string }>(obj: T) => {
  const uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let objOne = addUID({ name: 'John', age: 34 });
// let objTwo = addUID('gang'); throws error
console.log(objOne, 'obj');

//enums
enum resourceType {
  BOOK,
  PERSON,
  SHOP,
  AUTHOR,
  DIRECTOR,
}

//with interfaces

interface Resource<T> {
  uid: number;
  resourceName: string;
  resourceType: resourceType;
  data: T;
}

const resourceOne: Resource<object> = {
  uid: 1,
  resourceName: 'person',
  resourceType: 1,
  data: { name: 'John' },
};

const resourceTwo: Resource<string[]> = {
  uid: 2,
  resourceName: 'shoppingList',
  resourceType: 2,
  data: ['milk', 'bread'],
};

console.log(resourceOne, resourceTwo);

//tuples
