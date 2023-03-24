import {View, Text} from 'react-native'
import React from 'react'
import {Header} from '../components'
import {useDispatch} from 'react-redux'
import {setSelectedTab} from '../redux/actions/TabActions'

export default function Settings ({navigation}) {
  const dispatch = useDispatch()
  const {selectedTab} = useSelector(state => state.tabs)
  return (
    <View
      style={{
        flex: 1,
        width: SIZES.width,
        backgroundColor: COLORS.white,
        overflow: 'hidden',
      }}>
      {/* Header Component */}
      <Header
        navigation={navigation}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        dispatch={dispatch}
      />
    </View>
  )
}
