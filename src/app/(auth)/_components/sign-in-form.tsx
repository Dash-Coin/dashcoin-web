'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Cookies from 'js-cookie'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn } from '@/http/sign-in'

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
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInForm>({
    mode: 'onBlur',
    resolver: zodResolver(signInFormSchema),
  })

  async function handleSignIn({ email, password }: SignInForm) {
    try {
      const { token, userId } = await signIn({ email, password })

      Cookies.set('token', token, {
        expires: 7,
      })

      Cookies.set('user', userId.toString(), {
        expires: 7,
      })

      router.push('/app')
    } catch (err) {
      toast.error('Email ou senha incorretos')
    }
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
