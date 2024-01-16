import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';
import { verify } from 'jsonwebtoken';
import { AuthRepository } from '../repositories/Auth/Auth.repository';
import { IUser } from '../models/User.model';

interface IcaseRole {
  user: IUser;
  reply: FastifyReply;
  method: string;
  done: HookHandlerDoneFunction;
}

const notAuthorized = (reply: FastifyReply) => {
  reply.code(401);
  reply.send({
    statusCode: 401,
    message: 'Unauthorized',
  });
};

const caseRole = {
  dev: ({ reply, method, done }: IcaseRole) => {
    done();
  },
  student: ({ user, reply, method, done }: IcaseRole) => {
    if (method.includes('GET') && user?.verifiedEmail) return done();

    reply.code(403);
    reply.send({
      statusCode: 403,
      message: 'Forbidden: Students are only allowed to perform GET requests.',
    });
  },
  teacher: ({ reply, method, done }: IcaseRole) => {
    done();
  },
};

export const auth = (
  req: FastifyRequest,
  reply: FastifyReply,
  done: HookHandlerDoneFunction,
) => {
  const { method } = req;
  const token = req.headers['x-acess-token'] as string;

  if (token) {
    try {
      verify(token, `${process.env.SECRET_TOKEN}`, async (err, decoded) => {
        if (err) return notAuthorized(reply);

        const { userId } = decoded as { userId: string };
        const authRepository = new AuthRepository();

        const currentUser = await authRepository.findOneById({
          userId,
        });

        const role = currentUser?.role as 'dev' | 'student' | 'teacher';

        if (!role || !Object.keys(caseRole).includes(role)) {
          notAuthorized(reply);
        }

        caseRole[role]({ user: currentUser, reply, method, done });
      });
    } catch (error) {
      reply.code(500);
      reply.send({
        statusCode: 500,
        message: 'Internal Server Error',
      });
    }

    return;
  }

  notAuthorized(reply);
};
