import { HttpError } from './httpError';
import { GenericObject } from './util';

export class BadRequestError extends HttpError {
  static status: number = 400;
  static error: string = 'BadRequest';
  static message: string = 'Bad Request';
  static phrase: string = 'Bad request.';

  constructor(message?: string | GenericObject, properties?: GenericObject) {
    super(400, message, properties);
    this.name = 'BadRequestError';
  }
}
