'use client'

import { useQuery } from '@tanstack/react-query'
import { CirclePlus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { fetchPaginatedExpenses } from '@/http/fetch-paginated-expenses'

import { CreateExpenseDialog } from './create-expense-dialog'
import { ItemOfList } from './item-of-list'

export function ExpensesTab() {
  const { data } = useQuery({
    queryKey: ['recent-expenses'],
    queryFn: fetchPaginatedExpenses,
  })

  return (
    <Dialog>
      <Card>
        <CardHeader>
          <CardTitle>Suas despesas</CardTitle>
          <CardDescription>
            Veja todos as suas despesas por aqui.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {data?.transactions === undefined ? (
            <div className="flex justify-center items-center text-sm">
              Nenhuma despesa encontrada.
            </div>
          ) : (
            data?.transactions.map((transaction) => (
              <ItemOfList key={transaction.id} transaction={transaction} />
            ))
          )}
        </CardContent>

        <CardFooter className="border-t pb-0 py-4">
          <DialogTrigger asChild>
            <Button className="ml-auto">
              <CirclePlus className="size-4 mr-2" />
              Registrar despesa
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>

      <CreateExpenseDialog />
    </Dialog>
  )
}
