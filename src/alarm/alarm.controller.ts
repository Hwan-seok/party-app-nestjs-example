import { Controller, Get } from '@nestjs/common';
import { AlarmService } from './alarm.service';

@Controller('alarm')
export class AlarmController {
  constructor(private readonly alarmService: AlarmService) {}

  @Get('/all')
  async getAllAlarms() {
    return await this.alarmService.getAllAlarms();
  }
}
