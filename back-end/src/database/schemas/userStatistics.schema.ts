export interface UserStatistics {
    id: string;
    user_id: string;
    enemSubject_id: string;
    schoolSubject_id: string;
    total_answers: number;
    total_correct_answers: number;
    total_wrong_answers: number;
    createdAt: Date;
}
