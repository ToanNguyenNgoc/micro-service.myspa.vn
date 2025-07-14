import { Module } from '@nestjs/common';
import { TenantDatabaseModule } from './tenant-database/tenant-database.module';
import { AppMongoModule } from './mongo/app-mongo.module';

@Module({
  imports: [TenantDatabaseModule, AppMongoModule],
})
export class SharedModule {}
