import React, { useCallback, useEffect, useState } from 'react';
import {
  NavigationContainer,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthenticated } from './redux/selectors/authSelectors';
import AuthStack from './navigation/AuthStack';
// import DrawerNavigator from './navigation/DrawerNavigator';
// import AppStack from './navigation/AppStack';
// import {enableDebugging} from './debug';
// import useAuth from './hooks/useAuth';
// import LotteiSplashScreen from './screens/SplashScreen/SplashScreen';
// import SplashScreen from 'react-native-splash-screen';
import { initializeAuth } from './redux/slices/UMS/authSlice';
import { NavigationProvider } from './utilities/loader/NavigationContext';
// import LoadingOverlay from './utilities/loader/LoadingScreen';
// import {setTheme} from './redux/slices/themeSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import ChatStackNavigator from './navigation/ChatStackNavigator';
// import LabourJobNavigator from './navigation/LabourJobNavigator';
// import FarmerCarrerNavigator from './navigation/FarmerCarrerNavigator';
// import DoctorAppointmentNavigator from './navigation/Appointment';
// import CannidateAppointmentNavigator from './navigation/CandidateAppointmentBooking';
// // <<<<<<< HEAD
// // // import StudentDrawerNavigator from './navigation/StudentDrawerNavigator';
// // =======
// // >>>>>>> 40ac3c0e0ec7ea47b10326a375761ca6688996ee
// import {AlertProvider} from './utilities/Alert/useCustomAlert';
// import {configureBackgroundFetch} from './services/backgroundService';
// import {selectSocket} from './redux/selectors/CMS/ChatSelectors';

const Stack = createStackNavigator();

function AppNavigator() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  // const navigation = useNavigation();
  // const [loading, setLoading] = useState(true);
  // const dispatch = useDispatch();
  // useFocusEffect(
  //   useCallback(() => {
  //     const initialize = async () => {
  //       try {
  //         await dispatch(initializeAuth());
  //       } catch (error) {
  //         console.error('Error during initialization:', error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     // const loadTheme = async () => {
  //     //   try {
  //     //     const storedTheme = await AsyncStorage.getItem('theme');
  //     //     if (storedTheme) {
  //     //       dispatch(setTheme(storedTheme));
  //     //     }
  //     //   } catch (error) {
  //     //     console.error('Error loading theme:', error);
  //     //   }
  //     // };

  //     // loadTheme();
  //     initialize();
  //   }, [dispatch]),
  // );
  // if (loading) {
  //   return <LotteiSplashScreen />;
  // }

  return (
    <>
      {/* {isLoading && <LoadingScreen />} */}
      <Stack.Navigator
        initialRouteName={isAuthenticated ? 'Main' : 'Auth'}
        screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            {/* <Stack.Screen
              name="Main"
              component={DrawerNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AppScreens"
              component={AppStack}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ChatScreen"
              component={ChatStackNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LabourJobScreen"
              component={LabourJobNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="FarmerToolsScreen"
              component={FarmerCarrerNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DoctorAppointmentScreen"
              component={DoctorAppointmentNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CandidateAppointmentScreen"
              component={CannidateAppointmentNavigator}
              options={{headerShown: false}}
            /> */}
          </>
        )}
      </Stack.Navigator>
    </>
  );
}

export default function App() {
  //   useEffect(() => {
  //     SplashScreen.hide();

  //     const handleDeepLink = event => {
  //       const url = event.url;
  //     };

  //     enableDebugging();
  //     Linking.addEventListener('url', handleDeepLink);

  //     Linking.getInitialURL().then(url => {
  //       if (url) {
  //         handleDeepLink({url});
  //       }
  //     });

  //     return () => {
  //       // Linking.removeEventListener('url', handleDeepLink);
  //     };
  //   }, []);

  return (
    <NavigationProvider>
      {/* <AlertProvider> */}
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      {/* </AlertProvider> */}
    </NavigationProvider>
  );
}

