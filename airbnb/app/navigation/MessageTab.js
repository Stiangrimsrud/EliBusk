import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import screens
import Listings from "../screens/Listings";
import Messages from "../screens/Messages";
import Accounts from "../screens/Accounts";
import TripStack from "../navigation/TripStack";
import MessageStack from "../navigation/MessageStack";

// import styles and assets
import { Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import Colors from "../config/colors";

const Tab = createBottomTabNavigator();

const ListTab = () => (
  <Tab.Navigator tabBarOptions={{ activeTintColor: Colors.red }}>
    <Tab.Screen
      name="Search"
      component={Listings}
      options={{
        tabBarIcon: ({ color, size }) => (
          <EvilIcons name="search" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Trip"
      component={TripStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <EvilIcons name="calendar" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Messages"
      component={MessageStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <EvilIcons name="comment" color={color} size={size} />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={Accounts}
      options={{
        tabBarIcon: ({ color, size }) => (
          <EvilIcons name="user" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default ListTab;
