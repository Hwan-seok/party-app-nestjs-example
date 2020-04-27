import { Controller, Get } from '@nestjs/common';
import { PartyService } from './party.service';

@Controller('party')
export class PartyController {
  constructor(private readonly partyService: PartyService) {}

  @Get('/all')
  async getAllParties() {
    return await this.partyService.getAllParties();
  }
}
