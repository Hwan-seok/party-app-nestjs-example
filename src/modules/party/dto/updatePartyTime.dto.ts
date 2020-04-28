import { PartyAvailableTime } from '../enums/partyAvailableTime.enum';
import { IsNumber, IsIn, IsBoolean, IsString, IsArray } from 'class-validator';

export class UpdatePartyTimeDto {
  @IsNumber()
  id: number;

  @IsArray()
  times: Array<UpdatePartyTimeDetailsDto>;
}

export class UpdatePartyTimeDetailsDto {
  @IsIn(Object.values(PartyAvailableTime))
  time: PartyAvailableTime;

  @IsBoolean()
  reservable: boolean;

  @IsString()
  starts: number;

  @IsString()
  ends: number;

  @IsNumber()
  fee: number;
}
