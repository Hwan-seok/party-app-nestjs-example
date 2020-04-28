import { Module } from '@nestjs/common';
import { PartyController } from './party.controller';
import { PartyService } from './party.service';
import { partyProviders } from './party.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PartyController],
  providers: [PartyService, ...partyProviders],
})
export class PartyModule {}
