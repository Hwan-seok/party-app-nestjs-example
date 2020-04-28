import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { PartyAvailableTime } from '../enums/partyAvailableTime.enum';
import { PartyEntity } from './party.entity';

@Table({
  tableName: 'party_reservable_time',
  underscored: true,
})
export class PartyReservableTimeEntity extends Model<
  PartyReservableTimeEntity
> {
  @ForeignKey(() => PartyEntity)
  @Column({ primaryKey: true, type: DataType.INTEGER })
  partyId: number;

  @Column({
    primaryKey: true,
    type: DataType.ENUM(...Object.values(PartyAvailableTime)),
  })
  availableTime: PartyAvailableTime;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isReservable: boolean;

  @Column({ type: DataType.STRING(20), defaultValue: 0 })
  starts: number;

  @Column({ type: DataType.STRING(20), defaultValue: 0 })
  ends: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  fee: number;
}
