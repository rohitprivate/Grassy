import React from "react"
import { GrassyForm } from "../screen/form";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notification from "../screen/notification";
import Profile from "../screen/profile";

const Tab = createBottomTabNavigator();

export const AppStack = () => {
    return <Tab.Navigator>
        <Tab.Screen name="Home" component={GrassyForm} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
}