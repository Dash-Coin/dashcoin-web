import { HTMLAttributes } from 'react'

interface ItemOfListProps extends HTMLAttributes<HTMLDivElement> {
  description: string
  value: number
}

export function ItemOfList({ description, value, ...props }: ItemOfListProps) {
  return (
    <div className="px-3 py-2 flex items-center gap-4 border-b" {...props}>
      <p className="text-sm">{description}</p>
      <b className="ml-auto text-sm font-medium">
        {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </b>
    </div>
  )
}
