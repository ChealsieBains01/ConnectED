import { Notifications } from "expo";
import React from "react";
import MainTabNavigator from "./MainTabNavigator";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";

const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Sign Up" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}
