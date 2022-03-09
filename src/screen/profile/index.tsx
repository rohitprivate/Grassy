import React, { useContext } from "react"
import { Button } from "react-native-elements"
import { AuthContext } from "../../provider/AuthProvider"
const Profile =()=>{
    const { signOut } = useContext(AuthContext)
return <Button title={"Log out"} onPress={()=>signOut()}/>
}
export default Profile;