'use client'

import { FC, FormEvent, useState } from 'react'
import { toast } from '@/ui/Toast'
import { createApiKey } from '@/helpers/create-api-key'
import { Key } from 'lucide-react'
import LargeHeading from '@/ui/LargeHeading'
import Paragraph from '@/ui/Paragraph'
import CopyButton from '@/components/CopyButton'
import { Input } from '@/ui/Input'
import Button from './ui/Button'

const RequestApiKey: FC = () => {
  const [isCreating, setIsCreating] = useState<boolean>(false)
  const [apiKey, setApiKey] = useState<string | null>(null)

  const createNewApiKey = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsCreating(true)
    try {
      const generatedApiKey = await createApiKey()
      setApiKey(generatedApiKey)
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: 'Error',
          type: 'error',
          message: error.message,
        })
        return
      }
      toast({
        title: 'Error',
        type: 'error',
        message: 'Something went wrong.',
      })
    } finally {
      setIsCreating(false)
    }
  }

  return (
    <div className='container md:max-w-2xl'>
      <div className='flex flex-col gap-6 items-center'>
        <Key className='mx-auto h-12 w-12 text-gray-400' />
        <LargeHeading>Request Your API Key</LargeHeading>
        <Paragraph>You haven&apos;t requested an API key yet.</Paragraph>
      </div>

      <form
        action='#'
        onSubmit={createNewApiKey}
        className='mt-6 sm:flex sm:items-center'
      >
        <div className='realtive rounded-md shadow-md sm:min-w-0 sm:flex-1'>
          {apiKey ? (
            <CopyButton
              valueToCopy={apiKey}
              type='button'
              className='absolute inset-y-0 right-0 animate-in fade-in duration-300'
            />
          ) : null}
          <Input
            readOnly
            value={apiKey ?? ''}
            placeholder='Reqeust an API key to display it here!'
          />
        </div>
        <div className='mt-3 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0'>
          <Button disabled={!!apiKey} isLoading={isCreating}>
            Request Key
          </Button>
        </div>
      </form>
    </div>
  )
}

export default RequestApiKey
