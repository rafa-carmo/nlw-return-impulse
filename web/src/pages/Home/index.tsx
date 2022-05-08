import { DarkLinghtButton } from '../../components/DarkLinghtButton'
import * as S from './styles'
import { useState } from 'react';

interface HomeProps {
    children: React.ReactNode
}

export function Home({ children }:HomeProps) {

    const [darkMode, setDarkMode] = useState(true)
    function handleChangeThemeMode(){
        setDarkMode(!darkMode)
    }
  return (
    <S.Wrapper className={darkMode && 'dark'}>
        <S.Container>
            <DarkLinghtButton onChangeTheme={handleChangeThemeMode} themeIsDark={darkMode} />
            {children}
        </S.Container>
    </S.Wrapper>
  )
}
