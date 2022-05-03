import { INotification } from 'src/models/interfaces/notification.interface';
export declare class PushNotificationService {
    push(notification: INotification): Promise<any>;
    pull(): Promise<INotification>;
}
