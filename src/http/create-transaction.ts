import Cookies from 'js-cookie'

import { api } from '@/lib/axios'

export interface CreateTransactionRequest {
  description: string
  type: boolean
  value: number
  category: string
}

export async function createTransaction({
  description,
  type,
  value,
  category,
}: CreateTransactionRequest) {
  await api.post(
    '/transactions/registrar',
    {
      description,
      type,
      date: new Date(),
      value,
      category,
      userId: Cookies.get('user'),
    },
    {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    },
  )
}
