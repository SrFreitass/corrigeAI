import { readFile, readFileSync } from 'fs';
import { Transporter, createTransport } from 'nodemailer';

export class EmailService {
  private transporter: Transporter;
  private emailRecievied: boolean;

  constructor() {
    this.emailRecievied = false;
    this.transporter = createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.CLIENT_EMAIL,
        pass: process.env.CLIENT_EMAIL_PASS,
      },
    });
  }

  async sendEmail({ email, name }: { email: string; name: string }) {
    const mailOptions = {
      from: `"CorrigiAI - Auth" <${process.env.CLIENT_EMAIL}>`,
      to: email,
      subject: 'CorrigiAI - Confirmação de E-mail',
      html: `<strong>Olá, ${name}! Você foi cadastrado com sucesso<strong>`,
    };

    this.transporter.sendMail(mailOptions, (err, info) => {
      if (!err) this.emailRecievied = true;
    });

    return this.emailRecievied;
  }
}
