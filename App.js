import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthStackNavigator from './navigators/AuthStackNavigator';
import MainNavigator from './navigators/MainNavigator';

export default function App() {
  return (
    <NavigationContainer>
      {/* Navigators */}
      {/*<AuthStackNavigator/>*/}
      <MainNavigator/>
    </NavigationContainer>
  );
}

