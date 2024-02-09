import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, SearchScreen, ProfileScreen } from "../screens";
import { Feather } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
  },
};

const BottomTabs = () => {
  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name={focused ? "home" : "home-otline"}
                size={24}
                color={focused ? "#FAA62A" : "#212121CC"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name={"searchScreen"}
                size={24}
                color={focused ? "#FAA62A" : "#212121CC"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name={focused ? "profileScreen" : "profileScreen-otline"}
                size={24}
                color={focused ? "#FAA62A" : "#212121CC"}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
