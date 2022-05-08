import { Popover } from '@headlessui/react'
import tw from 'tailwind-styled-components'

export const Wrapper = tw(Popover.Button)`
    top-5
    right-5
    absolute
    text-zinc-400
    hover:text-zinc-100
`