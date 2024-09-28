import { api } from '@/lib/axios'

interface SignInRequest {
  email: string
  password: string
}

export interface User {
  email: string
  expiraToken: string
  id: number
  senha: string
  senhaHash: string
  token: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  categories: any[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transactions: any[]
}

export interface SignInResponse {
  refreshToken: string
  user: User
}

export async function signIn({
  email,
  password,
}: SignInRequest): Promise<SignInResponse> {
  const user = await api.post<SignInResponse>('/user/login', {
    email,
    password,
  })

  return {
    refreshToken: user.data.refreshToken,
    user: user.data.user,
  }
}
