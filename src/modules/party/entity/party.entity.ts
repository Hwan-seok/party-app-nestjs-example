import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'party',
  underscored: true,
})
export class PartyEntity extends Model<PartyEntity> {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id: number;

  @Column({ type: DataType.STRING(30) })
  name: string;

  @Column({ type: DataType.STRING(30) })
  location: string;

  @Column({ type: DataType.STRING(3000) })
  img: string;
}
