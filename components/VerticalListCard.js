import {View, Text, Image, TouchableOpacity} from 'react-native'
import React, {memo} from 'react'
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
  constants,
  dummyData,
} from '../constants'

function VerticalListCard ({item}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.lightGray2,
        height: 320,
        marginRight: 20,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        width: 230,
        padding: SIZES.base,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image source={icons.calories} style={{height: 30, width: 30}} />
          <Text style={{...FONTS.h5, color: COLORS.gray}}>
            {item.calories} calories
          </Text>
        </View>
        <Image
          source={icons.love}
          style={{tintColor: COLORS.primary, height: 20, width: 20}}
        />
      </View>
      <Image style={{height: 180, width: 180}} source={item.image} />
      <Text style={{...FONTS.h3, color: COLORS.black}}>{item.name}</Text>
      <Text style={{...FONTS.body4, color: COLORS.gray}}>
        {item.description}
      </Text>

      <Text style={{...FONTS.h2, color: COLORS.black, marginTop: 10}}>
        ${item.price}
      </Text>
    </TouchableOpacity>
  )
}

export default memo(VerticalListCard)