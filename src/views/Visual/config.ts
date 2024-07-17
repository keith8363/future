// 左中
export const urlEnum = {
  '境内矿山': new URL('@/assets/EquipmentComprehensiveAdministration/leftCenter1.png',import.meta.url).href,
  '冶炼':new URL('@/assets/EquipmentComprehensiveAdministration/leftCenter2.png',import.meta.url).href,
  '西藏':new URL('@/assets/EquipmentComprehensiveAdministration/leftCenter4.png',import.meta.url).href,
  '国际':new URL('@/assets/EquipmentComprehensiveAdministration/leftCenter3.png',import.meta.url).href,
  '矿山': new URL('@/assets/EquipmentComprehensiveAdministration/leftCenter1.png',import.meta.url).href,
}

// 左下
export const urlEnum1 = {
  '矿山':new URL('@/assets/EquipmentComprehensiveAdministration/leftBottom1.png',import.meta.url).href,
  '冶炼':new URL('@/assets/EquipmentComprehensiveAdministration/leftBottom2.png',import.meta.url).href,
  '西藏':new URL('@/assets/EquipmentComprehensiveAdministration/leftBottom3.png',import.meta.url).href,
  '国际':new URL('@/assets/EquipmentComprehensiveAdministration/leftBottom4.png',import.meta.url).href,
  '自营':new URL('@/assets/EquipmentComprehensiveAdministration/leftBottom5.png',import.meta.url).href,
  '租赁':new URL('@/assets/EquipmentComprehensiveAdministration/leftBottom6.png',import.meta.url).href,
  '外协':new URL('@/assets/EquipmentComprehensiveAdministration/leftBottom7.png',import.meta.url).href,
}

export const unitEnum = {
  '监测权属':'家',
  '监测产线':'个',
  '监测设备':'台',
  '监测测点':'个'
}

export const urlEnum2 = {
  '预测维护':new URL('@/assets/EquipmentComprehensiveAdministration/rightBottom1.png',import.meta.url).href,
  '预测维修':new URL('@/assets/EquipmentComprehensiveAdministration/rightBottom2.png',import.meta.url).href,
  '缺陷总数':new URL('@/assets/EquipmentComprehensiveAdministration/rightBottom3.png',import.meta.url).href,
  '智能报警':new URL('@/assets/EquipmentComprehensiveAdministration/rightBottom4.png',import.meta.url).href,
  '智能诊断':new URL('@/assets/EquipmentComprehensiveAdministration/rightBottom5.png',import.meta.url).href,
  '智能体检':new URL('@/assets/EquipmentComprehensiveAdministration/rightBottom6.png',import.meta.url).href
}

export const backgroundUrl = [
  new URL('@/assets/EquipmentComprehensiveAdministration/background.png',import.meta.url).href,
  new URL('@/assets/EquipmentComprehensiveAdministration/subBackground.png',import.meta.url).href,
]

export interface leftBottom{
  name:string,
  icon:string,
  array:Array<any>
}

export interface center {
  name:string,
  count:string | number
}

export interface rightBottom{
  label?:string,
  name?:string,
  value:string | number,
  value1?:string | number,
  url?:string,
  unit?:string
}

export class dealFun {
  constructor(){

  }
  filter(arr:Array<any>,attr:string,value:string |number,notEqualTo?:Boolean ){
    if(notEqualTo){
      return arr.filter(i=>i[attr] !== value)
    }else{
      return arr.filter(i=>i[attr] === value)
    }  
  }
  total(arr:Array<any>,attr:string){
    return arr.reduce((a,b)=>a + b[attr],0)
  }
  deWeight(arr:Array<any>,attr:string){
    const list = arr.map(i=>i[attr])
    return [...new Set(list)]
  }
  map(arr:Array<any>,obj:Object){
    return arr.map(i=>{
      const newObj = JSON.parse(JSON.stringify(obj))
      for(let item in newObj){
        
        newObj[item] = i[newObj[item]]
      }
      return newObj
    })
  }
  init(arr:Array<any>,zero:Boolean,...args:Array<any>){
    arr.forEach(i=>{
      args.forEach(item=>{
        i[item] = zero ? 0 : i!=='array' ? null : []
      })
      
    })
  }

}

