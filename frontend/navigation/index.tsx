import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import StartScreen from '../screens/Start';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import OwnerProfile from '../OwnerScreens/OwnerProfile';
import EditProfileOwner from '../OwnerScreens/EditProfileOwner';
import CustomerProfile from '../CustomerScreens/CustomerProfile';
import GuardProfile from '../GuardScreens/GuardProfile';
import ListVehicle from '../CustomerScreens/ListVehicle';
import Vehicle from '../CustomerScreens/Vehicle';
import AddNewVehicle from '../CustomerScreens/AddNewVehicle';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="GuardProfile" component={GuardProfile} />
      <Stack.Screen name="Vehicle" component={Vehicle} />
      <Stack.Screen name="ListVehicle" component={ListVehicle} />
      <Stack.Screen name="AddNewVehicle" component={AddNewVehicle} />
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
