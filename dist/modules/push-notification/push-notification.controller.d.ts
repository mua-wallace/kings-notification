import { PushNotificationService } from './push-notification.service';
export declare class PushNotificationController {
    private pushNotificationService;
    private data;
    constructor(pushNotificationService: PushNotificationService);
    setData(payload: any): Promise<any>;
    sse(): Promise<import("rxjs").Observable<{
        data: any;
    }>>;
}
