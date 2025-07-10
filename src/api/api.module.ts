import { Module } from '@nestjs/common';
import { MobaModule } from './moba/moba.module';

@Module({
  imports: [MobaModule],
})
export class ApiModule {}
