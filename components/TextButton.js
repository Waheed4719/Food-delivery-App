import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import {FONTS, COLORS} from '../constants'

const TextButton = ({
  contentContainerStyle,
  disabled,
  label,
  labelStyle,
  onPress,
  leftIcon,rightIcon
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        ...contentContainerStyle,
      }}
      disabled={disabled}
      onPress={onPress}>
        {leftIcon}
      <Text
        style={{
          color: COLORS.secondary,
          ...FONTS.h3,
          ...labelStyle,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default TextButton
