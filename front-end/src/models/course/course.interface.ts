export interface ICourse {
  statusCode: number;
  message: string;
  data: [
    {
      id: string;
      title: string;
      description: string;
      createdAt: Date;
      schoolSubject_id: string;
      updateAt: null | Date;
      schoolSubject: {
        id: string;
        name: string;
        enemSubject_id: string;
        enemsubjects: {
          id: string;
          name: string;
        };
      };
    },
  ];
}
