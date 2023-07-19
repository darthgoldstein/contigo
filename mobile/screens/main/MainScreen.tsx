import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon } from '../home/HomeIcon';
import { HomeScreen } from '../home/HomeScreen';
import { ProfileIcon } from '../profile/ProfileIcon';
import { ProfileScreen } from '../profile/ProfileScreen';
import { ChatIcon } from '../chat/ChatIcon';
import { ChatScreen } from '../chat/ChatScreen';

const Tab = createBottomTabNavigator();

export const MainScreen = () => {
  return (
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
  );
};
