import { PropsWithChildren } from 'react'

export default function AuthenticationLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen grid xl:grid-cols-2">
      <div className="hidden xl:block bg-auth bg-center bg-cover" />
      <main className="p-6 lg:p-10 flex justify-center items-center">
        {children}
      </main>
    </div>
  )
}
