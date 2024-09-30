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
import { fetchPaginatedRevenues } from '@/http/fetch-paginated-revenues'

import { CreateRevenueDialog } from './create-revenue-dialog'
import { ItemOfList } from './item-of-list'

export function RevenuesTab() {
  const { data } = useQuery({
    queryKey: ['recent-revenues'],
    queryFn: fetchPaginatedRevenues,
  })

  return (
    <Dialog>
      <Card>
        <CardHeader>
          <CardTitle>Suas receitas</CardTitle>
          <CardDescription>
            Veja todos as suas receitas por aqui.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {data?.transactions === undefined ? (
            <div className="flex justify-center items-center text-sm">
              Nenhuma receita encontrada.
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
              Registrar receita
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>

      <CreateRevenueDialog />
    </Dialog>
  )
}
