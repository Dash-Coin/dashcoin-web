import { PropsWithChildren } from 'react'

export default function AuthenticationLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen grid grid-cols-2">
      <div className="bg-auth bg-center bg-cover" />
      <main className="p-10 flex justify-center items-center">{children}</main>
    </div>
  )
}
