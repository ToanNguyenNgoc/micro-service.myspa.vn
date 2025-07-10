/* eslint-disable prettier/prettier */
import { Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bull';
import { QUEUE_NAME } from 'src/api/constants';
import { OrganizationEntity } from 'src/entities';
import { CIUserEntity } from 'src/entities/CI';
import { TenantDatabaseService } from 'src/shared/tenant-database/tenant-database.service';
import { MobaGateway } from 'src/socket/moba.gateway';
import { Repository } from 'typeorm';

@Processor(QUEUE_NAME.moba_fetch_users)
@Injectable()
export class MobaFetchUserConsumer {
  constructor(
    private readonly tenantDb: TenantDatabaseService,
    @InjectRepository(OrganizationEntity)
    private readonly orgRepo: Repository<OrganizationEntity>,
    private readonly mobaGateway:MobaGateway
  ) { }
  @Process()
  async handler(job: Job<{ org_id: any, device_id:string }>) {
    const { org_id, device_id } = job.data;
    const org = await this.orgRepo.findOne({
      where: [{ id: org_id }, { subdomain: org_id }],
    });
    if (!org) return;
    const ciUserRepo = await this.tenantDb.onOrgRepo(org.subdomain, CIUserEntity);
    const ciUsers = await ciUserRepo.find({
      select: ['id', 'fullname', 'email', 'birthday'],
      relations: { checkin_events: { category: true } }
    });
    // const ciUsers = await ciUserRepo
    //   .createQueryBuilder('df_user')
    //   .select([
    //     'df_user.id',
    //     'df_user.fullname',
    //     'df_user.email',
    //     'df_user.birthday',
    //   ])
    //   .innerJoinAndSelect('df_user.checkin_events', 'checkin_event')
    //   .leftJoinAndSelect('checkin_event.category', 'category')
    //   .getMany();
    // console.log(JSON.stringify(ciUsers));
    this.mobaGateway.sendDataToDevice(device_id, ciUsers);
    return ciUsers;
  }
}
