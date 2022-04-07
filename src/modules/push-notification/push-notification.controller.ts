import { Controller, Sse, Post, Body } from '@nestjs/common';
import { of } from 'rxjs';
import { INotification } from 'src/models/interfaces/notification.interface';
import { PushNotificationService } from './push-notification.service';

@Controller('notification')
export class PushNotificationController {

    private data: any = {};

    constructor(private pushNotificationService: PushNotificationService) { }

    @Post("push/send")
    async setData(@Body() payload: any) {
        const res = await this.pushNotificationService.push(payload);
        this.data = payload;
        return res;
    }


    @Sse('pull')
    async sse() {
        let res: INotification = await this.pushNotificationService.pull();
        return of({
            data: {...res} ?? {...this.data}
        });
    }

}
