import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Transform } from 'class-transformer';

@Entity({ name: 'organizations' })
export class OrganizationEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  subdomain: string;

  @Column({ type: 'varchar', length: 255, default: 'myspa.vn' })
  domain: string;

  @Column({ name: 'db_name', type: 'varchar', length: 255 })
  db_name: string;

  @Column({ type: 'longtext', nullable: true })
  email?: string;

  @Column({ type: 'varchar', length: 255, default: '0' })
  latitude: string;

  @Column({ type: 'varchar', length: 255, default: '0' })
  longitude: string;

  @Column({ type: 'longtext', nullable: true })
  telephone?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  address?: string;

  @Column({ name: 'company_id', type: 'bigint', unsigned: true })
  company_id: string;

  @Column({ name: 'min_price', type: 'double', default: 0 })
  min_price: number;

  @Column({ name: 'max_price', type: 'double', default: 0 })
  max_price: number;

  @Column({ type: 'text', nullable: true })
  image?: string;

  @Column({
    name: 'is_momo_ecommerce_enable',
    type: 'tinyint',
    width: 1,
    default: () => '0',
  })
  is_momo_ecommerce_enable: boolean;

  @Column({
    name: 'is_moba_register_requested',
    type: 'tinyint',
    width: 1,
    default: () => '0',
  })
  is_moba_register_requested: boolean;

  @Column({
    name: 'opening_status',
    type: 'tinyint',
    width: 1,
    default: () => '1',
  })
  opening_status: boolean;

  @Column({ name: 'opening_time', type: 'longtext', nullable: true })
  @Transform(
    ({ value }) => {
      try {
        return value ? JSON.parse(value) : undefined;
      } catch {
        return undefined;
      }
    },
    { toClassOnly: true },
  )
  opening_time?: any;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', nullable: true })
  created_at?: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
  updated_at?: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deleted_at?: Date;

  @Column({
    name: 'province_code',
    type: 'bigint',
    unsigned: true,
    nullable: true,
  })
  province_code?: string;

  @Column({
    name: 'district_code',
    type: 'bigint',
    unsigned: true,
    nullable: true,
  })
  district_code?: string;

  @Column({ name: 'ward_code', type: 'bigint', unsigned: true, nullable: true })
  ward_code?: string;

  @Column({ type: 'int', default: 0 })
  priority: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  timezone?: string;

  @Column({ name: 'is_demo', type: 'tinyint', width: 1, default: () => '0' })
  is_demo: boolean;

  @Column({ type: 'longtext', nullable: true })
  description?: string;

  @Column({
    name: 'mc_user_id',
    type: 'bigint',
    unsigned: true,
    nullable: true,
  })
  mc_user_id?: string;

  @Column({ type: 'longtext', nullable: true })
  content?: string;
}
