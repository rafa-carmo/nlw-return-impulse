import { CloseButton } from '../CloseButton'
import * as S from './styles'

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from 'react'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep'

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'A bug image'
        },
        placeholder: 'Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'A Lamp image'
        },
        placeholder: 'Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!'
    },
    OTHER: {
        title: 'Outros',
        image: {
            source: thoughtImageUrl,
            alt: 'A cloud image'
        },
        placeholder: 'Queremos te ouvir. O que você gostaria de nos dizer? '
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)
    function handleResetFeedback() {
        setFeedbackType(null)
        setFeedbackSent(false)
    }
    return (
        <S.Wrapper>
            {feedbackSent ? (
                <FeedbackSuccessStep onSendAnotherFeedback={handleResetFeedback} />
            ): (
            <> 
                {!feedbackType ? (
                    
                    <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
                ) : (
                    <FeedbackContentStep 
                        feedbackType={feedbackType} 
                        onFeedbackRestartRequested={handleResetFeedback} 
                        onFeedbackSent={() => setFeedbackSent(true)}
                    />
                    )
                }
            </>
            )}
            <S.Footer>Feito com ♥ pela <S.Link>Rocketseat</S.Link></S.Footer>
        </S.Wrapper>
    )
}