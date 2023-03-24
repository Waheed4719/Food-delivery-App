import {View, Text, Image} from 'react-native'
import React, {useEffect} from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer'
import Animated from 'react-native-reanimated'
import {Home, MyWallet, MainLayout} from '.'
import {COLORS, FONTS, SIZES, icons, images} from '../constants'
import {TouchableOpacity} from 'react-native-gesture-handler'
import * as tabActions from '../redux/actions/TabActions'
import {useDispatch, useSelector} from 'react-redux'
import Profile from './Profile'

function CustomDrawer ({navigation}) {
  const dispatch = useDispatch()
  const {selectedTab} = useSelector(state => state.tabs)
  const [progress, setProgress] = React.useState(new Animated.Value(0))
  const Drawer = createDrawerNavigator()

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  })

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  })

  let animationStyles = {
    borderRadius: borderRadius,
    transform: [{scale}],
  }



  const CustomDrawerItem = ({label, icon, style, to}) => {
    let isFocused = selectedTab == to ? true : false
    return (
      <TouchableOpacity
        onPress={async () => {
          await dispatch(tabActions.setSelectedTab(to))
          // if(label=="Home"){
          //   navigation.navigate('Home')
          // }
          // else{
          //   navigation.navigate('MainLayout')
          // }
        }}
        style={{
          flexDirection: 'row',
          // backgroundColor: 'rgba(0,0,0,0.1)',
          marginBottom: SIZES.base,
          borderRadius: SIZES.base,
          paddingLeft: SIZES.radius,
          alignItems: 'center',
          height: 40,
          paddingRight: SIZES.radius,
          backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
        }}>
        <View style={{width: '100%', flexDirection: 'row'}}>
          <Image
            source={icon}
            style={{height: 20, width: 20, tintColor: 'white'}}
          />

          <Text style={{...FONTS.h3, marginLeft: 15, color: COLORS.white}}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  function CustomDrawerHeader () {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={{
          flexDirection: 'row',
          marginVertical: 20,
          height: 40,
        }}>
        <View
          style={{
            borderRadius: SIZES.radius,
            overflow: 'hidden',
            height: 40,
            width: 40,
            marginRight: 15,
          }}>
          <Image
            style={{height: 40, width: 40}}
            resizeMode='contain'
            source={images.profile}
          />
        </View>
        <View>
          <Text style={{...FONTS.h3, color: COLORS.white}}>Red Blade </Text>
          <Text style={{...FONTS.body4, color: COLORS.white2}}>
            View your Profile
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  function CustomDrawerContent ({navigation}) {
    return (
      <DrawerContentScrollView
        scrollEnabled={true}
        contentContainerStyle={{flex: 1}}
        style={{
          flex: 1,
          paddingVertical: SIZES.padding,
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.closeDrawer()}
          style={{width: '100%', alignItems: 'flex-start'}}>
          <Image
            source={icons.cross}
            style={{height: 30, width: 30, tintColor: 'white'}}
          />
        </TouchableOpacity>
        <CustomDrawerHeader />
        <View
          style={{
            justifyContent: 'flex-start',
            flex: 1,
            alignItems: 'flex-start',
            width: '100%',
          }}>
          <CustomDrawerItem label='Home' to='Home' icon={icons.home} />
          <CustomDrawerItem
            label='My Wallet'
            to='MyWallet'
            icon={icons.wallet}
          />
          <CustomDrawerItem label='Notifications' icon={icons.notification} />
          <CustomDrawerItem label='Favourite' icon={icons.favourite} />
          <View
            style={{
              height: 1,
              width: '100%',
              marginVertical: 10,
              marginLeft: 15,
              backgroundColor: COLORS.white2,
            }}></View>
          <CustomDrawerItem label='Track Your Order' icon={icons.location} />
          <CustomDrawerItem label='Coupons' icon={icons.coupon} />
          <CustomDrawerItem label='Settings'  to='Settings' icon={icons.setting} />
          <CustomDrawerItem label='Help Center' icon={icons.help} />
        </View>
        <View
          style={{
            marginBottom: SIZES.padding,
          }}>
          <CustomDrawerItem
            style={{marginTop: 'auto'}}
            label='Logout'
            icon={icons.logout}
          />
        </View>
      </DrawerContentScrollView>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}>
      <Drawer.Navigator
        drawerType='slide'
        drawerPosition='left'
        overlayColor='transparent'
        drawerStyle={{
          flex: 1,
          width: '65%',
          paddingRight: 20,
          backgroundColor: 'transparent',
          zIndex: 1,
        }}
        sceneContainerStyle={{
          backgroundColor: 'transparent',
        }}
        initialRouteName='MainLayout'
        drawerContent={props => {
          setTimeout(() => {
            setProgress(props.progress)
          }, 0)
          return (
            <CustomDrawerContent navigation={props.navigation} {...props} />
          )
        }}>
        <Drawer.Screen name='MainLayout'>
          {props => (
            <MainLayout
              navigation={props.navigation}
              drawerAnimationStyles={animationStyles}
              {...props}
            />
          )}
        </Drawer.Screen>

   {/*  <Drawer.Screen name='Home'>
          {props => (
            <Home
              navigation={props.navigation}
              animationStyles={animationStyles}
              {...props}
            />
          )}
        </Drawer.Screen>

            <Drawer.Screen name='MyWallet'>
          {props => (
            <MyWallet
              navigation={props.navigation}
              animationStyles={animationStyles}
              {...props}
            />
          )}
        </Drawer.Screen>

        <Drawer.Screen name='Profile'>
          {props => (
            <Profile
              navigation={props.navigation}
              animationStyles={animationStyles}
              {...props}
            />
          )}
        </Drawer.Screen> */}
      </Drawer.Navigator>
    </View>
  )
}

export default CustomDrawer
