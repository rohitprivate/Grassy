import React from "react";
import 'react-native-gesture-handler';
import {  AuthProvider } from "./provider/AuthProvider";
import { Routes } from "./navigation/Routes";

const App=()=>{
    return <AuthProvider>
        <Routes/>
    </AuthProvider>
}
export default App;