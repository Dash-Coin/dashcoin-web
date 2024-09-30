import { api } from '@/lib/axios'

interface SignUpRequest {
  username: string
  email: string
  password: string
}

export async function signUp({ username, email, password }: SignUpRequest) {
  await api.post('/user/registrar', {
    username,
    email,
    password,
  })
}
