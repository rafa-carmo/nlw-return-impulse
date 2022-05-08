import { Popover } from '@headlessui/react'
import tw from 'tailwind-styled-components'

export const Wrapper = tw(Popover.Button)`
    top-5
    right-5
    absolute
    dark:text-zinc-400
    dark:hover:text-zinc-100
    text-zinc-500
    hover:text-zinc-800
`