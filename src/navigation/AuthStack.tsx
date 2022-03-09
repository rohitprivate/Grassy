import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screen/login";

const Stack = createStackNavigator();

export const AuthStack =()=>{
return <Stack.Navigator>
    <Stack.Screen name="loginScreen" component={LoginScreen}/>
   </Stack.Navigator>
}