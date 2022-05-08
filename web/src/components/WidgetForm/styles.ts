import tw from "tailwind-styled-components"

export const Wrapper = tw.div`
    dark:bg-zinc-900
    bg-white
    p-4
    relative
    rounded-2xl
    mb-4
    flex
    flex-col
    items-center
    shadow-lg
    w-[calc(100vw-2rem)]
    md:w-auto
    text-zinc-800
    dark:text-zinc-100
`



export const Footer = tw.footer`
    text-xs
    text-zinc-500
    dark:text-zinc-400
    my-2
`

export const Link = tw.a`
    underline
    underline-offset-2
`
