import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';
import { verify } from 'jsonwebtoken';
import { UserRepository } from '../repositories/User/User.repository';
import { User } from '../database/schemas/user.schema';

interface IcaseRole {
    user: User | null;
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
        if (method.includes('GET')) return done();

        reply.code(403);
        reply.send({
            statusCode: 403,
            message:
                'Forbidden: Students are only allowed to perform GET requests.',
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
            verify(
                token,
                `${process.env.SECRET_TOKEN}`,
                async (err, decoded) => {
                    console.log(err, decoded);
                    if (err) return notAuthorized(reply);

                    const { data } = decoded as { data: { userId: string } };
                    const userRepository = new UserRepository();
                    const currentUser = await userRepository.findOne({
                        id: data.userId,
                    });

                    if (!currentUser) return notAuthorized(reply);

                    const role = currentUser?.role as
                        | 'dev'
                        | 'student'
                        | 'teacher';

                    if (!role || !Object.keys(caseRole).includes(role)) {
                        notAuthorized(reply);
                    }

                    caseRole[role]({ user: currentUser, reply, method, done });
                },
            );
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
