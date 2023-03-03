import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Feather } from '@expo/vector-icons'; 
import { HomeScreen, ProfileScreen } from "../screens";

const Tab = createBottomTabNavigator();

export const Bottom = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveBackgroundColor: 'transparent'
        }}
    >
        <Tab.Screen 
            name="Home"
            component={HomeScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="home" size={size} color={color} />
                )
            }}
        />
        <Tab.Screen 
            name="Profile"
            component={ProfileScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Feather name="user" size={size} color={color} />
                )
            }}
        />
    </Tab.Navigator>
  )
}