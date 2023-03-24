import {View, Image, TouchableOpacity, TextInput} from 'react-native'
import React, {useState} from 'react'
import {COLORS, SIZES, icons} from '../constants'
import {FilterModal} from './index'

export default function SearchBar () {
  const [filterModal, setFilterModal] = useState(false)
  return (
    <View
      style={{
        height: 40,
        marginVertical: SIZES.base,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.lightGray2,
        paddingHorizontal: SIZES.radius,
        marginHorizontal: SIZES.padding,
        borderRadius: SIZES.radius,
      }}>
      <Image
        source={icons.search}
        style={{tintColor: COLORS.gray, height: 20, width: 20}}
      />
      <TextInput
        placeholder={'search food...'}
        style={{
          textDecorationLine: 'none',
          fontFamily: 'poppins-semiBold',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          marginLeft: 5,
          color: COLORS.black,
        }}
      />
      <TouchableOpacity
       onPress={() => setFilterModal(true)}
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.lightGray2,
        }}>
        <Image
         
          source={icons.filter}
          style={{tintColor: COLORS.gray, height: 20, width: 20}}
        />
      </TouchableOpacity>
      {filterModal && <FilterModal visible={filterModal} onClose={()=>setFilterModal(false)}/>}
    </View>
  )
}
