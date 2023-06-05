import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs from './components/HomeTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='HomeTabs'>
          <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ title: 'Renta de Autos' }} />
          
  
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
