import { Moon, Sun } from 'phosphor-react'
import { Switch } from '@headlessui/react'
import * as S from './styles'

interface DarkLinghtButtonProps {
    onChangeTheme: () => void
    themeIsDark: boolean
}

export function DarkLinghtButton({onChangeTheme, themeIsDark}:DarkLinghtButtonProps) {
  return (
    <S.Wrapper onClick={onChangeTheme}>
        <S.SwitchComponent
        checked={themeIsDark}
        onChange={onChangeTheme}
      >
        <S.SwitchContent 
          aria-hidden="true"
          className={`${themeIsDark ? 'translate-x-9' : 'translate-x-0'}`}
          >
          {
            themeIsDark ? (

                <Moon className='w-6 h-6' />
            ) : (
                <Sun className='w-6 h-6' />
            )
        }
          </S.SwitchContent>
      </S.SwitchComponent>
        
    </S.Wrapper>
  )
}
