// import Cookies from 'js-cookie'

import { Transaction } from '@/types/transaction'

// import { api } from '@/lib/axios'

export interface FetchPaginatedExpensesResponse {
  transactions: Transaction[]
}

export async function fetchPaginatedExpenses(): Promise<FetchPaginatedExpensesResponse> {
  // const response = await api.get(`despesas-paginas/${Cookies.get('user')}`, {
  //   headers: {
  //     Authorization: `Bearer ${Cookies.get('token')}`,
  //   },
  // })

  const rawTransactions = Array.from({ length: 12 }).map((_, i) => {
    return {
      id: i + 1,
      description: `Despesa ${i + 1}`,
      category: 'Alimentação',
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
