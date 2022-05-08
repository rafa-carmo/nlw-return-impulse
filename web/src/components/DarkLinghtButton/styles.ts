import { Switch } from '@headlessui/react'
import tw from 'tailwind-styled-components'

export const Wrapper = tw.main`
    absolute
    top-4
    right-4
    text-zinc-800
    dark:text-zinc-100
`

export const SwitchComponent = tw(Switch)`
    relative 
    inline-flex 
    h-[38px]
    w-[74px]
    shrink-0
    cursor-pointer
    rounded-full
    border-2
    border-transparent
    duration-300
    ease-in-out
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-white
    focus-visible:ring-opacity-75
    bg-zinc-900
    dark:bg-white
    transition-all
`

export const SwitchContent = tw.div`
    pointer-events-none 
    h-[34px] 
    w-[34px]
    transform 
    rounded-full 
    bg-white
    dark:bg-zinc-900
    shadow-lg 
    ring-0 
    transition 
    duration-200 
    ease-in-out
    flex
    items-center
    justify-center        
`