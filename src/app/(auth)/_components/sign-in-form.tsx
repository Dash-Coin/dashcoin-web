'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { PasswordInput } from './password-input'

const signInFormSchema = z.object({
  email: z.string().email('E-mail inválido').min(1, 'E-mail obrigatório'),
  password: z
    .string()
    .min(1, 'E-mail obrigatório')
    .min(6, 'Senha deve ter pelo menos 6 caracteres'),
})

type SignInForm = z.infer<typeof signInFormSchema>

export function SignInForm() {
  const { register, handleSubmit } = useForm<SignInForm>({
    mode: 'onBlur',
    resolver: zodResolver(signInFormSchema),
  })

  function handleSignIn({ email, password }: SignInForm) {
    console.log({ email, password })
  }

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className="space-y-5">
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
        Entrar no sistema
      </Button>
    </form>
  )
}
