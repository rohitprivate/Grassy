import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import { GrassyForm } from "../screen/GrassyForm";
import { LoginScreen } from "../screen/LoginScreen";

const Stack = createStackNavigator();

export const AuthStack =()=>{
return <Stack.Navigator>
    <Stack.Screen name="loginScreen" component={LoginScreen}/>
   </Stack.Navigator>
}