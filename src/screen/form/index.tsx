import moment from "moment"
import React, { useState } from "react"
import { View } from "react-native"
import DatePicker from "react-native-date-picker"
import { Button, Text } from "react-native-elements"
import SelectDropdown from "react-native-select-dropdown"
import { GRASS_TYPES } from "../../constants"
import { setMowingNotificationToDatabase } from "../../utils/myMowingService"

export const GrassyForm = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null);


    const onAddToDatabase = () => {
        if (value) setMowingNotificationToDatabase(moment(date.toDateString()).format("YYYY-MM-DD"), value)
    }
    return <View>
        <Text>Grassy Input</Text>
        <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
                setOpen(false)
                setDate(date)
            }}
            onCancel={() => {
                setOpen(false)
            }} />
        <SelectDropdown
            data={GRASS_TYPES}
            onSelect={(selectedItem, index) => {
                setValue(selectedItem)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}
        />
        <Button title={`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`} onPress={() => setOpen(true)} />
        <Button title={"Add"} onPress={onAddToDatabase} />
    </View>
}