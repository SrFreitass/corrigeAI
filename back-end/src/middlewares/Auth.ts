import { FastifyReply, FastifyRequest } from 'fastify';
import { verify } from 'jsonwebtoken';

export const auth = (req: FastifyRequest, reply: FastifyReply, next: any) => {
  const token = req.headers['x-acess-token'];

  if (typeof token == 'string' && token) {
    verify(token, `${process.env.SECRET_TOKEN}`, (err, user) => {
      if (err != null) {
        reply.code(401);
        reply.send({ statusCode: 401, message: 'Unauthorized' });
      }

      next();
    });
    return;
  }
  reply.code(401);
  reply.send({ statusCode: 401, message: 'Unauthorized' });
};
