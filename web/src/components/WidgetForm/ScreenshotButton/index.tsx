import { Camera, Trash } from "phosphor-react"
import html2canvas from 'html2canvas'
import { useState } from 'react'
import { Loading } from "../../Loading"

import * as S from './styles'

type ScreenshotButtonProps = {
    onScreenshotTook: (screenshot: string | null) => void
    screenshot: string | null
}

export function ScreenshotButton({ onScreenshotTook, screenshot }:ScreenshotButtonProps) {
    const [isTakenScreenshot, setIsTakenScreenshot] = useState(false)
    async function handleTakeScreenshot() {
        setIsTakenScreenshot(true)
        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL('image/png')
        onScreenshotTook(base64image)
        setIsTakenScreenshot(false)
    }

    if(screenshot){
        return (
            <S.ScreenshotButtonImage style={{backgroundImage: `url('${screenshot}')`}} type="button">
                <Trash weight="fill" onClick={() => onScreenshotTook(null)} />
            </S.ScreenshotButtonImage>
        )
    }

  return (
    <S.ScrenshotTakeButton 
        type='button' 
        onClick={handleTakeScreenshot}
    >
        {isTakenScreenshot ? (
            <Loading />
        ): (

        <Camera className="w-6 h-6" />
        )}
    </S.ScrenshotTakeButton>
  )
}
