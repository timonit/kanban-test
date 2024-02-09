export type NotificationDTO = {
  text: string;
  title: string;
  id: string;
  type: 'error' | 'success';
}

export type NotificationState = {
  notifications: NotificationDTO[]
}
