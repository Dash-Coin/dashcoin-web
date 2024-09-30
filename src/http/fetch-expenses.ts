// import Cookies from 'js-cookie'

// import { api } from '@/lib/axios'
import { Transaction } from '@/types/transaction'

export interface FetchExpensesResponse {
  transactions: Transaction[]
}

export async function fetchExpenses(): Promise<FetchExpensesResponse> {
  // const response = await api.get(`/usuario/${Cookies.get('user')}/despesas`, {
  //   headers: {
  //     Authorization: `Bearer ${Cookies.get('token')}`,
  //   },
  // })

  return {
    transactions: [
      {
        id: 1,
        description: 'Compra do Mês',
        category: 'food',
        type: false,
        value: 1200,
        date: new Date(),
      },
      {
        id: 2,
        description: 'Viagem',
        category: 'others',
        type: false,
        value: 4400,
        date: new Date(),
      },
    ],
  }
}
