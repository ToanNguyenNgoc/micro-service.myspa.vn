import { Controller, Get, Param } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { QUEUE_NAME } from '../constants';
import { Queue } from 'bull';

@Controller('moba/:org_id')
export class MobaController {
  constructor(
    @InjectQueue(QUEUE_NAME.moba_fetch_users)
    private readonly fetchUserQueue: Queue<{ org_id: any; device_id: string }>,
  ) {}
  @Get('fetch-users/:device_id')
  async fetchUsers(
    @Param('org_id') id: any,
    @Param('device_id') device_id: string,
  ) {
    this.fetchUserQueue.add({ org_id: id, device_id }, { delay: 100 });
    return 'fetch...';
  }
}
