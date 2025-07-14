import { Module } from '@nestjs/common';
import { BeautyxController } from './beautyx.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BtxOaZaloEntity } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([BtxOaZaloEntity])],
  controllers: [BeautyxController],
})
export class BeautyxModule {}
