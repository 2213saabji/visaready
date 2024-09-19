// navigation/AuthStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelComeScreen from '../screens/auth/Welcome';
// import PasswordScreen from '../screens/auth/Password';
// // import SignupScreen from '../screens/auth/OtpRegister';
import OTPVerificationScreen from '../screens/auth/VerificationScreen';
// import RegisterPasswordScreen from '../screens/auth/RegisterPassword';
import { NavigationProvider } from '../utilities/loader/NavigationContext';
// import LoadingOverlay from '../utilities/loader/LoadingScreen';
// import RegisterDetailsScreen from '../screens/auth/RegisterDetails';
// import ForgotPassword from '../screens/auth/ForgotPassword';

const Stack = createStackNavigator();


const AuthStack = () => {
  return (
    <NavigationProvider>
      <Stack.Navigator initialRouteName="WelCome">
        <Stack.Screen
          name="WelCome"
          component={WelComeScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Password"
          component={PasswordScreen}
          options={{ headerShown: false }}
        />*/}
        <Stack.Screen
          name="OTPVerification"
          component={OTPVerificationScreen}
          options={{ headerShown: false }}
        />
        {/*
        <Stack.Screen
          name="RegisterDetails"
          component={RegisterDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterPassword"
          component={RegisterPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        /> */}
        
      </Stack.Navigator>
    </NavigationProvider>
  );
};

export default AuthStack;
