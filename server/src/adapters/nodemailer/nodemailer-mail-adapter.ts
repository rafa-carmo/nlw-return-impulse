import { MailAdapter, SendMailData } from '../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "be2ccf9282f2b9",
      pass: "88ee0fdbf86a54"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@fidget.com>',
            to: 'Rafael do carmo <rafaelcarmo143@gmail.com>',
            subject,
            html: body
        })
    }
}