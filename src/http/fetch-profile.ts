import Cookies from 'js-cookie'

import { api } from '@/lib/axios'
import { User } from '@/types/user'

export interface FetchProfileResponse {
  user: User
}

export async function fetchProfile(): Promise<FetchProfileResponse | null> {
  const response = await api.get<User[]>('/user/listar-todos', {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
  })

  const userId = Cookies.get('user')

  const currentUser = response.data.find((user) => user.id === Number(userId))

  console.log(currentUser)

  if (!currentUser) return null

  return {
    user: currentUser,
  }
}
