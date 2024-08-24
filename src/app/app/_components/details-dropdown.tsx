import { ChevronDown, LogOut, TrendingDown, User, Wallet2 } from 'lucide-react'
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
import { cn } from '@/lib/utils'

import { AlterNameDialog } from './alter-name-dialog'

export function DetailsDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            size="sm"
            variant="outline"
            className="min-w-40 ml-auto justify-start gap-4"
          >
            {isOpen ? 'Recolher detalhes' : 'Ver detalhes'}
            <ChevronDown
              className={cn(
                'size-4 ml-auto transition-all',
                isOpen && '-rotate-180',
              )}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem>
            <Wallet2 className="size-6 mr-4 text-green-600" />

            <div className="flex flex-col gap-px">
              <span className="text-sm font-semibold">Saldo total</span>
              <span className="text-sm">R$ 3.523,53</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <TrendingDown className="size-6 mr-4 text-red-600" />

            <div className="flex flex-col gap-px">
              <span className="text-sm font-semibold">Saldo devedor</span>
              <span className="text-sm">R$ 432,99</span>
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
