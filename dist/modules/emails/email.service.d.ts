import * as AWS from 'aws-sdk';
import { INotification } from 'src/models/interfaces/notification.interface';
export declare class EmailService {
    sendEmail(payload: INotification): Promise<import("aws-sdk/lib/request").PromiseResult<AWS.SES.SendEmailResponse, AWS.AWSError>>;
}
