import 'reflect-metadata';
import 'es6-shim';

import { Person } from './person.0';
import { Person1 } from './person.1';
import { Person2 } from './person.2';
import { Person3 } from './person.3';

// * ============================ Person 0 =========================
// Bad: very hard to read
// Bad: very hard to use
const james = new Person('James', 'Wang', 30, '46 Maria Road', 'male', 85, 60);
console.log(james);

// * ============================ Person 1 =========================
// Good: easy to read
// Good: easy to use
const james1 = new Person1({
  firstName: 'James1',
  lastName: 'Wang',
  age: 30,
  address: '46 Maria Road',
  gender: 'male',
  maxWeight: 85,
  minWeight: 60,
});
console.log(james1);

// * ============================ Person 2 =========================
// Good: easy to read
// Good: easy to use
const james2: Person2 = Person2.fromObject({
  firstName: 'James2',
  lastName: 'Wang',
  age: 30,
  address: '46 Maria Road',
  gender: 'male',
  minWeight: 30,
  maxWeight: 60,
});

console.log(james2);

// * ============================ Person 3 =========================

const james3 = new Person3.Builder()
  .setFirstName('James')
  .setLastName('Wang')
  .setAge(30)
  .setAddress('46 Maria Road')
  .setGender('male')
  .setMinWeight(30)
  .setMaxWeight(100)
  .build();

console.log(james3);
