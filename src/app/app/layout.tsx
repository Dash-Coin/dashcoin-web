import { PropsWithChildren } from 'react'

import { Separator } from '@/components/ui/separator'

import { Header } from './_components/header'

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen">
      <main className="max-w-3xl px-4 py-10 mx-auto flex flex-col gap-6">
        <Header />

        <Separator className="w-full h-px bg-muted-foreground/25" />

        {children}
      </main>
    </div>
  )
}
