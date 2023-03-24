import {View, Text, Switch} from 'react-native'
import React from 'react'
import {COLORS, FONTS, SIZES} from '../../constants'
import {TextButton, TextField} from '../../components'
import FeatherIcon from 'react-native-vector-icons/Feather'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import FaIcon from 'react-native-vector-icons/FontAwesome'
import {TouchableOpacity} from 'react-native-gesture-handler'

export default function ForgotPassword ({navigation}) {
  const [email, setEmail] = React.useState({
    value: '',
    isValid: true,
    message: '',
  })

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
      }}>
      <View style={{marginBottom: 40}}>
        <Text style={{...FONTS.h1, color: COLORS.primary}}>Eatme</Text>
      </View>
      <Text style={{...FONTS.h2, color: 'black'}}>Password Recovery</Text>
      <Text
        style={{
          ...FONTS.h4,
          color: 'black',
          marginTop: 5,
          color: COLORS.gray,
          marginBottom: 15,
          textAlign:'center',
          width: SIZES.width * 0.6
        }}>
        Please enter your email address to recover your password
      </Text>
      <View
        style={{
          width: SIZES.width,
          paddingHorizontal: SIZES.padding,
          marginTop: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{...FONTS.h4, color: COLORS.gray}}>Email:</Text>
          <Text style={{...FONTS.h4, color: COLORS.primary}}>
            {email.message}
          </Text>
        </View>
        <TextField
          value={email.value}
          onChangeText={text => console.log(text)}
          style={{height: 55}}>
          {email.isValid ? (
            <FeatherIcon name='check-circle' size={18} color={COLORS.gray} />
          ) : (
            <FontistoIcon name='close' size={18} color={COLORS.red} />
          )}
        </TextField>
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TextButton
          disabled={true}
          label={'Send Email'}
          labelStyle={{color: COLORS.white}}
          contentContainerStyle={{
            height: 55,
            borderRadius: SIZES.radius,
            marginTop: 25,
            width: SIZES.width - 2 * SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}
        />
      </View>
    </View>
  )
}
