/* eslint-disable prettier/prettier */
import { Controller, Get, Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { BtxOaZaloEntity } from 'src/entities';
import { Repository } from 'typeorm';
import axios from 'axios';

@Controller('beautyx')
@Injectable()
export class BeautyxController {
  constructor(
    @InjectRepository(BtxOaZaloEntity)
    private readonly btxOaZaloRepo: Repository<BtxOaZaloEntity>,
  ) { }

  @Get()
  async get() {
    return;
  }

  @Get('refresh-oa-zalo')
  @Cron('0 9 * * *') // run at 9 AM every day
  async handleRefreshOaZaloToken() {
    const oaZalo = await this.btxOaZaloRepo.findOne({ where: {} });
    if (!oaZalo) return;
    const response = await axios.post('https://oauth.zaloapp.com/v4/oa/access_token', {
      refresh_token: oaZalo.refresh_token,
      app_id: oaZalo.app_id,
      grant_type: 'refresh_token'
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'secret_key': oaZalo.app_secret
      }
    })
    if (response.data && response.data.access_token) {
      await this.btxOaZaloRepo.update({ id: oaZalo.id }, {
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token
      })
      return 'Refresh success'
    }
    return 'Refresh failed'
  }
}
