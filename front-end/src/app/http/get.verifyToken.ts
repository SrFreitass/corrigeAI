import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

interface tokenData {
  data: {
    userId: string
    email: string
  }
}

export const verifyToken = async ({ token }: { token: string }) => {
  const decoded = jwtDecode(token) as tokenData

  if (!decoded) {
    throw new Error('Token inválido')
  }

  await axios.get<{
    statusCode: number
    message: string
    data: string
  }>(`http://localhost:8080/api/v1/auth/verify/token`, {
    headers: {
      'x-access-token': token,
    },
  })
}
