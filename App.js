import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';


export default function App() {


  // const handlePress = () => console.log("text pressed");

  return (
    <ViewImageScreen />
    // <WelcomeScreen />
  )

}

