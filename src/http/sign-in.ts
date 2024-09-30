import { api } from '@/lib/axios'

interface SignInRequest {
  email: string
  password: string
}

export interface SignInResponse {
  userId: number
  token: string
}

export async function signIn({
  email,
  password,
}: SignInRequest): Promise<SignInResponse> {
  const response = await api.post('/user/login', {
    email,
    password,
  })

  return {
    userId: response.data.user.id,
    token: response.data.user.token,
  }
}
