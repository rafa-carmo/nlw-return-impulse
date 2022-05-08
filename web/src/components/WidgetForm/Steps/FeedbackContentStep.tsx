import { CloseButton } from "../../CloseButton";
import * as S from './styles'
import { FeedbackType, feedbackTypes } from '..';
import { ArrowLeft } from "phosphor-react";
import { ScreenshotButton } from "../ScreenshotButton";
import { FormEvent, useState } from "react";
import { api } from '../../../lib/api';
import { Loading } from '../../Loading/index';


type FeedbackContentStepProps = {
    feedbackType: FeedbackType
    onFeedbackRestartRequested: () => void
    onFeedbackSent: () => void
}

export function FeedbackContentStep({feedbackType, onFeedbackRestartRequested, onFeedbackSent}:FeedbackContentStepProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('')
    const [ isSendingFeedback, setIsSendingFeedback ] = useState(false)
    const feedbackTypeInfo = feedbackTypes[feedbackType]

    async function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault()
        setIsSendingFeedback(true)
        await api.post('/feedbacks', {
            type: feedbackType,
            comment,
            screenshot
        })
        setIsSendingFeedback(false)
        onFeedbackSent()
    }

  return (
      <>
    <S.Header>
        <S.BackButton onClick={onFeedbackRestartRequested}>
            <ArrowLeft weight='bold' className="h-4 w-4" />
        </S.BackButton>
        <S.HeaderTitleSpan>
            <S.HeaderImage src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
            {feedbackTypeInfo.title}
            <CloseButton />
        </S.HeaderTitleSpan>
    </S.Header>
    <S.Form onSubmit={handleSubmitFeedback}>
        <S.Textarea onChange={(event:React.ChangeEvent<HTMLTextAreaElement>,) => setComment(event.target.value)} placeholder={feedbackTypeInfo.placeholder} />

    <S.ButtonsContainerFooter>
        <ScreenshotButton screenshot={screenshot} onScreenshotTook={setScreenshot} />
        <S.SubmitButton type="submit" disabled={comment.length===0 || isSendingFeedback}> {isSendingFeedback ? (<Loading />) : 'Enviar feedback' }  </S.SubmitButton>
    </S.ButtonsContainerFooter>
    </S.Form>
      </>
  )
}
