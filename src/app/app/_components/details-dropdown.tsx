'use client'

import { useQuery } from '@tanstack/react-query'
import { LogOut, Menu, User, Wallet2 } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { fetchExpenses } from '@/http/fetch-expenses'
import { fetchRevenues } from '@/http/fetch-revenues'

import { AlterNameDialog } from './alter-name-dialog'

export function DetailsDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const { data: revenues } = useQuery({
    queryKey: ['revenue-balance'],
    queryFn: fetchRevenues,
    staleTime: Infinity,
  })

  const { data: expenses } = useQuery({
    queryKey: ['expense-balance'],
    queryFn: fetchExpenses,
    staleTime: Infinity,
  })

  const positiveBalance =
    revenues?.transactions
      .filter((transaction) => transaction.type === true)
      .reduce((acc, transaction) => acc + transaction.value, 0) ?? 0

  const negativeBalance =
    expenses?.transactions
      .filter((transaction) => transaction.type === false)
      .reduce((acc, transaction) => acc + transaction.value, 0) ?? 0

  const totalBalance = positiveBalance - negativeBalance

  return (
    <Dialog>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            size="sm"
            variant="outline"
            className="w-8 md:w-fit ml-auto px-0 md:px-3"
          >
            <Menu className="size-4 md:mr-2" />
            <span className="hidden md:block">Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem>
            <Wallet2 className="size-6 mr-4 text-green-600" />

            <div className="flex flex-col gap-px">
              <span className="text-sm font-semibold">Saldo total</span>
              <span className="text-sm">
                {totalBalance?.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem className="cursor-pointer">
              <User className="size-4 mr-2" /> Alterar nome
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => console.log('saiu')}
            className="bg-red-600 focus:bg-red-600/90 text-white focus:text-white cursor-pointer"
          >
            <LogOut className="size-4 mr-2" /> Encerrar sessão
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlterNameDialog />
    </Dialog>
  )
}
