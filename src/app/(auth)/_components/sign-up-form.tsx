'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { PasswordInput } from './password-input'

const signUpFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Nome obrigatório')
    .min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido').min(1, 'E-mail obrigatório'),
  password: z
    .string()
    .min(1, 'E-mail obrigatório')
    .min(6, 'Senha deve ter pelo menos 6 caracteres'),
})

type SignUpForm = z.infer<typeof signUpFormSchema>

export function SignUpForm() {
  const { register, handleSubmit } = useForm<SignUpForm>({
    mode: 'onBlur',
    resolver: zodResolver(signUpFormSchema),
  })

  function handleSignIn({ name, email, password }: SignUpForm) {
    console.log({ name, email, password })
  }

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className="space-y-5">
      <div className="space-y-0.5">
        <Label htmlFor="name">Nome completo</Label>
        <Input
          id="name"
          type="name"
          placeholder="Digite seu nome completo"
          className="h-12"
          {...register('name')}
        />
      </div>

      <div className="space-y-0.5">
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="email"
          placeholder="exemplo@exemplo.com"
          className="h-12"
          {...register('email')}
        />
      </div>

      <div className="space-y-0.5">
        <Label htmlFor="password">Senha</Label>
        <PasswordInput name="password" register={register} />
      </div>

      <Button type="submit" className="w-full h-12">
        Cadastrar no sistema
      </Button>
    </form>
  )
}
