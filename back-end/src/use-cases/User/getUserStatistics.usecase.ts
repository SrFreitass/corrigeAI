import { z } from 'zod';
import { User } from '../../database/schemas/user.schema';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';
import { Lecture } from '../../database/schemas/lecture.schema';
import { Answer } from '../../database/schemas/answer.schema';
import {
    EnemSubject,
    SchoolSubject,
} from '../../database/schemas/subjects.schema';
import { AnswersRepository } from '../../repositories/Answers/Answers.repository';

export class GetUsersStatisticsUseCase {
    constructor(
        private readonly userRepository: BaseClassRepository<User>,
        private readonly answerRepository: BaseClassRepository<Answer>,
    ) {}

    async execute(userId: string) {
        interface IanswersUser extends Answer {
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
            lessonsReplieds: answersUser?.length,
            corrects: answersUser?.filter((item) => item.correct).length,
            wrongs: answersUser?.filter((item) => !item.correct).length,
            subjects,
        };
    }
}
