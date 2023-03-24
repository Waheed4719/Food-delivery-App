import {View, Text} from 'react-native'
import React from 'react'
import {COLORS, FONTS, SIZES} from '../../constants'
import {TextButton, TextField} from '../../components'
import FeatherIcon from 'react-native-vector-icons/Feather'
import FaIcon from 'react-native-vector-icons/FontAwesome'
import {TouchableOpacity} from 'react-native-gesture-handler'

export default function Register ({navigation}) {
  const [showPassword, setShowPassword] = React.useState(false)
  const [email, setEmail] = React.useState({
    value: '',
    isValid: true,
    message: '',
  })
  const [password, setPassword] = React.useState({
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
        <Text style={{...FONTS.h1, color: COLORS.primary }}>Eatme</Text>
      </View>
      <Text style={{...FONTS.h2, color: 'black'}}>Getting Started</Text>
      <Text
        style={{
          ...FONTS.h4,
          color: 'black',
          marginTop: 5,
          color: COLORS.gray,
          marginBottom: 15,
        }}>
        Create an account to continue!
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
          style={{height: 55}}
          >
          <FeatherIcon name='check-circle' size={18} color={COLORS.gray} />
        </TextField>
      </View>

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
          <Text style={{...FONTS.h4, color: COLORS.gray}}>Username:</Text>
          <Text style={{...FONTS.h4, color: COLORS.primary}}>
            {email.message}
          </Text>
        </View>
        <TextField
          value={email.value}
          onChangeText={text => console.log(text)}
          style={{height: 55}}
         >
          <FeatherIcon name='check-circle' size={18} color={COLORS.gray} />
        </TextField>
      </View>

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
          <Text style={{...FONTS.h4, color: COLORS.gray}}>Password:</Text>
          <Text style={{...FONTS.h4, color: COLORS.primary}}>
            {password.message}
          </Text>
        </View>

        <TextField
          value={password.value}
          onChangeText={text => console.log(text)}
          style={{height: 55}}
          type={showPassword ? false : true}
          >
           <TouchableOpacity
            style={{
              height: 55,
              width: 55,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setShowPassword(showPassword ? false : true)}>
            {showPassword ? (
              <FeatherIcon name='eye-off' size={18} color={COLORS.gray} />
            ) : (
              <FeatherIcon name='eye' size={18} color={COLORS.gray} />
            )}
          </TouchableOpacity>
        </TextField>
      </View>

      <TextButton
        label={'Sign in'}
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
        style={{flexDirection: 'row', marginTop: 10, justifyContent: 'center'}}>
        <Text style={{...FONTS.h4, color: COLORS.gray}}>
          Already have an account?{' '}
        </Text>
        <TouchableOpacity><Text onPress={()=>navigation.navigate('Login')} style={{...FONTS.h4, color: COLORS.primary}}>Sign In </Text></TouchableOpacity> 
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TextButton
          leftIcon={
            <FaIcon
              onPress={() => setShowPassword(true)}
              name='google'
              size={18}
              style={{marginRight: 10}}
              color={COLORS.white}
            />
          }
          label={'Continue with Google'}
          labelStyle={{color: COLORS.white}}
          contentContainerStyle={{
            height: 50,
            borderRadius: SIZES.radius,
            marginTop: 25,
            backgroundColor: COLORS.dodgerblue,
            width: SIZES.width - 2 * SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}
        />
        <TextButton
          leftIcon={
            <FaIcon
              onPress={() => setShowPassword(true)}
              name='facebook-official'
              size={18}
              style={{marginRight: 10}}
              color={COLORS.white}
            />
          }
          label={'Continue with Facebook'}
          labelStyle={{color: COLORS.white}}
          contentContainerStyle={{
            height: 50,
            borderRadius: SIZES.radius,
            marginTop: 10,
            width: SIZES.width - 2 * SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}
        />
      </View>
    </View>
  )
}
