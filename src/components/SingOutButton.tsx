'use client'

import { FC, useState } from 'react'
import Button from '@/ui/Button'
import { signOut } from 'next-auth/react'
import { toast } from '@/ui/Toast'

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const SignUserOut = async () => {
    setIsLoading(true)

    try {
      await signOut()
    } catch (error) {
      toast({
        title: 'Error SignOutg in',
        message: 'Plese try again later',
        type: 'error',
      })
    }
  }

  return (
    <Button onClick={SignUserOut} isLoading={isLoading}>
      Sign Out
    </Button>
  )
}

export default SignOutButton
