import React, { useContext, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, Input } from "react-native-elements";
import { AuthContext } from "../../provider/AuthProvider";

export const LoginScreen = () => {

    const [password,setPassword]=useState<string>("")
    const [email,setEmail]=useState<string>("") ;
    const {login} =useContext(AuthContext)
    const onLoginPress=()=>{
            login(email,password)
    }
    return <View style={styles.container}>
        <Text>Login</Text>
        <Input
            placeholder='emailAddress@domain.com' autoCompleteType={undefined} value={email} onChangeText={(email)=>{setEmail(email)}}/>
        <Input
            placeholder='password' autoCompleteType={undefined} secureTextEntry={true} value={password} onChangeText={(password)=>{setPassword(password)}} />
        <Button
            title="Log in"
            loading={false}
            loadingProps={{ size: 'small', color: 'white' }}
            buttonStyle={styles.loginBtn}
            titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
            containerStyle={styles.containerButton}
            onPress={onLoginPress}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    loginBtn: {
        backgroundColor: 'rgba(111, 202, 186, 1)',
        borderRadius: 5,
    },
    containerButton: {

        marginHorizontal: 50,
        height: 50,
        width: 200,
        marginVertical: 10,

    }
});