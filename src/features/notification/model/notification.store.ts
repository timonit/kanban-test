import { defineStore } from 'pinia'
import type {
  NotificationActions,
  NotificationDTO,
  NotificationGetters,
  NotificationState
} from './types'
import { createNotification } from '../lib'

export const useNotification = defineStore<
  'notification',
  NotificationState,
  NotificationGetters,
  NotificationActions
>('notification', {
  state: () => {
    return { notifications: [] }
  },

  getters: {},

  actions: {
    removeNotification(id: string) {
      this.notifications = this.notifications.filter((n) => n.id !== id)
    },

    notify(dto: Omit<NotificationDTO, 'id'>) {
      const notification = createNotification(dto)
      this.notifications.push(notification)
      setTimeout(this.removeNotification.bind(this, notification.id), 5000)
    }
  }
})
