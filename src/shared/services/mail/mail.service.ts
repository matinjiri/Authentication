import { ISendMailOptions, MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}
  async send(sendMailOptions: ISendMailOptions) {
    await this.mailerService.sendMail(sendMailOptions);
  }
}
