import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {
    COLORS,
    FONTS,
    SIZES,
    icons,
    images,
    constants,
    dummyData,
  } from '../constants'


const Header = ({contentContainerStyle, navigation, selectedTab}) => {
    return (
      <View
        style={{
          height: 60,
          width: SIZES.width,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.padding,
        }}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={{
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: SIZES.radius,
            borderColor: COLORS.gray2,
            borderWidth: 1,
          }}>
          <Image source={icons.menu} size={22} color={COLORS.gray2} />
        </TouchableOpacity>

        <Text style={{...FONTS.h3, color: COLORS.black}}>
          {selectedTab.toUpperCase()}
        </Text>
        <TouchableOpacity
          style={{borderRadius: SIZES.radius, overflow: 'hidden'}}
          onPress={() => {}}>
          <Image
            source={images.profile}
            style={{height: 40, width: 40}}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
    )
  }

  export default Header