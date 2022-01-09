// no dependencies
export class Person {
  private _firstName: string;
  private _lastName: string;
  private _age: number;
  private _address: string;
  private _gender: string;
  private _minWeight: number;
  private _maxWeight: number;

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

  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }
  public get address(): string {
    return this._address;
  }
  public set address(value: string) {
    this._address = value;
  }
  public get gender(): string {
    return this._gender;
  }
  public set gender(value: string) {
    this._gender = value;
  }
  public get minWeight(): number {
    return this._minWeight;
  }
  public set minWeight(value: number) {
    this._minWeight = value;
  }
  public get maxWeight(): number {
    return this._maxWeight;
  }
  public set maxWeight(value: number) {
    this._maxWeight = value;
  }
}
