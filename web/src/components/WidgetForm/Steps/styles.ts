import tw from 'tailwind-styled-components'

export const Header = tw.header`
    text-xl
    leading-6
    
`

export const BackButton = tw.button`
    top-5
    left-5
    absolute
    dark:text-zinc-400
    dark:hover:text-zinc-100
    text-zinc-500
    hover:text-zinc-800
`

export const HeaderTitleSpan = tw.span`
    flex
    items-center
    gap-2
`

export const HeaderImage = tw.img`
    w-6
    h-6
`

export const Content = tw.div`
    flex
    py-8
    gap-2
    w-full
`
export const Form = tw.form`
    my-4
    w-full
`
export const Textarea = tw.textarea`
    min-w-[304px]
    w-full
    min-h-[112px]
    text-sm
    dark:placeholder-zinc-400
    placeholder-zinc-500
    dark:text-zinc-100
    text-zinc-800
    dark:border-zinc-600
    border-zinc-300
    bg-transparent
    rounded-md
    focus:border-brand-500
    focus:ring-brand-500
    focus:ring-1
    focus:outline-none
    resize-none
    
    scrollbar-thin
    dark:scrollbar-thumb-zinc-700
    scrollbar-thumb-zinc-200
    scrollbar-track-transparent
`

export const Button = tw.button`
    dark:bg-zinc-800
    bg-zinc-100
    rounded-lg
    py-5
    w-24
    flex
    flex-1
    flex-col
    items-center
    gap-2
    border-2
    border-transparent
    hover:border-brand-500
    focus:border-brand-500
    focus:outline-none

`

export const ButtonsContainerFooter = tw.footer`
    flex
    gap-2
    mt-2
    w-full
`



export const SubmitButton = tw.button`
    p-2
    bg-brand-500
    rounded-md
    border-transparent
    flex
    flex-1
    justify-center
    items-center
    text-sm
    hover:bg-brand-300
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    text-zinc-100
    dark:focus:ring-offset-zinc-900
    focus:ring-offset-white
    focus-ring-brand-500
    transition-colors
    disabled:opacity-50
    disabled:hover:bg-brand-500
`