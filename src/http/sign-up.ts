import { api } from '@/lib/axios'

interface SignUpRequest {
  name: string
  email: string
  password: string
}

export async function signUp({ name, email, password }: SignUpRequest) {
  const newUser = await api.post('/user/registrar', {
    name,
    email,
    password,
  })

  return newUser
}
