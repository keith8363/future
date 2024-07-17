import { decrypt, encrypt } from '@/utils/crypto';
import { formatTimeForZJ } from '@/utils/format-time.ts';
import { fontSizeWidth } from '@/utils/rem';
import myFixed from '@/utils/toFixed';
// import { judge_unit } from '@/utils/unit.ts';
import moment from 'moment';

const unit_list = {
  '金':'kg',
  '铜':'t',
  '锌':'t',
  '铅':'t',
  '锂':'t',
  '银':'kg',
  '铁':'t',
  '钨':'t',
  '钼':'t',
  '钴':'t',
  '采矿量':'万t',
  '剥离量':'万t',
  '选矿量':'万t',
  '掘进进尺':'m',
  '经费投入':'万元',
  '钻探':'米',
  '坑探':'米',
  '槽探':'米',
  '样品':'件',
  '锌+铅':'t',
  '铅+锌':'t',
  'Mo':'万t',
  'Sn':'万t',
  'Li2CO3':'万t',
  'Cs':'万t',
  'Rb2O':'万t',
  'Pd':'t',
  'Ni':'万t',
  'Co':'万t',
  'Cu':'万t',
  'Ag':'t',
  'S':'万t',
  'WO3':'万t',
  'Ga':'万t',
  'Rh':'t',
  'Li2O':'万t',
  'Pt':'t',
  'Au':'t',
  'Fe':'亿t',
  'Zn+Pb':'万t'
}

const map = new Map()

Object.keys(unit_list).forEach(i=>{
  map.set(i,unit_list[i])
})

/**
 * 根据金属名称判断金属单位
 * @param val 
 * @returns 
 */
const judge_unit = (val:string) => {
  if(!val)return '' 
  return map.get(val) || ''
}

interface item {
  id:string,
  name:string,
  des:string,
  sonTitle:string,
  icon:string,
  operValue:string,
  comValue:string,
  annualValue:string,
  comannualValue:string,
  QOQNameValue:string,
  tips:string
}

interface tips {
  remark_info:String
  target_id:String
  target_name:String
}

export const dealHeader = (val:Array<item>,tipsList:any) => {
  const base_info = {
    operName:'当月累计',
    annual:'年度累计',
    QOQName:'年度同比'
  }
  return val.map((i,index)=>{
    const unit = judge_unit(i.element_name)
    const dynamic_info = {
      id: (index+1).toString(),
      name:i.element_name,
      des:`${judge_unit(i.element_name)}/完成率`,
      sonTitle:`${i.element_name}产量`,
      icon: new URL('@/assets/jin.png',import.meta.url).href,
      operValue: myFixed(i.cur_month_accu,'acc',2,unit),
      comValue: myFixed(i.cur_month_complete,'rate',2),
      annualValue: myFixed(i.cur_year_accu,'acc',2,unit), 
      comannualValue: myFixed(i.cur_year_complete,'rate',2),
      QOQNameValue: myFixed(i.cur_year_yoy,'rate',2),
      tips:`<div>${tipsList.get(1) || ''}</div>`
    }
    return Object.assign(dynamic_info,base_info) 
  })
}

const color_configs = () => {
  return [
    {
    type:"linear",
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0, color: "#7b89ffcc" // 0% 处的颜色
    }, {
        offset: 1, color: "#4261f6cc" // 100% 处的颜色
    }],
    global: false // 缺省为 false
  },
  {
    type:"linear",
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0, color: "#FFAF47CC"  // 0% 处的颜色
    }, {
        offset: 1, color: "#FB8C2DCC"// 100% 处的颜色
    }],
    global: false // 缺省为 false
},
{
  type:"linear",
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [{
      offset: 0, color: "#7b89ffcc" // 0% 处的颜色
  }, {
      offset: 1, color: "#4261f6cc" // 100% 处的颜色
  }],
  global: false // 缺省为 false
},
{
  type:"linear",
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [{
      offset: 0, color: "#FFAF47CC"  // 0% 处的颜色
  }, {
      offset: 1, color: "#FB8C2DCC"// 100% 处的颜色
  }],
  global: false // 缺省为 false
},]
}

export class echartsConfig {
  title = '金产量趋势'
  id = 0
  names = [] as Array<string>
  unit = 'kg'
  data = [
    {
      name:"当月完成",
      type:"bar",
      data:[] as Array<number>,
      unit:"kg",
      label:{
        show:false,
        position:'top'
      },
    },
    {
      name:"月同比",
      type:"line",
      data:[] as Array<number>,
      markLine: {
       silent: true, // 鼠标移动到标记线上无操作
       symbol: ['', ''],
       symbolSize: fontSizeWidth(16),
       label: {
         show: false,
         fontSize: fontSizeWidth(16),
        },
        data: [{
          yAxis: "0",
          lineStyle: {
            color: "#000"
          }
        }]
      },
      unit:"%",
      yAxisIndex:1,
    },
    {
      name:"月环比",
      type:"line",
      data:[] as Array<number>,
      unit:"%",
      yAxisIndex:1,
    },
    {
      name:"完成率",
      type:"line",
      data:[] as Array<number>,
      unit:"%",
      yAxisIndex:1,
      markLine: {
       silent: true, // 鼠标移动到标记线上无操作
       symbol: ['', ''],
       symbolSize: fontSizeWidth(16),
       label: {
         show: false,
         fontSize: fontSizeWidth(16),
      }
    },
    }
  ]
  xAxisFontSize = fontSizeWidth(10)
  loading = false
  color = color_configs()

  seriesOpts = {
    itemStyle:{
      borderRadius:[fontSizeWidth(2),fontSizeWidth(2),0,0]
    }, 
    showSymbol:true,
    symbolSize:fontSizeWidth(8),
  }
  tooltips = {
    showDelay:true,
    axisPointer:{
      type:'shadow',
      shawdowStyle:{
        color: '#E3E8FF',
        opcity:0.58,
        width:fontSizeWidth(20)
      }
    }
  }
  grid = {
    x:fontSizeWidth(65),
    y:fontSizeWidth(35),
    x2:fontSizeWidth(65),
    y2:fontSizeWidth(65),
  }
  yAxis = [
      {
        type: 'value',
        name: `单位:kg`,
        alignTicks:true,
      },
      {
        type: 'value',
        position:'right',
        alignTicks:true,
        max: function (value) {
              return Math.ceil(value.max);
        },
        axisLabel:{
            show:true,
            formatter: function(value){
              const places = value.toString().split('.')
              if(places[1] && places[1].length>2){
                return value.toFixed(2) + '%'
              }else{
                return value + '%'
              }
            }
          }
      }
  ]

  constructor(title:string,type?:string,M?:string){
    this.title = title
    let metal
    if(!type){
      metal = title.slice(0,1)
    }else{
      metal = M
    }
    
    this.unit = judge_unit(metal)
    this.yAxis[0].name = `单位${judge_unit(metal)}`
    if(!title.includes('趋势')){
      this.type = '月'
    }
  }

  reset(){
    this.names = []
    this.data.forEach(i=>{
      i.data = []
    })
    this.data = this.data.filter(i=>i.name!=='当月计划')
  }

  initProductOutput(Arr:Array<Object>,index:number){
      this.reset()
      const newList = Arr.sort((a,b)=>{
        return b.cur_month_accu - a.cur_month_accu
      })
      const NL = newList.length > 10 ? newList.slice(0,10) : newList
      NL.forEach(i=>{
        const unit = judge_unit(i.element_name)
        const cur_month_accu = i.cur_month_accu ? myFixed(i.cur_month_accu,'acc',2) : 0
        const cur_month_yoy = i.cur_month_yoy ? myFixed(i.cur_month_yoy,'rate') : 0
        const cur_month_mom = i.cur_month_mom ? myFixed(i.cur_month_mom,'rate') : 0
        const cur_month_complete = i.cur_month_complete ? myFixed(i.cur_month_complete,'rate') : 0
        this.unit = unit
        this.data[0].data.push(cur_month_accu)
        this.data[1].data.push(cur_month_yoy)
        this.data[2].data.push(cur_month_mom)
        this.data[3].data.push(cur_month_complete)
        this.names.push(i.short_name)  
      }) 

      const newRes = JSON.parse(JSON.stringify(this.data))
      return index === 1 ? newRes.slice(0,3) : newRes.filter(i=>i.name!=='月同比' && i.name!=='月环比')

  }

  initProductOutputTrend(Arr:Array<Object>,type:String,index:number){
      this.reset()
      const planConfig = {
        name:"当月计划",
        type:"bar",
        data:[] as Array<number | string>,
        unit:'kg',
        label:{
          show:true,
          // position:'top',
          position: ['100%', '50%'],
          color:'#f1b171'
        },
      }
      const isDay = type === 'Day'
      Arr.forEach(i=>{
        const unit = judge_unit(i.element_name)
        const accu = isDay ? myFixed(i.cur_day_accu,'acc',true) : myFixed(i.cur_month_accu,'acc',true) 
        const cur_month_yoy = i.cur_month_yoy ? myFixed(i.cur_month_yoy,'rate') : 0
        const cur_month_mom = i.cur_month_mom ? myFixed(i.cur_month_mom,'rate') : 0
        const cur_month_accu_plan = i.cur_month_accu_plan ? myFixed(i.cur_month_accu_plan,'acc',true) : 0
        const complete = isDay ? i.cur_day_complete : i.cur_month_complete
        const name = i.biz_date ? !isDay ? formatTimeForZJ(i.biz_date) : formatTimeForZJ(i.biz_date,'Day') : ''
        this.unit = unit
        this.data[0].data.push(accu)
        this.data[0].name = isDay ? '当日完成' : '当月完成'
        this.data[1].data.push(cur_month_yoy)
        this.data[2].data.push(cur_month_mom)
        this.data[3].data.push(complete * 100)
        this.interval = isDay ? 1 : 0
        this.names.push(name)
        planConfig.data.push(cur_month_accu_plan)
        planConfig.unit = unit
      })
      this.data.forEach(i=>{
        if(i.name === '当月完成'){
          i.label.color = '#808ef4'
          i.label.show = true
          // i.label.position = ['-110%', '10%']
        } 
      
      })
      
      !isDay && this.data.push(planConfig)
      this.data = this.data.sort((a,b)=>{
        return a.type.length - b.type.length
      })
      const newRes = JSON.parse(JSON.stringify(this.data))
      return index === 1 ? newRes.filter(i=>i.name!=='完成率') : newRes.filter(i=>i.name!=='月同比' && i.name!=='月环比')
  }
}

export const table_tr = (type:string = 'rate') => {
  if(type === 'rate'){
    return  [
      {
        id: '1',
        label: '企业名称',
        prop: 'short_name',
        show: 'template',
      },
      {
        id: '9',
        label: '当日产量',
        prop: 'cur_day_accu',
        show: 'template',
        align:"right",
      },
      {
        id:'10',
        label:'周产量',
        prop:'cur_week_accu',
        show:'template',
        align:"right",
      },
      {
        id: '2',
        label: '月累计产量',
        prop: 'cur_month_accu',
        show: 'template',
        align:"right",
        width:fontSizeWidth(100)
      },
      {
        id: '4',
        label: '月完成率',
        prop: 'cur_month_complete',
        show:'template',
        align:"right",
      },
      {
        id: '5',
        label: '月进度实现率',
        prop: 'month_progress_complete',
        show:'template',
        align:"right",
        width:fontSizeWidth(110)
      },
      {
        id:'11',
        label:'上月产量',
        prop:'lastmonth_month_acc',
        show:'template',
        align:"right",
      },
      {
        id: '6',
        label: '年累计产量',
        prop:'cur_year_accu',
        show:'template',
        align:"right",
        width:fontSizeWidth(100)
      },
      {
        id: '7',
        label: '年完成率',
        prop: 'cur_year_complete',
        show:'template',
        align:"right",
      },
      {
        id: '8',
        label: '年进度实现率',
        prop: 'year_progress_complete',
        show:'template',
        align:"right",
        width:fontSizeWidth(110)
      }
    ]
  }else{
    return [
      {
        id: '1',
        label: '企业名称',
        prop: 'short_name',
        show: 'template',
      },
      {
        id: '2',
        label: '当日产量',
        prop: 'cur_day_accu',
        show:'template',
        align:"right",
      },
      {
        id:'8',
        label:'周产量',
        prop:'cur_week_accu',
        show:'template',
        align:"right",
      },
      {
        id: '3',
        label: '月累计产量',
        prop: 'cur_month_accu',
        show:'template',
        align:"right",
        
      },
      {
        id: '4',
        label: '月累计同比',
        prop: 'cur_month_yoy',
        show:'template',
        align:"right",
      },
      {
        id: '5',
        label: '月累计环比',
        prop: 'cur_month_mom',
        show:'template',
        align:"right",
      },
      {
        id:'9',
        label:'上月产量',
        prop:'lastmonth_month_acc',
        show:'template',
        align:"right",
      },
      {
        id: '6',
        label: '年累计产量',
        prop: 'cur_year_accu',
        show:'template',
        align:"right",
      },
      {
        id: '7',
        label: '年累计同比',
        prop: 'cur_year_yoy',
        show:'template',
        align:"right",
      },
    ]
  }
 
}

export class table {
  title = '金产量情况'
  id = 0
  hasIndex = false
  showHeader = true
  hasPagination = false
  heightLightClass = 'height_light'
  hasExpand = false
  hasSelect = false
  emptyText = '暂无数据'
  border = true
  stripe = false
  hasOperation = false
  hasEmptyCell = false
  unit = 'kg'
  tableHeight = fontSizeWidth(600)
  data = []
  tr = table_tr('rate')

  constructor(metal:string){
    this.title = `${metal}产量情况`
    this.unit = judge_unit(metal)
  }

  reset(){
    this.data = []
  }
}

export class SlideShow {
  id = 0 
  time = ''
  loading = false
  banner = new Map()
  productOutput = new Map()
  productOutputTrendForDay = new Map()
  productOutputTrendForMonth = new Map()
  tips = new Map()
  currentIndex = 0 // index for card
  currentBtnIndex = 0 // index for btn
  companyName = null
  companyIndex = 0
  timer = 0
  flag = false
  currentProducOut = new echartsConfig('金产量')
  currentTrend = new echartsConfig('金产量趋势')
  currentTable = new table('金')
  currModel = {}
  activeText = '月'
  inactiveText = '日'
  currentText = '月'
  timeStandard = { // 定时器时间标准
    '金':3000,
    '铜':3000,
    '锌':5000,
    '银':3000,
    '铅':10000,
    '钴':10000
  }

  constructor(val?:Object){
    this.time = moment().subtract(2, 'day').format('YYYY-MM-DD')
    if(val){
      for(let i in val){
        this[i] = val[i]
      }
      const data = this.currentTable.data
      if(data.length>0){
        const metal = data[0].element_name
        const name = data[0].short_name
        const fun = async() => {
           await this.getCurrentTrend(metal,name)
        }
        fun()
        this.id++        
      }
      this.id++
    }
  }

  setBanner(val:Array<Object>){
    if(val.length>0){
      val.forEach((i,index) => {
        this.banner.set(index,i)
      });
      this.getCurrModel()
    }
  }

  setProductOutput(val:Array<Object>){
    Array.from(this.banner.values()).forEach(i=>{
      const newList = val.filter(item=>item.element_name === i.name)
      this.productOutput.set(i.name,newList)
    })   
  }

  setTrend(val:Array<Object>,type:String){
    const nameList = val.map(i=>i.short_name)
    const newNameList = [...new Set(nameList)]
    newNameList.forEach(i=>{
      const item = val.filter(item => item.short_name === i)
      type==='Day' && this.productOutputTrendForDay.set(i,item)
      type==='Month' && this.productOutputTrendForMonth.set(i,item)
    })
  }

  setTips(arr:Array<tips>){
    if(arr && Array.isArray(arr)){
      arr.forEach(e => {
        this.tips.set(+e.target_id,e.remark_info)
      })
    }else{
      this.tips.clear()
    }
  }

  step1(metal:string){
    const time = this.timeStandard[metal]
    this.timer && clearInterval(this.timer)
    if(time===3000){
      this.timer = setInterval(()=>{
        // 暂定逻辑企业停留3秒内只展示完成率
        this.currentBtnIndex ? (this.currentBtnIndex = 0) : (this.currentBtnIndex = 0)
        this.getCurrentProductOutput(metal) 
        const len = this.currentTable.data.length
        if(len>0){
          this.getCurrentTable(metal)
          this.companyName = this.currentTable.data[this.companyIndex+1]?.short_name || null
          this.companyName && this.getCurrentTrend(metal,this.companyName)
          this.companyIndex < len-1  ? this.companyIndex++ : this.currentIndexChange()
        }
      },time)
    }else{
      const time1 = time / 2
      this.flag = false
      this.currentBtnIndex = 0
      this.timer = setInterval(()=>{
        this.currentBtnIndex ? (this.currentBtnIndex = 0) : (this.currentBtnIndex = 1)
        this.getCurrentTable(metal)
        const len = this.currentTable.data.length
        if(len>0){
          if(!this.flag){
            this.getCurrentProductOutput(metal) 
            this.companyName = this.currentTable.data[this.companyIndex]?.short_name || null
            this.companyName && this.getCurrentTrend(metal,this.companyName)
            this.flag =!this.flag
          }else{
            this.getCurrentProductOutput(metal) 
            this.companyName = this.currentTable.data[this.companyIndex+1]?.short_name || null
            this.companyName && this.getCurrentTrend(metal,this.companyName)
            this.flag =!this.flag
            this.companyIndex < len-1  ? this.companyIndex++ : this.currentIndexChange()
          }
        }
      },time1)
    }
  }

  getBanner(){ 
    return Array.from(this.banner.values()) 
  }

  getCurrentTable(metal:string){
    return new Promise((resolve,rejects)=>{
        this.currentTable = new table(metal)
        this.currentTable.title = `${metal}产量${this.btnName()}情况`
        this.currentTable.data = this.productOutput.get(metal) || []
        this.currentTable.tr = this.currentBtnIndex ? table_tr('mom') : table_tr('rate')
        this.id++
        resolve(true)
    })
  }

  getCurrentProductOutput(metal:string){
    return new Promise((resolve,rejects)=>{
        this.currentProducOut = new echartsConfig(`${metal}产量`)
        const list = this.productOutput.get(metal) || []
        this.currentProducOut.data = this.currentProducOut.initProductOutput(list,this.currentBtnIndex)
        this.id++
        resolve(true)
    })
  }

  getCurrentTrend(metal:string,companyName:string){
    return new Promise((resolve,rejects)=>{
          this.currentTrend = new echartsConfig(`${companyName}${metal}产量趋势`,'trend',metal)
        if(this.currentText === '日'){
          const list = this.productOutputTrendForDay.get(companyName)
          const item = list.filter(i=>i.element_name===metal)
          this.currentTrend.data = this.currentTrend.initProductOutputTrend(item,'Day',this.currentBtnIndex)
        }else{
          const list = this.productOutputTrendForMonth.get(companyName)
          const item = list.filter(i=>i.element_name===metal)
          this.currentTrend.data = this.currentTrend.initProductOutputTrend(item,'Month',this.currentBtnIndex)
        }
        this.currentTrend.title = `${companyName}${metal}产量趋势`
        this.id++
        resolve(true)
    })
  }

  getCurrModel(){
    this.currModel = this.banner.get(this.currentIndex)
  }

  btnName(){
    return this.currentBtnIndex === 1 ? '同环比' : '完成率'
  }

  currentIndexChange(){
    this.companyIndex = 0
    this.companyName = null
    if(this.currentIndex < Array.from(this.banner.values()).length - 1){
      this.currentIndex++
    }else{
      this.currentIndex = 0
    }
    this.begin() 
  }

  // 流程开始
  begin(){ 
      this.currentBtnIndex = 0
      clearInterval(this.timer)
      this.currentText = '月'
      
      this.getCurrModel()

      let p1 = this.getCurrentTable(this.currModel.name)
      
      let p2 = this.getCurrentProductOutput(this.currModel.name)
      
      let p3 = this.getCurrentTrend(this.currModel.name,this.currentProducOut.names[0])

      Promise.all([p1,p2,p3]).then(()=>{
        this.id++
        // 定时器开始
        this.step1(this.currModel.name)
      })
  }

  // 缓存相关
  dealCache(val?:Object){
    const slideShowInfo = localStorage.getItem('slideShowInfo')
    const now = moment().subtract(2, 'day').format('YYYY-MM-DD')

    if(!val && slideShowInfo){
      const resolver = decrypt(slideShowInfo)
      if(resolver.time == now){
        const newMapInfo = decrypt(localStorage.getItem('mapInfo'))
        resolver.banner = new Map(newMapInfo.banner)
        resolver.productOutput = new Map(newMapInfo.productOutput)
        resolver.productOutputTrendForDay = new Map(newMapInfo.productOutputTrendForDay)
        resolver.productOutputTrendForMonth = new Map(newMapInfo.productOutputTrendForMonth)
        resolver.tips = new Map(newMapInfo.tips)
        return resolver
      } 
      return false
    }

    if(!val && !slideShowInfo){
      return false
    }

    if(val && slideShowInfo){
      const resolver = decrypt(slideShowInfo)
      if(resolver.time == val.time){
        return false
      } 
      const mapInfo = {
        banner:Array.from(val.banner),
        productOutput:Array.from(val.productOutput),
        productOutputTrendForDay: Array.from(val.productOutputTrendForDay),
        productOutputTrendForMonth: Array.from(val.productOutputTrendForMonth),
        tips:Array.from(val.tips)
      }
      val.loading = false
      const newVal = encrypt(JSON.parse(JSON.stringify(val)))
      const newMapInfo = encrypt(JSON.parse(JSON.stringify(mapInfo)))
      localStorage.removeItem('slideShowInfo')
      localStorage.removeItem('mapInfo')
      localStorage.setItem('slideShowInfo',newVal)
      localStorage.setItem('mapInfo',newMapInfo)
    }

    if(val && !slideShowInfo){
      const mapInfo = {
        banner:Array.from(val.banner),
        productOutput:Array.from(val.productOutput),
        productOutputTrendForDay: Array.from(val.productOutputTrendForDay),
        productOutputTrendForMonth: Array.from(val.productOutputTrendForMonth),
        tips:Array.from(val.tips)
      }
      val.loading = false
      const newVal = encrypt(JSON.parse(JSON.stringify(val)))
      const newMapInfo = encrypt(JSON.parse(JSON.stringify(mapInfo)))
      localStorage.setItem('slideShowInfo',newVal)
      localStorage.setItem('mapInfo',newMapInfo)
    }
  }  
}



