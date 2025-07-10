import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { bullConfig, typeOrmAsyncConfig } from './configs';
import { SharedModule } from './shared/shared.module';
import { ApiModule } from './api/api.module';
import { BullModule } from '@nestjs/bull';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    BullModule.forRoot(bullConfig),
    SharedModule,
    SocketModule,
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
