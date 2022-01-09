

## Practical Builder Patter in TypeScript
> [Problem: growing number of complex constructor parameters](src/person.0.ts)
```javascript
class Person {
    // ! 构造器参数逐渐增加、构造逻辑逐渐复杂
    constructor(
        firstName: string,
        lastName: string,
        age: number,
        address: string,
        gender: string,
        maxWeight: number,
        minWeight: number
    ) {
        // ! 复杂校验逻辑
        if (!firstName) throw new Error('firstName cannot be undefined');
        if (!lastName) throw new Error('firstName cannot be undefined');
        if (!age) throw new Error('firstName cannot be undefined');
        if (!address) throw new Error('firstName cannot be undefined');
        if (!gender) throw new Error('firstName cannot be undefined');
        if (!maxWeight) throw new Error('firstName cannot be undefined');
        if (!minWeight) throw new Error('firstName cannot be undefined');

        if (minWeight > maxWeight)
        throw new Error('minWeight should not more than maxWeight');

        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._address = address;
        this._gender = gender;
        this._minWeight = minWeight;
        this._maxWeight = maxWeight;
    }
}

// 可读性和易用性都很差: 参数名称一眼看不出来、参数顺序可能输错
const james = new Person('James', 'Wang', 30, '46 Maria Road', 'male', 85, 60);
console.log(james);
```

> [Solution 1: DTO Pattern](src/person.2.ts) 

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

> [Solution 2: Builder Pattern](src/person.3.ts)
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

## **What is your opinion?**
- please leave some comments in `issue` 