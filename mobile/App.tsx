import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon } from './screens/home/HomeIcon';
import { HomeScreen } from './screens/home/HomeScreen';
import { ProfileIcon } from './screens/profile/ProfileIcon';
import { ProfileScreen } from './screens/profile/ProfileScreen';
import { ChatIcon } from './screens/chat/ChatIcon';
import { ChatScreen } from './screens/chat/ChatScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
        <Tab.Screen
          options={{ tabBarIcon: HomeIcon }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{ tabBarIcon: ChatIcon }}
          name="Chat"
          component={ChatScreen}
        />
        <Tab.Screen
          options={{ tabBarIcon: ProfileIcon }}
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
