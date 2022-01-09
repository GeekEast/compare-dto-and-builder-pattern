import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  ValidationError,
} from 'class-validator';
import { Expose } from 'class-transformer';
import { DTOBase } from './dto.base';

// how can we make the validation process easier? DTO pattern
export class Person2 extends DTOBase {
  @IsNotEmpty()
  @IsString()
  @Expose()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  lastName: string;

  @IsNotEmpty()
  @IsNumber()
  @Expose()
  age: number;

  @IsNotEmpty()
  @IsString()
  @Expose()
  address: string;

  @IsNotEmpty()
  @IsIn(['male', 'female'])
  @Expose()
  gender: string;

  @IsNotEmpty()
  @IsNumber()
  @Expose()
  minWeight: number;

  @IsNotEmpty()
  @IsNumber()
  @Max(100)
  @Expose()
  maxWeight: number;

  // ! 复杂校验逻辑
  validate(errors: ValidationError[]): ValidationError[] {
    if (this.minWeight > this.maxWeight) {
      const error = new this.ValidationErrorBuilder()
        .setTarget(this)
        .setProperty('minWeight')
        .setConstraints('min weight cannot be more than max weight')
        .build();
      errors.push(error);
    }
    return errors;
  }
}
