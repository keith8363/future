import moment from "moment"
import momentTz from 'moment-timezone'
/**
 * 格式化日期
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(time:any, cFormat:string) {
  if (arguments.length === 0) {
    return ''
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  
  return time_str
}



/**根据时间做文字转译
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time:number, option:string) {
  if (('' + time).length === 10) {
    time = parseInt(time + '') * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
            1 +
            '月' +
            d.getDate() +
            '日' +
            d.getHours() +
            '时' +
            d.getMinutes() +
            '分'
    )
  }
}

/**
 * 查询月份开始日期
 * @param {*} year
 * @param {*} month
 * @returns
 */
export function getFirstDayOfMonth(year:number, month:number) {
  const data = new Date(year, month - 1, 1);
  return (
    data.getFullYear() +
    '-' +
    (data.getMonth() + 1 > 9
      ? data.getMonth() + 1
      : '0' + (data.getMonth() + 1)) +
    '-' +
    (data.getDate() > 9 ? data.getDate() : '0' + data.getDate())
  )
}

/**
 * 查询月份结束日期
 * @param {*} year
 * @param {*} month
 * @returns
 */
export function getLastDayOfMonth(year?:number = new Date().getFullYear(), month?:number = new Date().getMonth()+1) {
  if(typeof year !== 'number' || typeof month !== 'number'){
    return ''
  }

  const data = new Date(year, month, 0);

  return (
    data.getFullYear() +
    '-' +
    (data.getMonth() + 1 > 9
      ? data.getMonth() + 1
      : '0' + (data.getMonth() + 1)) +
    '-' +
    (data.getDate() > 9 ? data.getDate() : '0' + data.getDate())
  );
}

/**
 * 根据已知日期计算历史日期
 * @param { string } targetDate 已知日期
 * @param { number } previousDay 天数
 * @returns 
 */
export function getDateStr(targetDate:any, previousDay:number):string {
  if (!targetDate) {
    return ''
  }
  const dd = new Date(targetDate)
  dd.setDate(dd.getDate() - previousDay)
  const y = dd.getFullYear()
  const m = (dd.getMonth() + 1) < 10 ? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1)
  const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate()
  return y + '-' + m + '-' + d
}

/**
 * 获取当前时间进度 --- 默认精确到日粒度进行处理,若配置isMonth为true,则粗放至月粒度进行处理
 * @param { string } range 范围 仅支持：月、年
 * @param { string } time 当前日期
 * @param { string } isMonth 是否以月为维度进行计算
 * @returns 
 */
export function getCurrentTimeSchedule(range:string,time?:string,isMonth?:Boolean){
  if(!time){
    const current_year = new Date().getFullYear()
    const current_Month = new Date().getMonth() + 1
    if(range==='月'){
    
        const current_date_num_for_month = new Date().getDate() 
        const current_Month_days = new Date(current_year,current_Month,0).getDate()
        return Math.round(current_date_num_for_month / current_Month_days * 100)
     
    } 

    if(!isMonth){
      const all_year_days = (current_year % 4 == 0 && current_year % 100 !== 0 || current_year % 400 === 0) ? 366 : 365   
      return Math.round(getDays() / all_year_days * 100)
    }else{
      return Math.round(current_Month / 12 * 100)
    } 
  }else{
    const current_year = new Date(time).getFullYear()
    const current_Month = new Date(time).getMonth() + 1
    if(range==='月'){
      const current_date_num_for_month = new Date(time).getDate() 
      const current_Month_days = new Date(current_year,current_Month,0).getDate()
      return Math.round(current_date_num_for_month / current_Month_days * 100)
    }  
    if(!isMonth){
      const all_year_days = (current_year % 4 == 0 && current_year % 100 !== 0 || current_year % 400 === 0) ? 366 : 365   
      const newTime = time.length!==7 ? time : getLastDayOfMonth(current_year,current_Month)
      
      return Math.round(getDays(newTime) / all_year_days * 100)
    }else{
      return Math.round(current_Month / 12 * 100)
    } 
  } 
}





/**
 * 获取某一日期是今年第几天
 * @param { string } date 具体日期 为null时默认当天 格式要求:2023-11-03
 * @returns 
 */
export function getDays(date?:string){
  const current_date = date ? new Date(date) : new Date()

  
  const year = current_date.getFullYear()
  const month = current_date.getMonth() + 1
  const current_days_for_current_month = current_date.getDate()

  let days = 0
  for(let i = 1;i<month;i++){
    if(i===2){
      if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        days += 29
      } else {
        days += 28
      }
    } else {
      const big_month = [1,3,5,7,8,10,12]
      big_month.indexOf(i)!== -1 ? days += 31 : days += 30
    }
  }
  return days += current_days_for_current_month
}

/**
 * 时间格式化
 * @param {String} time 时间字符串或时间用，支持new Date()的参数
 * @param {String} format 时间格式，默认'YY-MM-DD hh:mm:ss'
 * @returns {String} 指定格式后得时间字符串
 */
export function formatDate(time:string | Date, format = 'YY-MM-DD hh:mm:ss') {
  if (time === null) {
    return ''
  }
  let date = new Date(time);

  let year = date.getFullYear(),
    month = date.getMonth() + 1, // 月份是从0开始的
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();
  let preArr = Array.apply(null, Array(10)).map(function(elem, index) {
    return '0' + index;
  });

  let newTime = format.replace(/YY/g, year)
    .replace(/MM/g, preArr[month] || month)
    .replace(/DD/g, preArr[day] || day)
    .replace(/hh/g, preArr[hour] || hour)
    .replace(/mm/g, preArr[min] || min)
    .replace(/ss/g, preArr[sec] || sec);

  return newTime;
}

/**
 * 业务代码，对mixChart组件中的processs数据进行处理
 * @param val 
 * @returns 
 */
export const machineTime = (val:Array<object>,currentTime:string,isMonth?:Boolean) => {

  if(!Array.isArray(val) || val.length == 0){
    return val
  }
  return val.map(i=>{
    const M = moment(currentTime).format('M') 

    const D = getLastDayOfMonth(+moment(currentTime).format('YYYY'),+M).split('-')[2]

    if(i.name == '年时间进度'){
      i.dateRange = ['1月',`12月`]
      i.value = getCurrentTimeSchedule('年',currentTime,isMonth)
    } 
    if( i.name == '月时间进度'){
      i.dateRange = ['1日',`${D}日`]
      i.value = getCurrentTimeSchedule('月',currentTime) 
    }
    return i
  })


}

/**
 * 获取两个日期天数差
 * @param start_date 
 * @param end_date 
 * @returns 
 */
export const getDateDifference = (start_date:Date, end_date:Date) => {
  let difference = end_date.getTime() - start_date.getTime();
  const millisecondsInDay = 24 * 60 * 60 * 1000;
  const days = difference > 0 ? Math.floor(difference / millisecondsInDay) : Math.ceil(difference / millisecondsInDay);
  return days;
}


/**
 * 将时间格式转换为YY/MM的格式
 * 例: 2024-03 => 24/03
 * 紫金时间格式业务代码不可复用
 * @param time { string }
 * @param type { string } 默认为月，当type存在的时候返回日期为日，格式为2024-03-13 => 03/13
 */
export const formatTimeForZJ = (time:string,type?:string ) => {
  if(!time) return ''
  if(!type){
    let date = moment(time).format('YY/MM')
    return date
  }

  let date = moment(time).format('MM/DD')
  return date
}
 
// 检查当前时间是否在这个时间段内
export function isCurrentDateBetween(startTime:string, endTime:string) {
  // const currentTimestamp = new Date().getTime(); // 采用系统时间
  const currentTimestamp = moment().utcOffset(8).valueOf(); // 采用北京时间
  // const startTimestamp = new Date(startTime).getTime(); 
  // const endTimestamp = new Date(endTime).getTime();   
  
  const startTimestamp = momentTz.tz(startTime, 'YYYY-MM-DD HH:mm', 'Asia/Shanghai').valueOf(); 
  const endTimestamp = momentTz.tz(endTime, 'YYYY-MM-DD HH:mm', 'Asia/Shanghai').valueOf(); 
  const isWithinTimeRange = currentTimestamp >= startTimestamp && currentTimestamp <= endTimestamp;
  return isWithinTimeRange
}


 


