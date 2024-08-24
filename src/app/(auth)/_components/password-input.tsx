import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface PasswordInputProps<T extends FieldValues> {
  name: Path<T>
  register: UseFormRegister<T>
}

export function PasswordInput<T extends FieldValues>({
  name,
  register,
}: PasswordInputProps<T>) {
  const [isOcult, setIsOcult] = useState(true)

  function handleViewPassword() {
    setIsOcult((prev) => !prev)
  }

  return (
    <div className="relative">
      <Input
        id={name}
        type={isOcult ? 'password' : 'text'}
        placeholder="Digite sua senha"
        className="h-12"
        {...register(name)}
      />

      <Button
        type="button"
        size="icon"
        variant="ghost"
        onClick={handleViewPassword}
        className="absolute top-0 right-0 size-12"
      >
        {isOcult ? <Eye className="size-5" /> : <EyeOff className="size-5" />}
      </Button>
    </div>
  )
}
