'use client'

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

import { fetchProfile } from '@/http/fetch-profile'

import { DetailsDropdown } from './details-dropdown'

export function Header() {
  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
    staleTime: Infinity,
  })

  return (
    <header className="px-3 flex items-center gap-4">
      <Image src="/logoIcon.svg" width={40} height={40} alt="Dashcoin Icon" />

      <span className="text-sm text-muted-foreground truncate">
        Usuário: <br />
        <span className="text-primary">{data?.user.username}</span>
      </span>

      <DetailsDropdown />
    </header>
  )
}
