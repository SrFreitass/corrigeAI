/**
 * @schema - SchoolSubject
 */
export interface SchoolSubject {
    id: string;
    name: string;
    enemSubject_id: string;
}

/**
 * @schema - EnemSubject
 */
export interface EnemSubject {
    id: string;
    name: string;
}
