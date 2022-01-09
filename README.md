

## Practical Builder Patter in TypeScript
- Builder Pattern is used to help build `complex` instance from class.
- We can also utilize **DTO** pattern to build an instance from class
- **Which one do you prefer?**

> [DTO Pattern](src/person.2.ts) 

```javascript
// pros: easy to read and use (client-side)
// pros: easy to extend field validation logic based on class-validator
// pros: easy to extend integration validation logic based on DTOBase class code reuse
// cons: have to declare types
// pros > cons
const james2: Person2 = Person2.fromObject({
  firstName: 'James2',
  lastName: 'Wang',
  age: 30,
  address: '46 Maria Road',
  gender: 'male',
  minWeight: 30,
  maxWeight: 60,
});
```

> [Builder Pattern](src/person.3.ts)
```javascript
// pros: read to read and use (client-side)
// cons: has to add field validation logic manually (or you still use class-validator)
// cons: some parts of source code is redundant
// pros < cons
const james3 = new Person3.Builder()
  .setFirstName('James')
  .setLastName('Wang')
  .setAge(30)
  .setAddress('46 Maria Road')
  .setGender('male')
  .setMinWeight(30)
  .setMaxWeight(100)
  .build();
```