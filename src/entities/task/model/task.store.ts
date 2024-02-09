import type { CollumnName } from './types'
import { defineStore } from 'pinia'
import type { TaskDTO } from './task.dto'
import { createTask } from '../lib'

type TaskState = {
  taskList: TaskDTO[]
}

export const useTaskStore = defineStore<'task', TaskState>('task', {
  state: () => {
    return { taskList: [] }
  },

  getters: {
    getTask(state: TaskState) {
      return (id: string): TaskDTO | undefined => {
        return state.taskList.find((item) => item.id === id)
      }
    },

    getTasksByCollumnName(state: TaskState) {
      return (collumnName: CollumnName): TaskDTO[] => {
        return state.taskList.filter((item) => item.collumn === collumnName)
      }
    }
  },

  actions: {
    addTask(text: string, collumn: CollumnName) {
      const task = createTask(text, collumn)
      this.taskList.push(task)
    },

    editTask(id: string, task: Partial<TaskDTO>) {
      if (task.id && id !== task.id) return;
      
      this.taskList = this.taskList.map<TaskDTO>((item) => {
        if (item.id === id) return { ...item, ...task };
        
        return item;
      });
    },

    removeTaskByID(id: string) {
      this.taskList = this.taskList.filter((item) => item.id !== id);
    }
  }
})
