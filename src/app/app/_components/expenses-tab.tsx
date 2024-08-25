'use client'

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

import { CreateExpenseDialog } from './create-expense-dialog'
import { ItemOfList } from './item-of-list'

export function ExpensesTab() {
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
          {Array.from({ length: 8 }).map((_, i) => {
            return (
              <ItemOfList
                key={i}
                description="Descrição da despesa"
                value={1230}
              />
            )
          })}
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
