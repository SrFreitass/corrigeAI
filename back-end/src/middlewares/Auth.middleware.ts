import { Users } from "@prisma/client";
import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";
import { verify } from "jsonwebtoken";
import { z } from "zod";
import { UserRepository } from "../repositories/User/User.repository";

interface IcaseRole {
  user: Users | null;
  req: FastifyRequest;
  reply: FastifyReply;
  method: string;
  done: HookHandlerDoneFunction;
}

const notAuthorized = (reply: FastifyReply) => {
  reply.code(401);
  reply.send({
    statusCode: 401,
    message: "Unauthorized",
  });
};

const caseRole = {
  dev: ({ user, req, reply, method, done }: IcaseRole) => {
    req.headers.userId = user?.id;
    done();
  },
  student: ({ user, req, reply, method, done }: IcaseRole) => {
    if (method.includes("GET")) {
      req.headers.userId = user?.id;
      return done();
    }

    reply.code(403);
    reply.send({
      statusCode: 403,
      message: "Forbidden: Students are only allowed to perform GET requests.",
    });
  },
  teacher: ({ user, req, reply, method, done }: IcaseRole) => {
    req.headers.userId = user?.id;
    done();
  },
};

export const auth = (
  req: FastifyRequest,
  reply: FastifyReply,
  done: HookHandlerDoneFunction,
) => {
  const { method } = req;
  const token = req.headers["x-access-token"] as string;

  if (token) {
    try {
      verify(token, `${process.env.SECRET_TOKEN}`, async (err, decoded) => {
        console.log(decoded, err);

        if (err) return notAuthorized(reply);

        const tokenVerify = z
          .object({
            userId: z.string().uuid(),
            email: z.string().email(),
          })
          .safeParse(decoded);

        if (!tokenVerify.success) return notAuthorized(reply);

        const { email, userId } = decoded as {
          userId: string;
          email: string;
        };

        const userRepository = new UserRepository();
        const currentUser = await userRepository.findOne({
          id: userId,
        });

        if (!currentUser) return notAuthorized(reply);

        const role = currentUser?.role as "dev" | "student" | "teacher";

        if (!role || !Object.keys(caseRole).includes(role)) {
          notAuthorized(reply);
        }

        caseRole[role]({
          user: currentUser,
          req,
          reply,
          method,
          done,
        });
      });
    } catch (error) {
      reply.code(500);
      reply.send({
        statusCode: 500,
        message: "Internal Server Error",
      });
    }

    return;
  }

  notAuthorized(reply);
};
