import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { User } from "../types";
import { AuthStack } from "./AuthStack";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth"
import { AppStack } from "./AppStack";

export const Routes = () => {
    const { user, setUser } = useContext(AuthContext)
    const [initializing, setInitializing] = useState(true)
  const onAuthStateChanged=(user:FirebaseAuthTypes.User | null) => {
    user?.getIdToken().then((token)=>{
       setUser({
           id: user?.uid,
           userName: user?.displayName,
           email: user?.email,
           token,
       })
   })
   if(initializing) setInitializing(false)

} 
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
        return subscriber; // unsubscribe on unmount
    }, [])

    if(initializing) return null;

    return <NavigationContainer>
       { user ?<AppStack />: <AuthStack/>}
    </NavigationContainer>
}