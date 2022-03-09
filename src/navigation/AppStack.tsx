import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import { GrassyForm } from "../screen/form";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginScreen } from "../screen/login";
import Notification from "../screen/notification";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const AppStack =()=>{
return <Tab.Navigator>
<Tab.Screen name="Home" component={GrassyForm} />
<Tab.Screen name="Notification" component={Notification} />
</Tab.Navigator>
}