import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { createTransaction } from '@/http/create-transaction'
import { fetchCategories } from '@/http/fetch-categories'

const revenueFormSchema = z.object({
  description: z.string().min(1, 'Descrição obrigatória'),
  category: z.string().min(1, 'Categoria obrigatória'),
  value: z.coerce.number().min(1, 'Valor obrigatório'),
})

type RevenueForm = z.infer<typeof revenueFormSchema>

export function CreateRevenueDialog() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RevenueForm>({
    mode: 'onBlur',
    resolver: zodResolver(revenueFormSchema),
  })

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  })

  async function handleCreateRevenue({
    description,
    category,
    value,
  }: RevenueForm) {
    await createTransaction({ description, category, type: true, value })

    reset()
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Nova receita</DialogTitle>
        <DialogDescription>
          Preencha os campos abaixos com dados que deseja.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleCreateRevenue)} className="space-y-5">
        <div className="space-y-0.5">
          <Label htmlFor="description">Descrição</Label>
          <Input
            id="description"
            type="text"
            placeholder="Digite uma descrição"
            autoComplete="off"
            {...register('description')}
          />
          {errors.description && (
            <p className="text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>

        <div className="space-y-0.5">
          <Label htmlFor="category">Categoria</Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => {
              return (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue
                      id="category"
                      placeholder="Selecione..."
                      {...field}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {categories?.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )
            }}
          />
          {errors.category && (
            <p className="text-sm text-red-600">{errors.category.message}</p>
          )}
        </div>

        <div className="space-y-0.5">
          <Label htmlFor="value">Valor</Label>
          <Input
            id="value"
            type="text"
            placeholder="Digite o valor da receita"
            autoComplete="off"
            {...register('value')}
          />
          {errors.value && (
            <p className="text-sm text-red-600">{errors.value.message}</p>
          )}
        </div>

        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button variant="outline" className="flex-1">
              Cancelar
            </Button>
          </DialogClose>

          <Button type="submit" disabled={isSubmitting} className="flex-1">
            {isSubmitting ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              'Adicionar'
            )}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
