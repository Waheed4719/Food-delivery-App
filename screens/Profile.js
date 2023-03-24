import {View, Text, } from 'react-native'
import React from 'react'
import {COLORS, FONTS, SIZES} from '../constants'
import Animated from 'react-native-reanimated'

function Profile ({navigation, animationStyles}) {
  return (
    <Animated.View
      style={{
        flex: 1,
        width: SIZES.width,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...animationStyles,
      }}>
      <Text style={{...FONTS.h3, color: COLORS.black}}>Check your profile page</Text>
    </Animated.View>
  )
}

export default Profile
