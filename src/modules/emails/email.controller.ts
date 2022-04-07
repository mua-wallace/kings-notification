import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
    constructor(private emailService: EmailService) { }

    @Post("send")
    async sendEmail(@Body() payload: any,@Res() res:Response) {
        const response = await this.emailService.sendEmail(payload);
        res.status(200).send(response)
    }
}
