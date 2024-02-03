export interface IRegister {
  statusCode: number
  message: string
  data: {
    name: string
    email: string
    token: string
    createdAt: Date
  }
}

export interface IRegisterError {
  statusCode: number
  error: {
    issues: [{ message: 'E-mail already exists' }]
  }
  data: []
}
