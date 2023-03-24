import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import React from 'react'
import {COLORS, FONTS, SIZES} from '../constants'

export default function TextField ({
  placeholder,
  onChangeText,
  style,
  containerStyles,
  children,
  type,
  errorText,
}) {
  const [state, setState] = React.useState({
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
    paddingHorizontal: 15,
  })

  const onFocus = () => {}

  const onBlur = () => {}
  return (
    <KeyboardAvoidingView behavior='position' keyboardVerticalOffset='30'>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss()
        }}>
        <View
          style={{
            ...state,
            ...containerStyles,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize={'none'}
            onFocus={onFocus}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholderTextColor={'rgba(0,0,0,0.2)'}
            style={{
              ...style,
              ...FONTS.body3,
              width: '90%',
              color: COLORS.black,
              textDecorationLine: 'none',
            }}
            placeholder={placeholder}
            onChangeText={onChangeText}
            secureTextEntry={type ? type : false}
          />
          {children}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
