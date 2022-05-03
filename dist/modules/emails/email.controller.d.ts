import { Response } from 'express';
import { EmailService } from './email.service';
export declare class EmailController {
    private emailService;
    constructor(emailService: EmailService);
    sendEmail(payload: any, res: Response): Promise<void>;
}
