export const GRASS_TYPES=[
    "Kikuyu",
    "Kentucky Blue",
    "Buffalo",
    "Cynodon"
]
export type GRASS_ELEMENTS="Kikuyu" | "Kentucky Blue" | "Buffalo" | "Cynodon"
type IMOWING_RULES = {
    [key in GRASS_ELEMENTS] :{
      growthRateSummer:number,
      growthRateWinter:number,
      mowLength:number
    }
    
}
export interface IGrassObject{
    grassType:string,
    dateToMow:string
}
export const MOWING_RULES:IMOWING_RULES={
  "Kikuyu":{
      growthRateSummer:0.65,
      growthRateWinter:0.45,
      mowLength:8
  },
  "Kentucky Blue":{
    growthRateSummer:0.76,
    growthRateWinter:0.56,
    mowLength:6.5
},
"Buffalo":{
    growthRateSummer:0.55,
    growthRateWinter:0.34,
    mowLength:7
},
"Cynodon":{
    growthRateSummer:0.70,
    growthRateWinter:0.51,
    mowLength:6.2
}
}
