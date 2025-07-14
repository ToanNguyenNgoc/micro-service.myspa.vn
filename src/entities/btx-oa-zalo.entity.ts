import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'beautyx_oa_zalo' })
export class BtxOaZaloEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 255, nullable: true })
  oa_id: string;

  @Column({ nullable: true })
  app_id: string;

  @Column({ type: 'varchar', length: 1000, nullable: true })
  app_secret: string;

  @Column({ type: 'varchar', length: 1000, nullable: true })
  access_token: string;

  @Column({ type: 'varchar', length: 1000, nullable: true })
  refresh_token: string;

  @Column({ nullable: true })
  user_id: number;

  @Column({ nullable: true })
  opt_template_id: string;
}
