import { ConfigService } from '@nestjs/config';
import Mail from 'nodemailer/lib/mailer';
export declare class EmailService {
    private readonly configService;
    private nodeMailerTransport;
    constructor(configService: ConfigService);
    sendMail(options: Mail.Options): Promise<any>;
}