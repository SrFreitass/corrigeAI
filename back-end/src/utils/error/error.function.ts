import { FastifyReply } from 'fastify';
import { ZodError } from 'zod';

export const errorHandling = (error: unknown, reply: FastifyReply) => {
  console.error(error);
  error instanceof ZodError ? reply.status(400) : reply.status(500);
  reply.send({
    statusCode: error instanceof ZodError ? 400 : 500,
    error: error instanceof ZodError ? error : 'Unexpected error',
    data: [],
  });
};
