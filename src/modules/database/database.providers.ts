import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '../config/config.service';
import * as sqlFormatter from 'sql-formatter';
import { Logger } from '@nestjs/common';
import { PartyEntity } from '../party/entity/party.entity';
import { PartyReservableTimeEntity } from '../party/entity/partyTime.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: configService.get('MYSQL_HOST'),
        port: Number(configService.get('MYSQL_PORT')),
        username: configService.get('MYSQL_USERNAME'),
        password: configService.get('MYSQL_PASSWORD'),
        database: configService.get('MYSQL_DATABASE'),
        logQueryParameters: true,
        logging: sql => {
          Logger.debug(sqlFormatter.format(sql));
        },
        timezone: '+09:00',
      });
      sequelize.addModels([PartyEntity, PartyReservableTimeEntity]);

      await sequelize.sync({ force: true });

      return sequelize;
    },
    inject: [ConfigService],
  },
];
