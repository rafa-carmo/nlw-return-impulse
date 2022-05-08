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
text-zinc-400
hover:text-zinc-100
transition-colors
bg-right-bottom
bg-cover
`


export const ScrenshotTakeButton = tw.button`
p-2
bg-zinc-800
rounded-md
border-transparent
hover:bg-zinc-700
transition-colors
focus:outline-none
focus:ring-2
focus:ring-offset-2
focus:ring-offset-zinc-900
focus-ring-brand-500
text-zinc-100
`