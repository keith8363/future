import myFixed from '@/utils/toFixed';
import { ElMessage } from "element-plus";
import * as XLSX from 'xlsx';
const { utils, writeFileXLSX } = XLSX

class MergeCell {
  #map
  #size:any
  headerValue:any
  headerMerge:any
  bodyValue:any
  deep
  bodyMapList:any

  constructor(headers:any, data:any) {
    this.headerMerge = []
    this.headerValue = []
    this.bodyMapList = []
    this.#map = new Map()
    this.deep = 0
    this.init(headers, data)
  }

  /** 数据初始化 */
  init(headers:any, data:any) {
    this.#size = this.getCellsSize(headers)
    this.getBodyMapList(headers)
    this.mergeHeadersCell(headers, 0, 0)
    this.getHeadersValue(headers, 0, 0, this.getCellsSize(headers))
    this.bodyValue = data.map((item:any) =>
      this.bodyMapList.map((key:any) => {
       return typeof item[key] === 'number' ? item[key].toString() : item[key]
      })
    )
    this.deep = this.getDeep(headers)
  }

  /** 获取表头最大深度 */
  getDeep(headers:any) {
    return this.#map.get(headers)[0]
  }

  /** 根据节点获取深度广度 */
  getCellsSize(list:any) {
    if (this.#map.has(list)) {
      return this.#map.get(list)
    }
    if (list?.length) {
      let rows = -1
      let cols = list.length - 1
      list.forEach((item:any) => {
        if (item.child) {
          const size = this.getCellsSize(item.child)
          rows = Math.max(size[0], rows)
          cols += size[1]
        }
      })
      this.#map.set(list, [rows + 1, cols])
      return [rows + 1, cols]
    }
  }

  /** 合并表头 */
  mergeHeadersCell = (headers:any, row:any, col:any) => {
    for (let i = 0, len = headers.length; i < len; i++) {
      const cell = headers[i]
      if (!cell.child?.length) {
        if (row !== this.#size[0]) {
          this.headerMerge.push({
            s: { r: row, c: col + i },
            e: { r: this.#size[0], c: col + i }
          })
        }
      } else {
        const size = this.#map.get(cell.child)
        this.headerMerge.push({
          s: { r: row, c: col + i },
          e: { r: row, c: col + size[1] + i }
        })
        this.mergeHeadersCell(cell.child, row + 1, col + i)
        col += size[1]
      }
    }
  }

  /** 表头赋值 */
  getHeadersValue(headers:any, row:any, col:any, size:any) {
    if (!this.headerValue[row]) {
      if (row > size[0]) return
      this.headerValue[row] = new Array(col).fill('')
    }
    if (!headers?.length) {
      this.headerValue[row].push('')
      row < size[0] && this.getHeadersValue(null, row + 1, col, size)
      return
    }
    for (let i = 0, len = headers.length; i < len; i++) {
      const cell = headers[i]
      this.headerValue[row].push(cell.label)
      if (cell.child?.length) {
        const len = this.getCellsSize(cell.child)[1]
        const emptyNameList = new Array(len).fill('')
        this.headerValue[row].push(...emptyNameList)
      }
      this.getHeadersValue(cell.child, row + 1, col + i, size)
    }
  }

  /** 正文prop对应 */
  getBodyMapList(list:any) {
    if (list?.length) {
      list.forEach((item:any) => {
        if (!item.child) {
          this.bodyMapList.push(item.prop)
        } else {
          this.getBodyMapList(item.child)
        }
      })
    }
  }
}

/**
 * 特殊数据转换
 * @param value 值
 * @param prop 英文名称
 * @param props2 特殊处理表头英文名称数组
 * @param decimalPlace 保留小数点位数
 * @returns 
 */
const dealData = (value:number,prop:string,props2?:Array<string>,decimalPlace?:number) => {
  // 业务特殊逻辑处理--保留两位小数位
  let props = ['cur_month_complete','cur_year_yoy','cur_year_complete','cur_month_yoy','cur_month_mom','month_progress_complete','year_progress_complete','cum_year_progress_complete','year_progress','month_progress']
  // 业务特殊逻辑处理--不保留小数位
  let props1 = ['point_value_m_yoy','point_value_mom','point_value_yoy','price_m_yoy','price_mom']
  // 特殊表头小数点位数存在传参且特殊表头存在传参,参照传参
  if(decimalPlace !== null && props2){

    if(decimalPlace === 0){
      return props2.includes(prop) && value!==null ?  `${value}%` : value
    }

    if(decimalPlace === 2){
      return props2.includes(prop) && value!==null ? `${myFixed(value,'rate')}%` : value
    }
  } 
  // 特殊表头小数点位数不存在传参且特殊表头存在传参,不保留小数位
  if(!decimalPlace && props2){
    props1 = props1.concat(props2)
  }
  return props.includes(prop) && value!==null ? `${myFixed(value,'rate')}%` : (props1.includes(prop) && value!==null ? `${value}%` : value)
}

/**
 * excel文件导出
 * @param mergedCells 表头信息
 * @param list 表数据
 * @param title 表名
 * @param props2 特殊处理表头英文
 * @param decimalPlace 特殊处理小数位数
 * @returns 
 */
export default function(mergedCells:Array<object>,list:Array<object>,title:string,props2?:Array<string>,decimalPlace?:number) {
  const noProblem = list && Array.isArray(list) && list.length > 0
  if(!noProblem){
    ElMessage({
      message:'暂无可导出数据',
      type:'warning'
    })
    return false
  }
  const ws = utils.json_to_sheet([])

  const newList = JSON.parse(JSON.stringify(list))

  mergedCells.forEach(i=>{
    newList.forEach((item:Object)=>{
      i.show === 'template' && !isNaN(item[i.prop]) && (item[i.prop] = dealData(item[i.prop],i.prop,props2,decimalPlace))
    })
  })

  const { headerValue, headerMerge, bodyValue, deep } = new MergeCell(
    mergedCells,
    newList
  )

  // 合并表头
  ws['!merges'] = headerMerge

  const wb = utils.book_new()
  utils.book_append_sheet(wb, ws, 'Data')
  utils.sheet_add_aoa(ws, headerValue, { origin: 'A1' }) // 将js数据转换为工作表
  utils.sheet_add_aoa(ws, bodyValue, { origin: `A${deep + 2}` }) // 将js数据转换为工作表

  writeFileXLSX(wb, `${title}.xlsx`)
}