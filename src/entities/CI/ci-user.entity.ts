import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { CICheckinEventEntity } from './ci-checkin-event.entity';

@Entity({ name: 'df_user' })
export class CIUserEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 50 })
  password: string;

  @Column({ type: 'varchar', length: 50 })
  user_group_id: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar', length: 50 })
  facebook: string;

  @Column({ type: 'varchar', length: 80 })
  fullname: string;

  @Column({ type: 'varchar', length: 50 })
  telephone: string;

  @Column({ type: 'date', nullable: true })
  birthday?: Date;

  @Column({ type: 'tinyint', width: 1, nullable: true })
  sex?: number;

  @Column({ type: 'float', nullable: true })
  height?: number;

  @Column({ type: 'float', nullable: true })
  weight?: number;

  @Column({ type: 'varchar', length: 200 })
  address: string;

  @Column({ type: 'int', default: 0 })
  nationality: number;

  @Column({ type: 'tinyint' })
  province: number;

  @Column({ type: 'int' })
  district: number;

  @Column({ type: 'int' })
  ward: number;

  @Column({ type: 'varchar', length: 50 })
  job: string;

  @Column({ type: 'varchar', length: 50 })
  identify_number: string;

  @Column({ type: 'varchar', length: 100 })
  image: string;

  @Column({ type: 'varchar', length: 140 })
  identify_img: string;

  @Column({ type: 'date' })
  issue_date: Date;

  @Column({ type: 'varchar', length: 100 })
  issue_area: string;

  @Column({ type: 'tinyint' })
  status: number;

  @Column({ type: 'tinyint' })
  role_id: number;

  @Column({ type: 'int' })
  user_from_id: number;

  @Column({ type: 'tinyint' })
  user_level_id: number;

  @Column({ type: 'varchar', length: 50 })
  site_lang: string;

  @Column({ type: 'varchar', length: 50 })
  site_currency: string;

  @Column({ type: 'varchar', length: 50 })
  interest_service_id: string;

  @Column({ type: 'tinyint', default: 0 })
  deleted: number;

  @CreateDateColumn({ type: 'datetime' })
  created_date: Date;

  @UpdateDateColumn({ type: 'datetime' })
  modified_date: Date;

  @Column({ type: 'int' })
  created_by_id: number;

  @Column({ type: 'tinyint' })
  branch_id: number;

  @Column({ type: 'varchar', length: 50 })
  customer_backup_code: string;

  @Column({ type: 'datetime', nullable: true })
  due_date?: Date;

  @Column({ type: 'tinyint', nullable: true })
  loginable?: number;

  @Column({ type: 'varchar', length: 50 })
  stage_name: string;

  @Column({ type: 'varchar', length: 50 })
  vocative: string;

  @Column({ type: 'int' })
  brand_app: number;

  @Column({ type: 'int', nullable: true })
  staff_id_referral?: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  platform?: string;

  @Column({ type: 'int', nullable: true })
  sip_user?: number;

  @Column({ type: 'tinyint', default: 0 })
  has_omicall: number;

  @Column({ type: 'int', default: 0 })
  gs_line_to: number;

  @Column({ type: 'varchar', length: 250, nullable: true })
  acc_name?: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  bank_name?: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  account_number?: string;

  @Column({ type: 'int', nullable: true })
  locker_id?: number;

  @Column({ type: 'varchar', length: 200, nullable: true })
  profile_tag_id?: string;

  //
  @OneToMany(
    () => CICheckinEventEntity,
    (ciCheckinEventEntity) => ciCheckinEventEntity.user,
  )
  checkin_events: CICheckinEventEntity[];
}
