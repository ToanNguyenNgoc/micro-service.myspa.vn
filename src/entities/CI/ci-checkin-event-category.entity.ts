import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { CICheckinEventEntity } from './ci-checkin-event.entity';

@Entity({ name: 'checkin_event_categories' })
export class CICheckinEventCategoryEntity extends BaseEntity {
  @Column({ nullable: true })
  name: string;

  @OneToMany(
    () => CICheckinEventEntity,
    (ciCheckinEventEntity) => ciCheckinEventEntity.category,
  )
  checkin_events: CICheckinEventEntity[];
}
