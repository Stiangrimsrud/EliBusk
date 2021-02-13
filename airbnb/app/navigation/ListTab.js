import React from "react";

// import navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TripStack from "../navigation/TripStack";
import MessageStack from "../navigation/MessageStack";
import HostStack from "../navigation/HostStack";

// import screens
import Listings from "../screens/Listings";
import Accounts from "../screens/Accounts";

// import styles and assets
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
      name="Host"
      component={HostStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <EvilIcons name="chart" color={color} size={size} />
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
