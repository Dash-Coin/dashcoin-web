// import Cookies from 'js-cookie'

// import { api } from '@/lib/axios'
import { Transaction } from '@/types/transaction'

export interface FetchRevenuesResponse {
  transactions: Transaction[]
}

export async function fetchRevenues(): Promise<FetchRevenuesResponse> {
  // const response = await api.get(`/usuario/${Cookies.get('user')}/receitas`, {
  //   headers: {
  //     Authorization: `Bearer ${Cookies.get('token')}`,
  //   },
  // })

  return {
    transactions: [
      {
        id: 1,
        description: 'Freelancer',
        category: 'services',
        type: true,
        value: 8000,
        date: new Date(),
      },
      {
        id: 2,
        description: 'Presente',
        category: 'others',
        type: true,
        value: 2200,
        date: new Date(),
      },
    ],
  }
}
