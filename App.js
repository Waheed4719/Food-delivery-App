import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {StatusBar, LogBox} from 'react-native'
import 'react-native-reanimated'
import {
  Onboarding,
  CustomDrawer,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  OtpAuthentication
} from './screens'
import {createStackNavigator} from '@react-navigation/stack'
import store from './redux'
import {Provider} from 'react-redux'

const App = () => {
  React.useEffect(() => {
    StatusBar.setHidden(true)
    LogBox.ignoreAllLogs(true)
  }, [])
  const Stack = createStackNavigator()
  return (
    <Provider store={store}>
      
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Onboarding'
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name='Onboarding' component={Onboarding} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='CustomDrawer' component={CustomDrawer} />
          <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
          <Stack.Screen name='ResetPassword' component={ResetPassword} />
          <Stack.Screen name='OtpAuthentication' component={OtpAuthentication} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
