import {
  View,
  Text,
  Image,
  FlatList,
  Alert,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
} from 'react-native'
import React, {useEffect} from 'react'
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
  constants,
  dummyData,
} from '../constants'
import Animated from 'react-native-reanimated'
import {VerticalListCard, HorizontalListCard} from '../components'

function Favourites ({navigation, animationStyles}) {


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

      
    </Animated.View>
  )
}

export default Favourites
