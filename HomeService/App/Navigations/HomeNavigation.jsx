import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import BusinessListByCategoryScreen from "../Screens/BusinessListByCategory/BusinessListByCategoryScreen";

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen
        name="business-list"
        component={BusinessListByCategoryScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
