import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import { GrassyForm } from "../screen/GrassyForm";

const Stack = createStackNavigator();

export const AppStack =()=>{
return <Stack.Navigator>
    <Stack.Screen name="form" component={GrassyForm}/>
   </Stack.Navigator>
}