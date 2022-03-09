import moment from "moment";
import { GRASS_ELEMENTS, IGrassObject, MOWING_RULES } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const setMowingNotificationToDatabase=async(lastMowDate:string,grassType:GRASS_ELEMENTS)=>{
    const selectedGrass=MOWING_RULES[grassType];
    const lastDate=moment.utc(lastMowDate,"YYYY-MM-DD")
    const currentSeason=lastDate.month()<=6?"summer":"winter";
    const dayNeededToMow=currentSeason==="summer"?selectedGrass.mowLength/selectedGrass.growthRateSummer:selectedGrass.mowLength/selectedGrass.growthRateWinter;
    const dateToMow=lastDate.add(dayNeededToMow,'days').format("DD/MM/YYYY")
    //console.log(dayNeededToMow,dateToMow)
    const existingMow=await getData();
    const mowList:[IGrassObject]= JSON.parse(existingMow?existingMow:"[]");
    const mowObject={
        grassType:grassType,
        dateToMow
    }
    mowList.push(mowObject)
    storeData(JSON.stringify(mowList))
    console.log("Mow List",mowList)
}

export const getGrassNotificationData=async()=>{
    const dataObject=await getData();
    console.log("New Object",dataObject)
    return dataObject?await JSON.parse(dataObject):[];
}
const storeData = async (value:string) => {
    try {
      await AsyncStorage.setItem('mowList', value)
    } catch (e) {
      // saving error
    }
  }
const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('mowList')
      if(value !== null) {
       return value;
      }
    } catch(e) {
      // error reading value
    }
  }
  