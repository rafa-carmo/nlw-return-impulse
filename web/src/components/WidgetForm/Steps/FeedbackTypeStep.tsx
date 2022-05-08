import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import * as S from './styles'

type FeedbackTypeStepProps = {
    onFeedbackTypeChange: (type: FeedbackType) => void
}

export function FeedbackTypeStep({onFeedbackTypeChange}:FeedbackTypeStepProps) {
  return (
      <>
    <S.Header>
        Deixe seu feedback
        <CloseButton />
    </S.Header>
    <S.Content>
    {Object.entries(feedbackTypes).map(([key, value])=> (
        <S.Button 
            key={key}
            onClick={()=>onFeedbackTypeChange(key as FeedbackType)}
        >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
        </S.Button>
    ))}
    </S.Content>
    </>
  )
}
