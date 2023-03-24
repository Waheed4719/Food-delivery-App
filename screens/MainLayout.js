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
} from 'react-native'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
  constants,
  dummyData,
} from '../constants'
import {setSelectedTab} from '../redux/actions/TabActions'
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated'
import LinearGradient from 'react-native-linear-gradient'
import Home from './Home'
import {Header} from '../components'
import MyWallet from './MyWallet'
import Favourites from './Favourites'
import Settings from './Settings'

function MainLayout ({navigation, drawerAnimationStyles}) {
  const dispatch = useDispatch()
  const {selectedTab} = useSelector(state => state.tabs)

  const HomeTabFlex = useSharedValue(1)
  const HomeTabColor = useSharedValue(COLORS.white)
  const SearchTabFlex = useSharedValue(1)
  const SearchTabColor = useSharedValue(COLORS.white)
  const CartTabFlex = useSharedValue(1)
  const CartTabColor = useSharedValue(COLORS.white)
  const NotificationTabFlex = useSharedValue(1)
  const NotificationTabColor = useSharedValue(COLORS.white)
  const FavouriteTabFlex = useSharedValue(1)
  const FavouriteTabColor = useSharedValue(COLORS.white)

  //Reanimated Animated Style

  const HomeTabFlexStyle = useAnimatedStyle(() => {
    return {
      flex: HomeTabFlex.value,
    }
  })
  const HomeTabColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: HomeTabColor.value,
    }
  })
  const SearchTabFlexStyle = useAnimatedStyle(() => {
    return {
      flex: SearchTabFlex.value,
    }
  })
  const SearchTabColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: SearchTabColor.value,
    }
  })
  const CartTabFlexStyle = useAnimatedStyle(() => {
    return {
      flex: CartTabFlex.value,
    }
  })
  const CartTabColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: CartTabColor.value,
    }
  })

  const NotificationTabFlexStyle = useAnimatedStyle(() => {
    return {
      flex: NotificationTabFlex.value,
    }
  })
  const NotificationTabColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: NotificationTabColor.value,
    }
  })
  const FavouriteTabFlexStyle = useAnimatedStyle(() => {
    return {
      flex: FavouriteTabFlex.value,
    }
  })
  const FavouriteTabColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: FavouriteTabColor.value,
    }
  })

  useEffect(() => {
    if (selectedTab == 'Home') {
      HomeTabFlex.value = withTiming(4, {duration: 500})
      HomeTabColor.value = withTiming(COLORS.primary, {duration: 500})
    } else {
      HomeTabFlex.value = withTiming(1, {duration: 500})
      HomeTabColor.value = withTiming(COLORS.white, {duration: 500})
    }

    if (selectedTab == 'Search') {
      SearchTabFlex.value = withTiming(4, {duration: 500})
      SearchTabColor.value = withTiming(COLORS.primary, {duration: 500})
    } else {
      SearchTabFlex.value = withTiming(1, {duration: 500})
      SearchTabColor.value = withTiming(COLORS.white, {duration: 500})
    }

    if (selectedTab == 'Cart') {
      CartTabFlex.value = withTiming(4, {duration: 500})
      CartTabColor.value = withTiming(COLORS.primary, {duration: 500})
    } else {
      CartTabFlex.value = withTiming(1, {duration: 500})
      CartTabColor.value = withTiming(COLORS.white, {duration: 500})
    }

    if (selectedTab == 'Notifications') {
      NotificationTabFlex.value = withTiming(4, {duration: 500})
      NotificationTabColor.value = withTiming(COLORS.primary, {duration: 500})
    } else {
      NotificationTabFlex.value = withTiming(1, {duration: 500})
      NotificationTabColor.value = withTiming(COLORS.white, {duration: 500})
    }

    if (selectedTab == 'Favourites') {
      FavouriteTabFlex.value = withTiming(4, {duration: 500})
      FavouriteTabColor.value = withTiming(COLORS.primary, {duration: 500})
    } else {
      FavouriteTabFlex.value = withTiming(1, {duration: 500})
      FavouriteTabColor.value = withTiming(COLORS.white, {duration: 500})
    }
  }, [selectedTab])

  const BottomTab = ({
    to,
    label,
    isFocused,
    icon,
    outerContainerStyle,
    innerContainerStyle,
  }) => {
    const onPress = async to => {
      await dispatch(setSelectedTab(to))
    }

    return (
      <TouchableWithoutFeedback onPress={() => onPress(to)}>
        <Animated.View
          style={[
            {
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',

              // backgroundColor: isFocused ? COLORS.primary : null,
            },
            outerContainerStyle,
          ]}>
          <Animated.View
            style={[
              {
                flexDirection: 'row',
                width: '90%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                borderRadius: 25,
              },
              innerContainerStyle,
            ]}>
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: isFocused ? COLORS.white : COLORS.gray,
              }}
              resizeMode='contain'
              source={icon}
            />
            {isFocused && (
              <Text
                numberOfLines={1}
                style={{
                  ...FONTS.h3,
                  marginLeft: SIZES.base,
                  color: COLORS.white,
                }}>
                {label}
              </Text>
            )}
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }

  const BottomBar = () => {
    const onPress = async to => {
      await dispatch(setSelectedTab(to))
      // navigation.navigate(to)
    }
    return (
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          paddingHorizontal: SIZES.padding,
          backgroundColor: 'white',
          // paddingBottom: 10,
          alignItems: 'center',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <BottomTab
          to='Home'
          label={'Home'}
          isFocused={selectedTab == 'Home'}
          icon={icons.home}
          outerContainerStyle={HomeTabFlexStyle}
          innerContainerStyle={HomeTabColorStyle}
        />
        <BottomTab
          to='Search'
          label={'Search'}
          isFocused={selectedTab == 'Search'}
          icon={icons.search}
          outerContainerStyle={SearchTabFlexStyle}
          innerContainerStyle={SearchTabColorStyle}
        />
        <BottomTab
          to='Cart'
          label={'Cart'}
          isFocused={selectedTab == 'Cart'}
          icon={icons.cart}
          outerContainerStyle={CartTabFlexStyle}
          innerContainerStyle={CartTabColorStyle}
        />
        <BottomTab
          to='Notifications'
          label={'Notifications'}
          isFocused={selectedTab == 'Notifications'}
          icon={icons.notification}
          outerContainerStyle={NotificationTabFlexStyle}
          innerContainerStyle={NotificationTabColorStyle}
        />
        <BottomTab
          to='Favourites'
          label={'Favourites'}
          isFocused={selectedTab == 'Favourites'}
          icon={icons.favourite}
          outerContainerStyle={FavouriteTabFlexStyle}
          innerContainerStyle={FavouriteTabColorStyle}
        />
      </View>
    )
  }

  return (
    <Animated.View
      style={{
        flex: 1,
        width: SIZES.width,
        backgroundColor: COLORS.white,
        overflow: 'hidden',
        ...drawerAnimationStyles,
      }}>
      {/* Header Component */}
      <Header
        navigation={navigation}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        dispatch={dispatch}
      />

      <View style={{flex: 1}}>
        {selectedTab == 'Home' && <Home />}
        {selectedTab == 'MyWallet' && <MyWallet />}
        {selectedTab == 'Profile' && <Profile />}
        {selectedTab == 'Favourites' && <Favourites />}
        {selectedTab == 'Settings' && <Settings />}
      </View>

      {/* BottomBar Component */}
      {/* {['Home', 'MyWallet', 'Search', 'Profile', 'Favourites'].includes(selectedTab) && ( */}
        <View style={{height: 90, justifyContent: 'flex-end'}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 4}}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: -20,
              height: 90,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
          />
          <BottomBar />
        </View>
      {/* )} */}
    </Animated.View>
  )
}

export default MainLayout
