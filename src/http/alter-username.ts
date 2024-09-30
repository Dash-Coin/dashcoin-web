import Cookies from 'js-cookie'

import { api } from '@/lib/axios'

export interface AlterUsernameRequest {
  username: string
}

export async function alterUsername({ username }: AlterUsernameRequest) {
  await api.put(
    `/user/atualizar/${Cookies.get('user')}`,
    {
      username,
    },
    {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    },
  )
}
