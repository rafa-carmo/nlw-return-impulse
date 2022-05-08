import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { 
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity
 } from 'react-native';

import { captureScreen } from 'react-native-view-shot'
import * as FileSystem from 'expo-file-system'

import { styles } from './styles';
import { theme } from '../../theme/index';
import { FeedbackType } from '../Widget';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';
import { useState } from 'react';
import { api } from '../../libs/api';

interface FormProps {
  feedbackType: FeedbackType
  onFeedbackTypeReset: () => void
  onFeedbackSent: () => void
}

export function Form({ feedbackType, onFeedbackTypeReset, onFeedbackSent }: FormProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [ isSendingFeedback, setIsSendingFeedback] = useState(false)
  const [ comment, setComment ] = useState('')

  function handleScreenshot() {
    captureScreen({
      format: 'png',
      quality: 0.8
    }).then(uri => setScreenshot(uri))
  }

  function handleScreenshotRemove() {
    setScreenshot(null)
  }

  async function handleSendFeedback() {
    if(isSendingFeedback){
      return
    }

    setIsSendingFeedback(true)

    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, {encoding: 'base64'})

    try {

      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment
      })

      setIsSendingFeedback(false)
      onFeedbackSent()


    } catch(error) {
      console.error(error)
      setIsSendingFeedback(false)
    }

  }
  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackTypeReset}>
          <ArrowLeft
            size={24}
            weight='bold'
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        
        <View style={styles.titleContainer}>
          <Image 
            source={feedbackTypeInfo.image} 
            style={styles.image}
          />
          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>

        </View>
      </View>

      <TextInput 
        multiline
        style={styles.input}
        placeholder={feedbackTypeInfo.placeholder}
        placeholderTextColor={theme.colors.text_secondary}
        onChangeText={setComment}
      />
      <View style={styles.footer}>
        <ScreenshotButton screenshot={screenshot} onTakeShot={handleScreenshot} onRemoveShot={handleScreenshotRemove} />
        <Button isLoading={isSendingFeedback} onPress={handleSendFeedback} />
      </View>
    </View>
  );
}