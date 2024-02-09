export type NotificationDTO = {
  text: string;
  id: string;
  type: 'error' | 'success';
}

export type NotificationState = {
  notifications: NotificationDTO[]
}
