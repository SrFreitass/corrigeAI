export interface SendEmailInputDTO {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export interface EmailOutputDTO {}
