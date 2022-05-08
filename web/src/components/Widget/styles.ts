import tw from "tailwind-styled-components"
import { Popover } from '@headlessui/react'

export const Wrapper = tw(Popover)`
    absolute
    bottom-4
    right-4
    md:bottom-8
    md:right-8
    flex
    flex-col
    items-end
`

export const Button = tw(Popover.Button)`
    bg-brand-500
    rounded-full
    px-3
    h-12
    text-white
    flex
    items-center
    group
`

export const FeedbackSpan = tw.span`
    max-w-0 
    overflow-hidden 
    group-hover:max-w-xs 
    transition-all 
    duration-500 
    ease-linear
`

export const ContentPopover = tw(Popover.Panel)`
`