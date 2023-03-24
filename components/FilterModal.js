import {View, Text, Modal, TouchableWithoutFeedback} from 'react-native'
import React, {useEffect} from 'react'
import Animated from 'react-native-reanimated'
import {COLORS, SIZES} from '../constants'

export default function FilterModal ({visible, onClose}) {
  const [showFilterModal, setShowFilterModal] = React.useState(visible)
  React.useEffect(() => {
    if (!showFilterModal) {
      onClose()
    }
  }, [showFilterModal])
  return (
    <Modal visible={visible} animationType='fade' transparent={true}>
      <View style={{backgroundColor: COLORS.transparentBlack7, flex: 1}}>
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}
          />
        </TouchableWithoutFeedback>
        <View
          style={{
            backgroundColor: COLORS.white,
            borderTopLeftRadius: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            height: SIZES.height * 0.85,
            marginTop: 'auto',
          }}></View>
      </View>
    </Modal>
  )
}
