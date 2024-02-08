import type { TaskDTO, CollumnName } from '../model';
import { v4 as generateUUID } from 'uuid';

export function createTask(text: string, collumn: CollumnName): TaskDTO {
  const id = generateUUID();
  return { id, text, collumn };
}
