import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './login';

const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
     
   
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'blue',
            tabBarActiveBackgroundColor: '#B3AE4F',
            headerShown: false
  
          }}
        >
          <Tab.Screen  name="Login" component={Login} options={{
            tabBarStyle:{display:'none'},
            tabBarIcon: (tabInfo) => (<MaterialCommunityIcons color='black' name="close" size={25} />)
          }} />
        </Tab.Navigator>
  
      
    );
  }
  
export default HomeTabs;