var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { List } from './classes/list.js';
import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
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
var form = document.querySelector('.new-item-form');
//form fields
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
//initiate list classe
var ul = document.querySelector('ul');
var list = new List(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    //defining tuples
    var values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new (Invoice.bind.apply(Invoice, __spreadArrays([void 0], values)))();
    }
    else {
        doc = new (Payment.bind.apply(Payment, __spreadArrays([void 0], values)))();
    }
    list.render(doc, type.value, 'end');
});
//Generics
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var objOne = addUID({ name: 'John', age: 34 });
// let objTwo = addUID('gang'); throws error
console.log(objOne, 'obj');
//enums
var resourceType;
(function (resourceType) {
    resourceType[resourceType["BOOK"] = 0] = "BOOK";
    resourceType[resourceType["PERSON"] = 1] = "PERSON";
    resourceType[resourceType["SHOP"] = 2] = "SHOP";
    resourceType[resourceType["AUTHOR"] = 3] = "AUTHOR";
    resourceType[resourceType["DIRECTOR"] = 4] = "DIRECTOR";
})(resourceType || (resourceType = {}));
var resourceOne = {
    uid: 1,
    resourceName: 'person',
    resourceType: 1,
    data: { name: 'John' },
};
var resourceTwo = {
    uid: 2,
    resourceName: 'shoppingList',
    resourceType: 2,
    data: ['milk', 'bread'],
};
console.log(resourceOne, resourceTwo);
//tuples
