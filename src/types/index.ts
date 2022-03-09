export interface User {
    id:string |undefined,
    userName:string | undefined | null,
    email:string | undefined | null,
    token:string |undefined
}
export type GRASS_ELEMENTS="Kikuyu" | "Kentucky Blue" | "Buffalo" | "Cynodon"
export type IMOWING_RULES = {
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