export interface IRankingUsers {
  statusCode: number
  message: string
  data: [
    {
      id: string
      name: string
      points: number
    },
  ]
}
