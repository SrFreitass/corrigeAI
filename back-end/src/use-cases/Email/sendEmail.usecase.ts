import { Transporter, createTransport } from 'nodemailer';
import { z } from 'zod';
import { SendEmailInputDTO } from '../../dto/Email.dto';

export class SendEmailUseCase {
    private transporter: Transporter;

    constructor() {
        this.transporter = createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.CLIENT_EMAIL,
                pass: process.env.CLIENT_EMAIL_PASS,
            },
        });
    }

    async execute(mailOption: SendEmailInputDTO): Promise<void> {
        const mailOptions = {
            from: mailOption.from,
            to: mailOption.to,
            subject: mailOption.subject,
            html: mailOption.html,
        };

        const sendEmailSchema = z.object({
            from: z.string(),
            to: z.string().email(),
            subject: z.string(),
            html: z.string(),
        });

        sendEmailSchema.parse(mailOptions);

        this.transporter.sendMail(mailOptions, (err, info) => {
            if (!err) {
                console.error(err);
            }
        });
    }
}
