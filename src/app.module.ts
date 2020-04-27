import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PartyModule } from './modules/party/party.module';
import { ConfigModule } from './modules/config/config.module';
import { AlarmModule } from './alarm/alarm.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [PartyModule, ConfigModule, AlarmModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
