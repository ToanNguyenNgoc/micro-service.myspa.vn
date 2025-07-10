import { Module } from '@nestjs/common';
import { TenantDatabaseModule } from './tenant-database/tenant-database.module';

@Module({
  imports: [TenantDatabaseModule],
})
export class SharedModule {}
