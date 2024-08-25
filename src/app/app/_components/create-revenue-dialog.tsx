import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
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

const revenueFormSchema = z.object({
  description: z.string().min(1, 'Descrição obrigatória'),
  value: z.coerce.number().min(1, 'Valor obrigatório'),
  isRepeatEveryMonth: z.boolean().default(false),
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

  async function handleCreateRevenue({
    description,
    value,
    isRepeatEveryMonth,
  }: RevenueForm) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log({ description, value, isRepeatEveryMonth })

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

        <div className="flex items-center space-x-2">
          <Controller
            control={control}
            name="isRepeatEveryMonth"
            render={({ field }) => {
              return (
                <Checkbox
                  id={field.name}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )
            }}
          />
          <Label htmlFor="isRepeatEveryMonth">
            Esse valor vai se repetir a cada mês
          </Label>
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
