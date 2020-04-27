import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { PartyAvailableTime } from '../enums/partyAvailableTime.enum';

@Table({
  tableName: 'party_reservable_time',
  underscored: true,
})
export class PartyReservableTimeEntity extends Model<
  PartyReservableTimeEntity
> {
  @Column({ primaryKey: true, type: DataType.INTEGER })
  partyId: number;

  @Column({ type: DataType.ENUM(...Object.values(PartyAvailableTime)) })
  availableTime: PartyAvailableTime;

  @Column({ type: DataType.BOOLEAN })
  isReservable: boolean;

  @Column({ type: DataType.STRING(20) })
  starts: string;

  @Column({ type: DataType.STRING(20) })
  ends: string;
}
