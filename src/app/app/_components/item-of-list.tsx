import { Trash2 } from 'lucide-react'
import { HTMLAttributes } from 'react'

import { Button } from '@/components/ui/button'
import { Transaction } from '@/types/transaction'

interface ItemOfListProps extends HTMLAttributes<HTMLDivElement> {
  transaction: Transaction
}

export function ItemOfList({ transaction, ...props }: ItemOfListProps) {
  async function handleDeleteTransaction(id: number) {
    console.log(id)
  }

  return (
    <div className="px-3 py-2 flex items-center gap-4 border-b" {...props}>
      <p className="flex-1 text-sm">{transaction.description}</p>

      <div className="ml-auto flex items-center gap-3">
        <p className="min-w-20 xl:min-w-40 text-sm truncate">
          {transaction.category}
        </p>

        <b className="text-sm font-medium">
          {transaction.value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </b>

        <Button
          size="icon"
          variant="ghost"
          onClick={() => handleDeleteTransaction(transaction.id)}
        >
          <Trash2 className="size-4 text-red-600" />
        </Button>
      </div>
    </div>
  )
}
