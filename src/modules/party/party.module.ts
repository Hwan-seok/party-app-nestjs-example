import { Module } from '@nestjs/common';
import { PartyController } from './party.controller';
import { PartyService } from './party.service';
import { partyProviders } from './party.providers';

@Module({
  controllers: [PartyController],
  providers: [PartyService, ...partyProviders],
})
export class PartyModule {}
