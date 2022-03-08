import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App=()=>{
    return <SafeAreaProvider>
        <Text>Hello from Grassy</Text>
    </SafeAreaProvider>
}
export default App;