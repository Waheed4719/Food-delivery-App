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
import React, {useEffect, useCallback, useMemo} from 'react'
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
import {SearchBar} from '../components'

function Home ({navigation, animationStyles}) {
  const [menu, setMenu] = React.useState([...dummyData.menu])
  const [activeCat, setActiveCat] = React.useState('Fast Food')

  const [recommended, setRecommended] = React.useState([])
  const [menuItems, setMenuItems] = React.useState([])

  const [selectedMenuType, setSelectedMenuType] = React.useState('Featured')
  const [popularNearYou, setPopularNearYou] = React.useState([])

  React.useEffect(() => {
    let filtered = dummyData.menu.filter(
      (item, index) => item.name == selectedMenuType,
    )[0]
    setMenuItems(filtered)
  }, [selectedMenuType])

  useEffect(() => {
    let recommends = dummyData?.menu.filter(
      (item, index) => item.name == 'Recommended',
    )[0]
    setRecommended(recommends)

    let populars = dummyData?.menu
      .filter((item, index) => item.name == 'Popular' || item.name == 'Nearby you',).reduce((acc, curr) => {
        return [...acc, ...curr.list]
      }, [])
    setPopularNearYou(populars)
  }, [])

  const categoriesRender = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: SIZES.radius,
          padding: SIZES.radius,
          backgroundColor:
            activeCat == item.name ? COLORS.primary : COLORS.lightGray2,
          height: 50,
          marginRight: 10,
        }}
        onPress={() => setActiveCat(item.name)}>
        <Image source={item.icon} style={{height: 40, width: 40}} />
        <Text
          style={{
            ...FONTS.h3,
            color: activeCat == item.name ? COLORS.white : COLORS.gray,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    )
  }

  const RecommendedSection = useCallback(({item}) => {
    return (
      <View
        style={{
          borderRadius: SIZES.radius,
          alignItems: 'center',
          padding: SIZES.base,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: SIZES.width - SIZES.padding * 2,
            marginHorizontal: SIZES.padding,
            marginBottom: 10,
          }}>
          <Text style={{...FONTS.h3, color: COLORS.black}}>{item.name}</Text>
          <TouchableOpacity>
            <Text style={{...FONTS.h3, color: COLORS.primary}}>Show All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          contentContainerStyle={{
            marginVertical: 5,
            paddingLeft: SIZES.padding,
          }}
          showsHorizontalScrollIndicator={false}
          style={{width: SIZES.width}}
          data={item.list}
          keyExtractor={(item, index) => `menuR-${item.id}`}
          horizontal
          renderItem={({item, index}) => (
            <VerticalListCard key={index} item={item} />
          )}
          initialNumToRender={2}
          listKey={`items-${item.name}`}
        />
      </View>
    )
  })

  const PopularNearYouSection = useCallback(({item}) => {
    return (
      <View
        style={{
          borderRadius: SIZES.radius,
          alignItems: 'center',
          padding: SIZES.base,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: SIZES.width - SIZES.padding * 2,
            marginHorizontal: SIZES.padding,
            marginBottom: 10,
          }}>
          <Text style={{...FONTS.h3, color: COLORS.black}}>Popular Near you</Text>
          <TouchableOpacity>
            <Text style={{...FONTS.h3, color: COLORS.primary}}>Show All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          contentContainerStyle={{
            marginVertical: 5,
            paddingLeft: SIZES.padding,
          }}
          showsHorizontalScrollIndicator={false}
          style={{width: SIZES.width}}
          data={item}
          keyExtractor={(item, index) => `popularNearYou-${index}`}
          horizontal
          renderItem={({item, index}) => (
            <HorizontalListCard key={index} index={index} item={item} />
          )}
          initialNumToRender={2}
          listKey={`popoularNearYou`}
        />
      </View>
    )
  })

  const menuRender = useCallback(({item, index}) => {
    return (
      <View
        style={{
          borderRadius: SIZES.radius,
          alignItems: 'center',
        }}>
        <View
          style={{
            marginVertical: 10,
            alignItems: 'center',
          }}>
          <HorizontalListCard key={index} item={item} />
        </View>
      </View>
    )
  })

  const renderMenuTypes = useCallback(({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        item={item}
        onPress={() => setSelectedMenuType(item.name)}
        style={{
          padding: 5,
          marginLeft: SIZES.padding,
          marginRight: index == dummyData.menu.length - 1 ? SIZES.padding : 0,
        }}>
        <Text
          style={{
            ...FONTS.h3,
            color:
              selectedMenuType == item.name ? COLORS.primary : COLORS.black,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    )
  })

  const MenuTypes = () => {
    return (
      <FlatList
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20,
          // paddingLeft: SIZES.padding,
        }}
        showsHorizontalScrollIndicator={false}
        style={{width: SIZES.width}}
        data={dummyData.menu}
        keyExtractor={(item, index) => `menuType-${item.id}`}
        horizontal
        renderItem={renderMenuTypes}
        listKey={`menuType`}
        initialNumToRender={1}
      />
    )
  }

  const mainList = (item, index) => {
    return (
      <View>
        <RecommendedSection item={recommended} />
        <PopularNearYouSection item={popularNearYou} />
        <MenuTypes />
      </View>
    )
  }

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
      <SearchBar />

      <View
        style={{width: SIZES.width - SIZES.padding * 2, marginVertical: 15}}>
        <Text style={{...FONTS.h3, color: COLORS.primary}}>DELIVERY TO</Text>
        <Text style={{...FONTS.h3, color: COLORS.black, marginTop: 5}}>
          Kalabagan 2nd Lane, Dhanmondi, Dhaka
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{
          marginVertical: 10,
          height: 80,
          paddingLeft: SIZES.padding,
        }}
        showsHorizontalScrollIndicator={false}
        data={[...dummyData.categories]}
        horizontal
        keyExtractor={(item, index) => `cat-${item.id}`}
        renderItem={categoriesRender}
        listKey='categories-list'
        scrollEventThrottle={16}
        initialNumToRender={3}
      />

      <FlatList
        contentContainerStyle={{
          marginVertical: 10,
        }}
        ListHeaderComponent={mainList}
        style={{width: SIZES.width}}
        scrollEventThrottle={16}
        data={menuItems.list}
        keyExtractor={(item, index) => `menuItem-${item.id}`}
        horizontal={false}
        renderItem={menuRender}
        showsHorizontalScrollIndicator={false}
        showsVericalScrollIndicator={false}
        listKey='menus'
        initialNumToRender={2}
      />
    </Animated.View>
  )
}

export default Home
