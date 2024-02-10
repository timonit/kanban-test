export type NotificationDTO = {
  text: string;
  title: string;
  id: string;
  type: 'error' | 'success';
}

export type NotificationState = {
  notifications: NotificationDTO[]
}

export type NotificationGetters = {
}

export type NotificationActions = {
  removeNotification(id: string): void;

  notify(dto: Omit<NotificationDTO, 'id'>): void;
}

