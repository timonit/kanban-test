import { v4 as generateUUID } from 'uuid';
import type { NotificationDTO } from '../model';

export function createNotification(dto: Omit<NotificationDTO, 'id'>) {
  const id = generateUUID();
  return {
    id,
    ...dto,
  }
}
