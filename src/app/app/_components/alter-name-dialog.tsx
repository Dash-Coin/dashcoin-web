import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
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
import { alterUsername } from '@/http/alter-username'
import { fetchProfile } from '@/http/fetch-profile'

const nameFormSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
})

type NameForm = z.infer<typeof nameFormSchema>

export function AlterNameDialog() {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
    staleTime: Infinity,
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NameForm>({
    mode: 'onBlur',
    resolver: zodResolver(nameFormSchema),
    values: {
      name: data?.user.username ?? '',
    },
  })

  const { mutateAsync: alterUsernameFn } = useMutation({
    mutationFn: alterUsername,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
    },
  })

  async function handleAlterName({ name }: NameForm) {
    try {
      await alterUsernameFn({ username: name })

      toast.success('Username alterado com sucesso!')
    } catch (err) {
      toast.error('Verifique e tente novamente.')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Alterar nome</DialogTitle>
        <DialogDescription>
          Preencha o campo abaixo com seu novo nome.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleAlterName)}>
        <div className="space-y-0.5">
          <Label htmlFor="name">Novo nome</Label>
          <Input
            id="name"
            type="text"
            placeholder="Digite seu novo nome"
            {...register('name')}
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name.message}</p>
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
              'Salvar'
            )}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
