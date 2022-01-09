// no dependencies

export class Person3 {
  private _firstName: string;
  private _lastName: string;
  private _age: number;
  private _address: string;
  private _gender: string;
  private _minWeight: number;
  private _maxWeight: number;

  private constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    gender: string,
    maxWeight: number,
    minWeight: number
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._address = address;
    this._gender = gender;
    this._minWeight = minWeight;
    this._maxWeight = maxWeight;
  }

  static Builder = class Builder {
    private _firstName: string;
    private _lastName: string;
    private _age: number;
    private _address: string;
    private _gender: string;
    private _minWeight: number;
    private _maxWeight: number;

    public setFirstName(value: string) {
      if (!value) throw new Error('first name is missing');
      this._firstName = value;
      return this;
    }
    public setLastName(value: string) {
      if (!value) throw new Error('last name is missing');
      this._lastName = value;
      return this;
    }
    public setAge(value: number) {
      if (!value) throw new Error('age is missing');
      this._age = value;
      return this;
    }
    public setAddress(value: string) {
      if (!value) throw new Error('address is missing');
      this._address = value;
      return this;
    }
    public setGender(value: string) {
      if (!value) throw new Error('gender is missing');
      this._gender = value;
      return this;
    }
    public setMinWeight(value: number) {
      if (!value) throw new Error('minWeight is missing');
      this._minWeight = value;
      return this;
    }
    public setMaxWeight(value: number) {
      if (!value) throw new Error('maxWeight is missing');
      this._maxWeight = value;
      return this;
    }

    build(): Person3 {
      this.validate();
      return new Person3(
        this._firstName,
        this._lastName,
        this._age,
        this._address,
        this._gender,
        this._maxWeight,
        this._minWeight
      );
    }

    validate() {
      // ! 复杂校验逻辑
      if (!this._firstName) throw new Error('first name is missing');
      if (!this._lastName) throw new Error('last name is missing');
      if (!this._age) throw new Error('age is missing');
      if (!this._address) throw new Error('address is missing');
      if (!this._gender) throw new Error('gender is missing');
      if (!this._minWeight) throw new Error('minWeight is missing');
      if (!this._maxWeight) throw new Error('maxWeight is missing');
      if (this._minWeight > this._maxWeight)
        throw new Error('minWeight should not be more than maxWeight');
    }
  };

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
