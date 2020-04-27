import { PARTY_REPOSITORY, PARTY_TIME_REPOSITORY } from './party.constants';
import { PartyEntity } from './entity/party.entity';
import { PartyReservableTimeEntity } from './entity/partyTime.entity';

export const partyProviders = [
  {
    provide: PARTY_REPOSITORY,
    useValue: PartyEntity,
  },
  {
    provide: PARTY_TIME_REPOSITORY,
    useValue: PartyReservableTimeEntity,
  },
];
