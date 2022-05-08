
import { ChatTeardropDots } from 'phosphor-react'
import { WidgetForm } from '../WidgetForm'
import * as S from './styles'
export function Widget() {
  return (
    <S.Wrapper>
      <S.ContentPopover>
        <WidgetForm />
      </S.ContentPopover>
      <S.Button>
        <ChatTeardropDots className='w-6 h-6' />
        <S.FeedbackSpan>
          <span className='pl-2'></span>
          Feedback
        </S.FeedbackSpan>
      </S.Button>
    </S.Wrapper>
  )
}

