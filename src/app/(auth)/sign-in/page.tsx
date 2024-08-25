import { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { SignInForm } from '../_components/sign-in-form'

export const metadata: Metadata = {
  title: 'Entrar',
}

export default function SignInPage() {
  return (
    <div className="max-w-lg w-full flex flex-col gap-6 lg:gap-8">
      <div className="space-y-1 md:space-y-2 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">
          Bem-vindo ao Dashcoin!
        </h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Preencha os dados abaixo para fazer login no sistema.
        </p>
      </div>

      <SignInForm />

      <div className="flex items-center gap-3">
        <Separator className="h-px flex-1 bg-muted-foreground/25" />
        <span className="text-xs md:text-sm text-muted-foreground">OU</span>
        <Separator className="h-px flex-1 bg-muted-foreground/25" />
      </div>

      <Button variant="outline" className="md:h-12" asChild>
        <Link href="/sign-up">Cadastre-se</Link>
      </Button>
    </div>
  )
}
