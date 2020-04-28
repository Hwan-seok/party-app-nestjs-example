import { IsString } from 'class-validator';

export class CreatePartyDto {
  @IsString()
  name: string;

  @IsString()
  location: string;

  @IsString()
  img: string;
}
