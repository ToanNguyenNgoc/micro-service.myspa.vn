import { CreateDateColumn, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { CICheckinEventCategoryEntity } from './ci-checkin-event-category.entity';
import { CIUserEntity } from './ci-user.entity';

@Entity({ name: 'checkin_events' })
export class CICheckinEventEntity extends BaseEntity {
  @CreateDateColumn({ name: 'checkin_at' })
  checkin_at: Date;
  //
  @ManyToOne(
    () => CICheckinEventCategoryEntity,
    (ciCheckinEventCategoryEntity) =>
      ciCheckinEventCategoryEntity.checkin_events,
  )
  @JoinColumn({ name: 'event_category_id' })
  category: CICheckinEventCategoryEntity;

  //
  @ManyToOne(() => CIUserEntity, (ciUserEntity) => ciUserEntity.checkin_events)
  @JoinColumn({ name: 'user_id' })
  user: CIUserEntity;
}
