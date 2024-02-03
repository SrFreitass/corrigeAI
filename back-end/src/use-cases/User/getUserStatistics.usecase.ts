import { z } from 'zod';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';
import { Answers, Users } from '@prisma/client';
import { EssayRepository } from '../../repositories/Essay/Essay.repository';

export class GetUsersStatisticsUseCase {
  constructor(
    private readonly userRepository: BaseClassRepository<Users>,
    private readonly answerRepository: BaseClassRepository<Answers>,
  ) {}

  async execute(userId: string) {
    interface IanswersUser extends Answers {
      correct: boolean;
      Lectures: {
        enemSubject: {
          name: string;
        };
        schoolSubject: {
          name: string;
        };
      };
    }

    const answersUser = (await this.answerRepository.findManyWithWhere({
      item: userId,
    })) as IanswersUser[] | null;

    const subjects: {
      [key: string]: {
        enemSubject: number;
        [key: string]: number;
      };
    } = {
      'Ciências da Natureza': {
        enemSubject: 0,
        Biologia: 0,
        Física: 0,
        Química: 0,
      },
      'Ciências Humanas': {
        enemSubject: 0,
        Geografia: 0,
        História: 0,
        Sociologia: 0,
        Filosofia: 0,
      },
      'Linguagens e Códigos': {
        enemSubject: 0,
        Português: 0,
        Inglês: 0,
        Espanhol: 0,
        Literatura: 0,
      },
      'Matemática e suas Tecnologias': {
        enemSubject: 0,
        Matemática: 0,
      },
    };

    answersUser?.forEach((item) => {
      const enemSubject = item.Lectures.enemSubject
        .name as keyof typeof subjects;
      const schoolSubject = item.Lectures.schoolSubject.name;

      subjects[enemSubject].enemSubject += 1;
      subjects[enemSubject][schoolSubject] += 1;
    });

    return {
      lessonsReplied: answersUser?.length,
      corrects: answersUser?.filter((item) => item.correct).length,
      wrongs: answersUser?.filter((item) => !item.correct).length,
      subjects,
    };
  }
}
