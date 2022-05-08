import { X } from 'phosphor-react'
import * as S from './styles'

export function CloseButton() {
    return (
        <S.Wrapper title="Close feedback form">
            <X weight='bold' className='w-4 h-4'/>
        </S.Wrapper>
    )
}