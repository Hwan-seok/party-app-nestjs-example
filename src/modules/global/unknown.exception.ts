import { InternalServerErrorException } from '@nestjs/common';

export class UnknownException extends InternalServerErrorException {
  constructor(err, data) {
    super('We do not know why error occurred, please wait until recover' + data);
    console.log(err);
  }
}
