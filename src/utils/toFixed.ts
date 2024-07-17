
import config from '@/config'

const { 
        RATE_DECIMAL_PLACES:rate,
        OUTPUT_DECIMAL_PLACES:output
      } = config

      
/**
 * 保留小数点位数
 * @param val 目标值
 * @param type 保留类型: 1、rate 百分比相关 2、acc 量相关
 * @param places 保留小数点位数
 * @param unit 单位 单位为万t的需要除以10000
 * @returns 
 */
export default function(val: number,type:string,places?:number | Boolean,unit?:string){
  if(!val){
    return 0
  }
  val = typeof val !== 'number' ? +val :val
  if(places){
    places = typeof places === 'number' ? places : 0
    const num = type === 'rate' ? (val * 100).toFixed(places) : (unit && unit == '万t' ?  (val / 10000).toFixed(places) : val.toFixed(places))
    return parseFloat(num) <= 0 && Math.abs(parseFloat(num)) <= 0.1 ? 0 : num
  }else{
    const num = type === 'rate' ? (val * 100).toFixed(rate) : (unit && unit == '万t' ? (val / 10000).toFixed(output) : val.toFixed(output))
    return parseFloat(num) <= 0 && Math.abs(parseFloat(num)) <= 0.1 ? 0 : num
  }
}