import { Lectures } from "@prisma/client";
import { z } from "zod";
import { LectureInputDTO, LectureOutputDTO } from "../../dto/Lecure.dto";
import { BaseClassRepository } from "../../repositories/BaseClass.repository";

export class CreateLectureUseCase {
  constructor(
    private readonly lectureRepository: BaseClassRepository<Lectures>,
  ) {}

  async execute(lecture: LectureInputDTO): Promise<LectureOutputDTO> {
    console.log(lecture);

    const lectureSchema = z
      .object({
        title: z.string().min(6),
        description: z.string().min(6),
        teacher_id: z.string().uuid(),
        course_id: z.string().uuid(),
        image_url: z.string().min(8).optional(),
      })
      .strict();

    lectureSchema.parse(lecture);

    const lectureCreated = await this.lectureRepository.create(
      lecture as Lectures,
    );

    return lectureCreated;
  }
}
