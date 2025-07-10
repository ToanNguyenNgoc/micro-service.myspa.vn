import { CICheckinEventCategoryEntity } from './ci-checkin-event-category.entity';
import { CICheckinEventEntity } from './ci-checkin-event.entity';
import { CIUserEntity } from './ci-user.entity';
import { CIZaloConfigEntity } from './ci-zalo-config.entity';
import { CIZaloHistoryEntity } from './ci-zalo-history.entity';
import { CIZaloMoneyEntity } from './ci-zalo-money.entity';

export * from './ci-checkin-event-category.entity';
export * from './ci-user.entity';
export * from './ci-zalo-config.entity';
export * from './ci-zalo-history.entity';
export * from './ci-zalo-money.entity';

export const CI_Entities = [
  CICheckinEventCategoryEntity,
  CICheckinEventEntity,
  CIUserEntity,
  CIZaloConfigEntity,
  CIZaloHistoryEntity,
  CIZaloMoneyEntity,
];
