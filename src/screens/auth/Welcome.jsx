import React, {
  // useState, 
  // useEffect
} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Button,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import {Text, TextInput, useTheme, Dialog, Button} from 'react-native-paper';
// import {useDispatch, useSelector} from 'react-redux';


const WelcomeScreen = ({ navigation, route }) => {


  return (
    <SafeAreaView style={loginStyles.main}>

      <View style={loginStyles.logoContainer}>
        <Image
          source={require('../../assets/logo/logoVisaReady.png')}
          style={loginStyles.logo}
        />
      </View>

      <View>
        <Text style={{ color: "black", fontWeight: 700, fontSize: 17, marginBottom: 10 }}>Phone</Text>
        <TextInput
          style={loginStyles.input}
          placeholder="9999999999"
          placeholderTextColor="gray"
        // value={inputValue}
        // onChangeText={(text) => setInputValue(text)}
        />
      </View>

      <View>
        <Text style={{ color: "black", fontWeight: 700, fontSize: 17, marginBottom: 10 }}>Password</Text>
        <TextInput
          style={loginStyles.input}
          placeholder="At least 8 characters"
          placeholderTextColor="gray"
        // value={inputValue}
        // onChangeText={(text) => setInputValue(text)}
        />
      </View>

      <View>
        <Text style={loginStyles.forgotPass}>Forgot Password?</Text>
      </View>

      {/* <Button title='Sign in' /> */}

      <TouchableHighlight
        style={loginStyles.signInBtn}
        underlayColor="darkblue"
        onPress={() => alert('Button Pressed')}>
        <Text style={loginStyles.buttonText}>Sign in</Text>
      </TouchableHighlight>

      <View style={loginStyles.signIn}>
        <Text style={{ color: '#000' }}>Or sign in with</Text>

        <TouchableHighlight
          style={loginStyles.googleBtn}
          underlayColor="darkblue"
          onPress={() => alert('Google Button Pressed')}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="google" size={20} color="red" />
            <Text style={loginStyles.googleBtnText}>Google</Text>
          </View>
        </TouchableHighlight>
      </View>
<TouchableOpacity onPress={()=>navigation.navigate("OTPVerification")}>
  
      <View style={loginStyles.signUp}>
        <Text style={{ color: 'black' }}>Don't you have an account?</Text>
        <Text style={{ color: 'blue' }}>Sign up</Text>
      </View>
</TouchableOpacity>

    </SafeAreaView>
  );
};

const loginStyles = StyleSheet.create({
  main: {
    height: '100%',
    padding: 40,
    backgroundColor: '#bfe0e2'
  },
  input: {
    height: 40,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 7,
  },

  logoContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  logo: {
    height: 300,
    width: 300,
    // backgroundColor:'black'
  },
  signIn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginTop: 30,
    color: '#000',
  },
  signInBtn: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#162d3a',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  googleBtn: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  googleBtnText: {
    color: '#000',
    textAlign: 'center',
  },
  signUp: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
    marginTop: 30,
  },
  forgotPass: {
    textAlign: 'right',
    color: 'blue',
    textDecorationLine: 'underline',
    padding: 10
  }
});

export default WelcomeScreen;
