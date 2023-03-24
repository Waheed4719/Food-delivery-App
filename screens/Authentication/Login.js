import {View, Text, Switch} from 'react-native'
import React from 'react'
import {COLORS, FONTS, SIZES} from '../../constants'
import {TextButton, TextField} from '../../components'
import FeatherIcon from 'react-native-vector-icons/Feather'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import FaIcon from 'react-native-vector-icons/FontAwesome'
import {TouchableOpacity} from 'react-native-gesture-handler'

export default function Login ({navigation}) {
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

  const [isEnabled, setIsEnabled] = React.useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
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
      <Text style={{...FONTS.h2, color: 'black'}}>Let's Sign You in</Text>
      <Text
        style={{
          ...FONTS.h4,
          color: 'black',
          marginTop: 5,
          color: COLORS.gray,
          marginBottom: 15,
        }}>
        Welcome back, you've been missed!
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
          type={showPassword ? false : true}>
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
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
          justifyContent: 'space-between',
          height: 20,
          marginTop: 10,
          alignItems: 'center',
          width: SIZES.width,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Switch
            trackColor={{false: COLORS.lightGray1, true: COLORS.lightGray1}}
            thumbColor={isEnabled ? COLORS.primary : COLORS.gray}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={{...FONTS.h4, color: COLORS.gray}}>Save me</Text>
        </View>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('ForgotPassword')}
            style={{...FONTS.h4, color: COLORS.gray}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <TextButton
        label={'Sign in'}
        labelStyle={{color: COLORS.white}}
        contentContainerStyle={{
          //   opacity: 0.7,
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
          Don't have an account?{' '}
        </Text>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('Register')}
            style={{...FONTS.h4, color: COLORS.primary}}>
            Sign Up{' '}
          </Text>
        </TouchableOpacity>
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
