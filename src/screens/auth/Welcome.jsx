import React, {
  // useState, 
  // useEffect
} from 'react';
import {StyleSheet, 
  Text,
  TouchableOpacity,
  // SafeAreaView, 
  // View, 
  // Image, 
  // Alert
} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import {Text, TextInput, useTheme, Dialog, Button} from 'react-native-paper';
// import {useDispatch, useSelector} from 'react-redux';


const WelcomeScreen = ({navigation, route}) => {


  return (
  <>
  <TouchableOpacity onPress={()=>navigation.navigate("OTPVerification")}>
  <Text style={{color:"black",fontSize:50}} >helo</Text>
  </TouchableOpacity>
  </>
  );
};

const loginStyles = StyleSheet.create({
 
});

export default WelcomeScreen;
