import { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { SignUpForm } from '../_components/sign-up-form'

export const metadata: Metadata = {
  title: 'Cadastre-se',
}

export default function SignUpPage() {
  return (
    <div className="max-w-lg w-full flex flex-col gap-6">
      <div className="space-y-1 md:space-y-2 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">
          Faça seu cadastro aqui!
        </h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Preencha os dados abaixo para fazer seu cadastro no sistema.
        </p>
      </div>

      <SignUpForm />

      <div className="flex items-center gap-3">
        <Separator className="h-px flex-1 bg-muted-foreground/25" />
        <span className="text-xs md:text-sm text-muted-foreground">OU</span>
        <Separator className="h-px flex-1 bg-muted-foreground/25" />
      </div>

      <Button variant="outline" className="md:h-12" asChild>
        <Link href="/sign-in">Entre com uma conta</Link>
      </Button>
    </div>
  )
}
