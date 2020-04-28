import { Injectable } from '@nestjs/common';

@Injectable()
export class AlarmService {
  async getAllAlarms() {
    return ['mock-1', 'mock-2'];
  }
}
