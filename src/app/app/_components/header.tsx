'use client'

import Image from 'next/image'

import { DetailsDropdown } from './details-dropdown'

export function Header() {
  return (
    <header className="px-3 flex items-center gap-4">
      <Image src="/logoIcon.svg" width={40} height={40} alt="Dashcoin Icon" />

      <span className="text-sm text-muted-foreground truncate">
        Usuário:{' '}
        <span className="text-primary">Richard Rodrigues da Silva</span>
      </span>

      <DetailsDropdown />
    </header>
  )
}
