import { Module } from '@nestjs/common';
import { MobaController } from './moba.controller';
import { BullModule } from '@nestjs/bull';
import { QUEUE_NAME } from '../constants';
import { MobaFetchUserConsumer } from 'src/consumers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationEntity } from 'src/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrganizationEntity]),
    BullModule.registerQueue({ name: QUEUE_NAME.moba_fetch_users }),
  ],
  controllers: [MobaController],
  providers: [MobaFetchUserConsumer],
})
export class MobaModule {}
