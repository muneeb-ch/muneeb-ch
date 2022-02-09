import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import SignInScrenn from './screens/SignInScrenn';
import StartScreen from './screens/StartScreen';

export default function App() {
  return (
    <View style={{flex:1}}>
     
   {/* <LoginScreen/> */}
   <SignInScrenn/>
   {/* <StartScreen/> */}
    </View>
  );
}


