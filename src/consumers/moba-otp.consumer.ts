import { Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job } from 'bull';
import { QUEUE_NAME } from 'src/api/constants';
import { MobaOtpDto } from 'src/api/moba/dto';

@Processor(QUEUE_NAME.moba_otp)
@Injectable()
export class MobaOtpConsumer {
  @Process()
  async handler(job: Job<MobaOtpDto>) {
    console.log(job.data);
    return;
  }
}
