import tw from 'tailwind-styled-components';

export const ScreenshotButtonImage = tw.button`
p-1
w-10
h-10
rounded-md
border-transparent
flex
justify-end
items-end
dark:text-zinc-400
text-zinc-500
dark:hover:text-zinc-100
hover:text-zinc-800
transition-colors
bg-right-bottom
bg-cover
`


export const ScrenshotTakeButton = tw.button`
p-2
dark:bg-zinc-800
bg-zinc-100
rounded-md
border-transparent
dark:hover:bg-zinc-700
hover:bg-zinc-200
transition-colors
focus:outline-none
focus:ring-2
focus:ring-offset-2
dark:focus:ring-offset-zinc-900
focus:ring-offset-zinc-white
focus-ring-brand-500
dark:text-zinc-100
text-zinc-800
`