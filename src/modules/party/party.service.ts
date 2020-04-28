import { Injectable, Inject } from '@nestjs/common';
import { PartyEntity } from './entity/party.entity';
import { PartyReservableTimeEntity } from './entity/partyTime.entity';
import { PARTY_REPOSITORY, PARTY_TIME_REPOSITORY } from './party.constants';
import { CreatePartyDto } from './dto/createParty.dto';
import { SEQUELIZE } from '../global/generalConstants';
import { Transaction } from 'sequelize/types';
import { PartyAvailableTime } from './enums/partyAvailableTime.enum';
import {
  UpdatePartyTimeDto,
  UpdatePartyTimeDetailsDto,
} from './dto/updatePartyTime.dto';

@Injectable()
export class PartyService {
  constructor(
    @Inject(PARTY_REPOSITORY)
    private readonly partyRepository: typeof PartyEntity,
    @Inject(PARTY_TIME_REPOSITORY)
    private readonly partyTimeRepository: typeof PartyReservableTimeEntity,
    @Inject(SEQUELIZE)
    private readonly sequelize,
  ) {}

  async getAllParties() {
    return await this.partyRepository.findAll();
  }

  async createParty(createPartyDto: CreatePartyDto) {
    await this.sequelize.transaction(async (t: Transaction) => {
      const party: PartyEntity = await this.partyRepository.create(
        createPartyDto,
        { transaction: t },
      );
      const willCreatePartyTimePartial = {
        partyId: party.id,
        isReservable: false,
      };

      const willCreatePartyTimeValues = Object.values(
        PartyAvailableTime,
      ).reduce(
        (prev, curr) =>
          prev.concat({ ...willCreatePartyTimePartial, availableTime: curr }),
        [],
      );

      await this.partyTimeRepository.bulkCreate(willCreatePartyTimeValues, {
        transaction: t,
      });
    });
  }

  async updatePartyTime(updatePartyTimeDto: UpdatePartyTimeDto) {
    await this.sequelize.transaction(async (t: Transaction) => {
      await Promise.all(
        updatePartyTimeDto.times.map((detail: UpdatePartyTimeDetailsDto) =>
          this.partyTimeRepository.update(
            {
              isReservable: detail.reservable,
              starts: detail.starts,
              ends: detail.ends,
              fee: detail.fee,
            },
            {
              where: {
                partyId: updatePartyTimeDto.id,
                availableTime: detail.time,
              },
              transaction: t,
            },
          ),
        ),
      );
    });
  }
}
