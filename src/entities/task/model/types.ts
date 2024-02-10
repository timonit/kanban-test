import type { TaskDTO } from '.';

export type CollumnName = 'on approval' | 'new' | 'in progress' | 'done' | 'want fix';

export type TaskState = {
  taskList: TaskDTO[]
}

export type TaskGetters = {
  getTask: (state: TaskState) => ((id: string) => TaskDTO | undefined);
  
  getTasksByCollumnName: (state: TaskState) => ((collumnName: CollumnName) => TaskDTO[]);
}

export type TaskActions = {
  addTask(text: string, collumn: CollumnName): void;
  
  editTask(id: string, task: Partial<TaskDTO>): void;
  
  removeTaskByID(id: string): void;
}
