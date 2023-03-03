import { Bottom } from "./Bottom";
import { ProfileScreen, ImagePickerScreen } from "../screens";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator(); 

export const SomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Bottom_tab"
            component={Bottom}
            options={{ headerShown: false }}
        />
        <Stack.Screen 
            name="Profile"
            component={ProfileScreen}
        />
        <Stack.Screen 
            name="Add_Image"
            component={ImagePickerScreen}
            // options={{ headerShown: false }}
        />
    </Stack.Navigator>
  )
}
