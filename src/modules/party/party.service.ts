import { Injectable, Inject } from '@nestjs/common';
import { PartyEntity } from './entity/party.entity';
import { PartyReservableTimeEntity } from './entity/partyTime.entity';
import { PARTY_REPOSITORY, PARTY_TIME_REPOSITORY } from './party.constants';

@Injectable()
export class PartyService {
  constructor(
    @Inject(PARTY_REPOSITORY)
    private readonly partyRepository: typeof PartyEntity,
    @Inject(PARTY_TIME_REPOSITORY)
    private readonly partyTimeRepository: typeof PartyReservableTimeEntity,
  ) {}

  async getAllParties() {
    return await this.partyRepository.findAll();
  }
}
