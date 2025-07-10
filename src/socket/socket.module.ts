import { Global, Module } from '@nestjs/common';
import { MobaGateway } from './moba.gateway';

@Global()
@Module({
  providers: [MobaGateway],
  exports: [MobaGateway],
})
export class SocketModule {}
