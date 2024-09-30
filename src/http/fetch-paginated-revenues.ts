// import Cookies from 'js-cookie'

import { Transaction } from '@/types/transaction'

// import { api } from '@/lib/axios'

export interface FetchPaginatedRevenuesResponse {
  transactions: Transaction[]
}

export async function fetchPaginatedRevenues(): Promise<FetchPaginatedRevenuesResponse> {
  // const response = await api.get(`receitas-paginas/${Cookies.get('user')}`, {
  //   headers: {
  //     Authorization: `Bearer ${Cookies.get('token')}`,
  //   },
  // })

  const rawTransactions = Array.from({ length: 12 }).map((_, i) => {
    return {
      id: i + 1,
      description: `Receita ${i + 1}`,
      category: 'Serviços',
      type: true,
      value: 3000,
      date: new Date(),
    }
  })

  const transactions = rawTransactions.slice(0, 10)

  return {
    transactions,
  }
}
