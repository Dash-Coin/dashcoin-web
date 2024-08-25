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

import { CreateRevenueDialog } from './create-revenue-dialog'

export function RevenuesTab() {
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
          {Array.from({ length: 8 }).map((_, i) => {
            return (
              <div
                key={i}
                className="px-3 py-2 flex items-center gap-4 border-b"
              >
                <p className="text-sm">Descrição da receita</p>
                <b className="ml-auto text-sm font-medium">R$ 2.000,00</b>
              </div>
            )
          })}
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
