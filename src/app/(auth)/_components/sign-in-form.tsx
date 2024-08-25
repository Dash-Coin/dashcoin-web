'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInForm>({
    mode: 'onBlur',
    resolver: zodResolver(signInFormSchema),
  })

  async function handleSignIn({ email, password }: SignInForm) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

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
          className="md:h-12"
          {...register('email')}
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-0.5">
        <Label htmlFor="password">Senha</Label>
        <PasswordInput name="password" register={register} />
        {errors.password && (
          <p className="text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full md:h-12">
        {isSubmitting ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          'Entrar no sistema'
        )}
      </Button>
    </form>
  )
}
