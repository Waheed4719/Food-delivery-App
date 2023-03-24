import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {COLORS, FONTS, SIZES} from '../../constants'
import {TextButton, TextField} from '../../components'
import FeatherIcon from 'react-native-vector-icons/Feather'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import OTPInputView from '@twotalltotems/react-native-otp-input'

export default function OtpAuthentication ({navigation}) {
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
      <Text style={{...FONTS.h2, color: 'black'}}>OTP Authentication</Text>
      <Text
        style={{
          ...FONTS.h4,
          color: 'black',
          marginTop: 5,
          color: COLORS.gray,
          marginBottom: 15,
          textAlign: 'center',
          width: SIZES.width * 0.8,
        }}>
        An authentication code has been sent to dmc4719@gmail.com
      </Text>
      <View
        style={{
          width: SIZES.width,
          paddingHorizontal: SIZES.padding,
          marginTop: 15,
          backgroundColor: COLORS.transparent
        }}>
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{...FONTS.h4, color: COLORS.gray}}>Email:</Text>
          <Text style={{...FONTS.h4, color: COLORS.primary}}>
            {email.message}
          </Text>
        </View> */}
        {/* <TextField
          value={email.value}
          onChangeText={text => console.log(text)}
          style={{height: 55}}>
          {email.isValid ? (
            <FeatherIcon name='check-circle' size={18} color={COLORS.gray} />
          ) : (
            <FontistoIcon name='close' size={18} color={COLORS.red} />
          )}
        </TextField> */}

        <OTPInputView
          style={{
            width: SIZES.width - SIZES.padding * 2,
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: 'transparent'
          }}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`)
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          flexWrap: 'wrap'
        }}>
        <Text style={{...FONTS.h4, color: COLORS.gray}}>Didn't receive code?</Text> 
        <Text style={{...FONTS.h4, color: COLORS.primary, marginLeft: 5}}>Resend Code(59s)</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TextButton
          disabled={true}
          label={'Continue'}
          labelStyle={{color: COLORS.white}}
          contentContainerStyle={{
            height: 55,
            borderRadius: SIZES.radius,
            marginTop: 25,
            width: SIZES.width - 2 * SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}
        />
           <View
        style={{
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text style={{...FONTS.h4, color: COLORS.gray}}>By signing up, you agree to our?</Text> 
        <Text style={{...FONTS.h4, color: COLORS.primary}}>Terms and Conditions</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    fontSize: 18,
    color: COLORS.black,
    borderWidth: 0,
    borderWidth: 1,
    borderRadius: SIZES.base,
    width: 70,
    height: 70,
    backgroundColor: COLORS.lightGray2,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
})
