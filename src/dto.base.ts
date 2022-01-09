import { validateSync, ValidationError } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { BadRequestError } from './errors/BadRequest.error';

export class DTOBase {
  public static fromObject<T extends DTOBase>(obj: any) {
    const instance = plainToInstance(this, obj, {
      excludeExtraneousValues: true,
      exposeUnsetFields: true,
    });

    const errors = instance.validate(validateSync(instance));
    if (errors.length > 0) {
      throw new BadRequestError(this.aggregateValidationErrors(errors));
    }

    return instance as T;
  }

  // * ====================== private method ======================
  private static aggregateValidationErrors(errors: ValidationError[]) {
    return errors.reduce((mapping, error) => {
      mapping[error.target.constructor.name + '.' + error.property] =
        error.constraints;
      return mapping;
    }, {});
  }

  // * ====================== protected method ====================
  protected ValidationErrorBuilder = class ValidationErrorBuilder {
    private _target: object;
    private _property: string;
    private _constraints: string;

    public setTarget(value: object) {
      if (!value) throw new Error('target is missing');
      this._target = value;
      return this;
    }
    public setProperty(value: string) {
      if (!value) throw new Error('property is missing');
      this._property = value;
      return this;
    }
    public setConstraints(value: string) {
      if (!value) throw new Error('constraints is missing');
      this._constraints = value;
      return this;
    }

    public build(): ValidationError {
      if (!this._target) throw new Error('target is missing');
      if (!this._property) throw new Error('property is missing');
      if (!this._constraints) throw new Error('constraints is missing');
      const error = new ValidationError();
      error.target = this._target;
      error.property = this._property;
      error.constraints = { [this._property]: this._constraints };
      return error;
    }
  };

  // @Override example
  // validate(errors: ValidationError[]): ValidationError[] {
  //   if (this.minWeight > this.maxWeight) {
  //     const error = new this.ValidationErrorBuilder()
  //       .setTarget(this)
  //       .setProperty('minWeight')
  //       .setConstraints('min weight cannot be more than max weight')
  //       .build();
  //     errors.push(error);
  //   }
  //   return errors;
  // }
  protected validate(errors: ValidationError[]): ValidationError[] {
    return errors;
  }
}
