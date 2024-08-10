import { createTransport } from "nodemailer";
import { z } from "zod";

interface mailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
}

const transporter = createTransport({
  service: "Gmail",
  auth: {
    user: process.env.CLIENT_EMAIL,
    pass: process.env.CLIENT_EMAIL_PASS,
  },
});

export const sendEmail = async (mailOptions: mailOptions) => {
  z.object({
    from: z.string().min(10),
    to: z.string().email(),
    subject: z.string().min(4),
    html: z.string(),
  }).parse(mailOptions);

  return await transporter.sendMail(mailOptions);
};
