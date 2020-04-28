import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { PartyService } from './party.service';
import { CreatePartyDto } from './dto/createParty.dto';
import { UpdatePartyTimeDto } from './dto/updatePartyTime.dto';

@Controller('party')
export class PartyController {
  constructor(private readonly partyService: PartyService) {}

  @Get('/all')
  async getAllParties() {
    return await this.partyService.getAllParties();
  }

  @Post()
  async createParty(@Body() createPartyDto: CreatePartyDto) {
    return await this.partyService.createParty(createPartyDto);
  }

  @Put()
  async updatePartyTime(@Body() updatePartyTimeDto: UpdatePartyTimeDto) {
    return await this.partyService.updatePartyTime(updatePartyTimeDto);
  }
}
