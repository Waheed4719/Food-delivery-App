import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
  constants,
  dummyData,
} from '../constants';

const HorizontalListCard = ({item, index}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.lightGray2,
        // height: 320,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        width: SIZES.width - SIZES.padding * 2,
        padding: SIZES.base,
        marginBottom: 10,
        marginHorizontal: 10,
        marginLeft: index == 0 ? 0 : 10,
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image style={{height: 130, width: 130}} source={item.image} />
        <View style={{}}>
          <Text style={{...FONTS.h3, color: COLORS.black}}>{item.name}</Text>
          <Text style={{...FONTS.body4, color: COLORS.gray}}>
            {item.description}
          </Text>
          <Text style={{...FONTS.h2, color: COLORS.black, marginTop: 10}}>
            ${item.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(HorizontalListCard, (prevProps, nextProps) => {
  return true;
});
