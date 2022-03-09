import { NavigationProp, ParamListBase } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { IGrassObject } from "../../constants";
import { getGrassNotificationData } from "../../utils/myMowingService";

interface IProps {
    navigation: NavigationProp<ParamListBase>
}
const Notification: React.FC<IProps> = (props: IProps) => {
    const [list, setList] = useState<[IGrassObject] | []>([])
    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            getGrassNotificationData().then((data) => {
                setList(data)
            })
        });

        return unsubscribe;
    }, [props.navigation]);
    const renderItem = ({item}:{item:IGrassObject}) => {
        return (
            <View>
            <Text>{`Grass Type : ${item.grassType} \nLast Date To Mow${item.dateToMow}`}</Text>
            </View>
        );
    };
    return <View style={{flex:1}}>
        <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.grassType}${item.dateToMow}`}
        />
    </View>
}

export default Notification