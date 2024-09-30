'use client'

import { useQuery } from '@tanstack/react-query'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { fetchExpenses } from '@/http/fetch-expenses'

import { ExpensesChart } from './expenses-chart'
import { RevenuesChart } from './revenue-chart'
import { RevenueInYearChart } from './revenue-in-year-chart'

export function DashboardTab() {
  const { data: expenses } = useQuery({
    queryKey: ['expenses'],
    queryFn: fetchExpenses,
  })

  console.log(expenses)

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Despesas</CardTitle>
          <CardDescription>Veja um gráfico de suas despesas.</CardDescription>
        </CardHeader>
        <ExpensesChart />
      </Card>

      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Receitas</CardTitle>
          <CardDescription>Veja um gráfico de suas receitas.</CardDescription>
        </CardHeader>
        <RevenuesChart />
      </Card>

      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Receita gerada no ano</CardTitle>
          <CardDescription>
            Veja um gráfico geral de Janeiro até Dezembro de 2024.
          </CardDescription>
        </CardHeader>
        <RevenueInYearChart />
      </Card>
    </div>
  )
}
