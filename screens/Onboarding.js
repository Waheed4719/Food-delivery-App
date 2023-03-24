import React from 'react'
import {Text, View, Image, Animated, FlatList} from 'react-native'
import {images, constants, SIZES, FONTS, COLORS} from '../constants'
import {TextButton} from '../components'
// import Animated from 'react-native-reanimated'

const Onboarding = ({navigation}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [bgColor, setBgColor] = React.useState(COLORS.cornflowerBlue)
  const flatListRef = React.useRef()

  const goToNextSlide = index => {
    let nextSlide = currentSlide + 1
    if (currentSlide < constants.onboarding.length - 1) {
      flatListRef.current.scrollToIndex({index: nextSlide})
      setCurrentSlide(nextSlide)
    } else {
      navigation.navigate('CustomDrawer')
    }
  }

  const RenderFooter = () => {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: SIZES.padding,
          width: SIZES.width,
          justifyContent: 'center',
          paddingHorizontal: SIZES.padding,
        }}>
        {currentSlide != constants.onboarding.length - 1 && (
          <TextButton
            contentContainerStyle={{
              height: 55,
              flex: 1,
              // backgroundColor: '#e1ecf4',
              backgroundColor: COLORS.transparent,
              borderRadius: SIZES.radius,
              justifyContent: 'flex-start',
            }}
            labelStyle={{color: COLORS.white}}
            label={'Skip'}
            onPress={() => navigation.navigate('Login')}
          />
        )}

        <TextButton
          contentContainerStyle={{
            marginLeft: SIZES.radius,
            height: 55,
            flex: 1,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius,
          }}
          labelStyle={{color: '#fff'}}
          label={
            currentSlide == constants.onboarding.length - 1
              ? 'Lets Get Started'
              : 'Next'
          }
          onPress={() => goToNextSlide()}
        />
      </View>
    )
  }

  const RenderDots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width)

    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          flexDirection: 'row',
          marginVertical: 10,
          justifyContent: 'center',
        }}>
        {constants.onboarding?.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: ['#ddd', COLORS.white, '#ddd'],
            extrapolate: 'clamp',
          })
          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 25, 10],
            extrapolate: 'clamp',
          })
          return (
            <Animated.View
              key={`Dot-${index}`}
              style={{
                marginHorizontal: 3,
                height: 10,
                width: dotWidth,
                borderRadius: 5,
                backgroundColor: dotColor,
              }}
            />
          )
        })}
      </View>
    )
  }

  const renderItem = ({item, index}) => {
    let image =
      index == 0
        ? images.dogPic
        : index == 1
        ? images.flyDog
        : index == 2
        ? images.drinkingDog
        : images.flyDog
    return (
      <View
        style={{
          flex: 1,
          width: SIZES.width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{
              width: SIZES.width * 0.6,
              height: SIZES.width * 0.6,
            }}
            resizeMode='contain'
            source={image}
          />
        </View>

        <View
          style={{
            // height: SIZES.height * 0.35,
            alignItems: 'center',
            paddingHorizontal: SIZES.padding,
          }}>
          <Text style={{...FONTS.h1, color: 'white'}}>{item.title}</Text>
          <Text style={{...FONTS.body3, textAlign: 'center', color: 'white'}}>
            {item.sub_title}
          </Text>
        </View>
      </View>
    )
  }

  const onViewableItemsChanged = obj => {
    let curSlide = Animated.divide(scrollX, SIZES.width)
    let color = curSlide.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [
        COLORS.cornflowerBlue,
        COLORS.green,
        '#c47a53',
        '#eaa47e',
        // COLORS.violet,
        // COLORS.dodgerblue,
        // COLORS.lightOrange,
        // COLORS.salmon,
      ],
      extrapolate: 'clamp',
    })
    setBgColor(color)
  }

  const onViewRef = React.useRef(viewableItems => {
    setCurrentSlide(viewableItems.changed[0].index)
    // Use viewable items in state or as intended
    onViewableItemsChanged()
  })
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50})

  return (
    <>
      <Animated.View style={{flex: 1, backgroundColor: bgColor}}>
        <Animated.FlatList
          ref={flatListRef}
          horizontal
          // scrollEnabled={false}
          data={constants.onboarding}
          scrollEventThrottle={16}
          snapToAlignment='center'
          snapToInterval={SIZES.width}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          pagingEnabled={false}
          keyExtractor={item => `Onboarding-${item.id}`}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          decelerationRate='fast'
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
        />
        <View style={{height: SIZES.height * 0.25, justifyContent: 'center'}}>
          {/* {renderDots()} */}
          <RenderDots />
        </View>
        <RenderFooter />
      </Animated.View>
    </>
  )
}

export default Onboarding
