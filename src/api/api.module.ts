import { Module } from '@nestjs/common';
import { MobaModule } from './moba/moba.module';
import { BeautyxModule } from './beautyx/beautyx.module';

@Module({
  imports: [BeautyxModule, MobaModule],
})
export class ApiModule {}
