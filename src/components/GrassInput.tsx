import React from "react"
import { Input } from "react-native-elements"

interface IGrassProps {
    autoCompleteType: string | undefined,
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void
    secureTextEntry?:boolean
}
const GrassInput: React.FC<IGrassProps> = (props: IGrassProps) => {
    const { autoCompleteType, placeholder, value, onChangeText,secureTextEntry } = props
    return <Input
        placeholder={placeholder} autoCompleteType={autoCompleteType} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry}/>
}
export default GrassInput