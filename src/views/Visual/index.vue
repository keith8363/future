<template>
  <div class='ECA' :style="{'backgroundImage':`url(${backgroundUrl})`}" v-loading="loading">
    <div class="ECA-header">
      <div class="ECA-header-left">
        <div class="ECA-header-left-btn active">
          {{ moment(new Date()).format('YYYY') }}
          <div class="ECA-header-left-btn-icon"></div>
        </div>
      </div>
      <div class="ECA-header-center">
        集团设备综合管理驾驶舱
      </div>
      <div class="ECA-header-right">
        <div class="ECA-header-right-btn" :class="{'active':!query}" @click="handleBtn(0)">集团层</div>
        <div class="ECA-header-right-btn" :class="{'active':query}" @click="handleBtn(1)">权属层</div>
      </div>
    </div>
    <div class="ECA-container">
      <div class="ECA-container-left" v-if="!query">
        <div class="ECA-container-left-box" >
          <Title :positionIndex="0"></Title> 
          <div class="ECA-container-left-box-echarts">
            <chart-pie 
              v-if="ServiceStatistics.leftTop.data.length>0"
              class="ECA-container-left-box-echarts-pie" 
              :data="ServiceStatistics.leftTop"
              :data-attr="ServiceStatistics.leftTop.total"
              :data-unit="ServiceStatistics.leftTop.unit"
            ></chart-pie>

            <div class="ECA-container-left-box-echarts-legend"  v-if="ServiceStatistics.leftTop.data.length>0">
              <div class="ECA-container-left-box-echarts-legend-item" v-for="(item,index) in ServiceStatistics.leftTop.data" :key="index">
                <div class="ECA-container-left-box-echarts-legend-item-left">
                  <div class="ECA-container-left-box-echarts-legend-item-left-icon" :style="{'backgroundColor':ServiceStatistics.leftTop.color[index]}"></div>
                  {{item.name}}
                </div>
                <div class="ECA-container-left-box-echarts-legend-item-right">
                  {{ item.value }}
                  <span class="ECA-container-left-box-echarts-legend-item-right-unit">{{ ServiceStatistics.leftTop.unit }}</span>
                </div>
              </div>
            </div>

            <div 
              class="ECA-container-left-box-echarts-empty"
              v-if="ServiceStatistics.leftTop.data.length===0"
            >
              暂无数据
            </div>
          </div>
        </div>
        <div class="ECA-container-left-box">
          <Title :positionIndex="1"></Title> 
          <div class="ECA-container-left-box-equipm" >
            <Tab 
              class="ECA-container-left-box-equipm-tab"
              :tabLsit="ServiceStatistics.leftMiddle.tabs" 
              :currentId="ServiceStatistics.leftMiddle.currentId"
              @currentIdChanged="leftCurrentIdChanged"
            ></Tab>
            <div class="ECA-container-left-box-equipm-quantity" v-if="ServiceStatistics.leftMiddle.equipmQuantity.length>0">
              <div 
                class="ECA-container-left-box-equipm-quantity-item" 
                v-for="(item,index) in ServiceStatistics.leftMiddle.equipmQuantity" 
                :key="index"
              >
                <img :src="item.url" alt="">
                <div class="ECA-container-left-box-equipm-quantity-item-content">
                  <div class="ECA-container-left-box-equipm-quantity-item-content-label">
                    {{ item.label }}
                  </div>
                  <div class="ECA-container-left-box-equipm-quantity-item-content-value">
                    {{ !item.value && item.value !==0 ? '无' : item.value}}
                    <span class="ECA-container-left-box-equipm-quantity-item-content-unit" v-show="!isNull(item.value)">{{ item.unit }}</span>
                  </div>
                </div>
                <div class="ECA-container-left-box-equipm-quantity-item-circle" v-show="index === 3">
                  <div class="ECA-container-left-box-equipm-quantity-item-circle-number">{{ ServiceStatistics.leftMiddle.total }}</div>
                  <div class="ECA-container-left-box-equipm-quantity-item-circle-label">所有设备</div>
                  <div class="ECA-container-left-box-equipm-quantity-item-circle-1"></div>
                  <div class="ECA-container-left-box-equipm-quantity-item-circle-2"></div>
                </div>
              </div>
            </div>
            <div class="ECA-container-left-box-equipm-quantity" v-else>
                <div class="ECA-container-left-box-equipm-quantity-empty">暂无数据</div>
              </div>
          </div>
         
        </div>
        <div class="ECA-container-left-box">
          <Title :positionIndex="2"></Title> 
          <div class="ECA-container-left-box-grade" v-if="ServiceStatistics.leftBottom.length>0">
            <Grade 
              class="ECA-container-left-box-grade-item"
              v-for="(i,index) in ServiceStatistics.leftBottom" 
              :key="index" 
              :item="i"
            ></Grade>
          </div>

          <div class="ECA-container-left-box-grade" v-else>
            <div class="ECA-container-left-box-grade-empty">暂无数据</div>
          </div>
        </div>
      </div>
      <div class="ECA-container-left" v-else>
        <div class="ECA-container-left-box" >
          <Title :positionIndex="6"></Title> 
          <div class="ECA-container-left-box-number">
          <div class="ECA-container-left-box-number-title">
            <div class="ECA-container-left-box-number-title-left">所有设备数量</div>  
            <div class="ECA-container-left-box-number-title-right">
              <div class="ECA-container-left-box-number-title-right-value">{{ overshipStatistics.leftTop.total }}</div>
              台
            </div>
          </div>
          <div class="ECA-container-left-box-number-content" v-if="overshipStatistics.leftTop.array.length>0">
            <div class="ECA-container-left-box-number-content-item" v-for="(item,index) in overshipStatistics.leftTop.array" :key="index">
              <div class="ECA-container-left-box-number-content-item-label">{{ item.label }}</div>
              <div class="ECA-container-left-box-number-content-item-value">{{ !item.value && item.value!==0 ? '无' : item.value}}</div>
            </div>
          </div>
          <div class="ECA-container-left-box-number-content" v-else>
            <div class="ECA-container-left-box-number-content-empty">
              暂无数据
            </div>
          </div>
          </div>
        </div>
        <div class="ECA-container-left-box" >
          <Title :positionIndex="7"></Title> 
          <div class="ECA-container-left-box-echarts">
            <chart-pie 
              v-if="overshipStatistics.leftCenter.data.length>0"
              class="ECA-container-left-box-echarts-pie" 
              :data="overshipStatistics.leftCenter"
              :data-attr="overshipStatistics.leftCenter.total"
              :data-unit="overshipStatistics.leftCenter.unit"
            ></chart-pie>

            <div class="ECA-container-left-box-echarts-legend"  v-if="overshipStatistics.leftCenter.data.length>0">
              <div class="ECA-container-left-box-echarts-legend-item" v-for="(item,index) in overshipStatistics.leftCenter.data" :key="index">
                <div class="ECA-container-left-box-echarts-legend-item-left">
                  <div class="ECA-container-left-box-echarts-legend-item-left-icon" :style="{'backgroundColor':overshipStatistics.leftCenter.color[index]}"></div>
                  {{item.label}}
                </div>
                <div class="ECA-container-left-box-echarts-legend-item-right">
                  {{ !item.value && item.value!==0 ? '无' : item.value }}
                  <span class="ECA-container-left-box-echarts-legend-item-right-unit" v-show="!isNull(item.value)">{{ overshipStatistics.leftCenter.unit }}</span>
                </div>
              </div>
            </div>
            <div 
              class="ECA-container-left-box-echarts-empty"
              v-if="overshipStatistics.leftCenter.data.length===0"
            >
              暂无数据
            </div>
          </div>
        </div>
        <div class="ECA-container-left-box" >
          <Title :positionIndex="8"></Title> 
          <div class="ECA-container-left-box-echarts1" v-if="overshipStatistics.leftBottom.data.length>0">
            <div class="ECA-container-left-box-echarts1-legend">
              <div 
                class="ECA-container-left-box-echarts1-legend-item" 
                v-for="(item,index) in overshipStatistics.leftBottom.data" 
                :key="index"
              >
                <span>{{ item.value }}</span>{{ overshipStatistics.leftBottom.unit }}
              </div>
            </div>
            <chart-bar 
              class="ECA-container-left-box-echarts1-bar"
              :data="overshipStatistics.leftBottom"
            ></chart-bar>
          </div>
          <div class="ECA-container-left-box-echarts1" v-else>
            <div class="ECA-container-left-box-echarts1-empty">
              暂无数据
            </div>
          </div>
        </div>
      </div>

      <div class="ECA-container-center" v-if="!query">
        <div class="ECA-container-center-header">
          <div class="ECA-container-center-header-item" v-for="item in ServiceStatistics.center">
            <div class="ECA-container-center-header-item-number">
              {{ !item.count && item.count!==0 ? '无' : item.count }}
            </div>
            <div class="ECA-container-center-header-item-label">
              {{ item.name }}
            </div>
          </div>
        </div>  
        <div class="ECA-container-center-body" id="body" >
          <chart-map 
            :key="ServiceStatistics.mapData.type"
            class="ECA-container-center-body-map" 
            :data="ServiceStatistics.mapData"
            @getCurrentItem="getCurrentItem" 
          ></chart-map>
        </div>
      </div>
      <div class="ECA-container-center ECA-container-submain" v-else>
        <div class="ECA-container-submain-item" v-for="(item,index) in overshipStatistics.center" :key="index">
          <div class="ECA-container-submain-item-value">{{ !item.value && item.value!==0 ? '无' : item.value }}</div>
          <div class="ECA-container-submain-item-label">{{ item.label }}</div>
        </div>

        <div class="ECA-container-submain-btn">
          {{overshipStatistics.currentOvership}}
          <div class="ECA-container-submain-btn-icon"></div>
        </div>
      </div>

      <div class="ECA-container-right">
        <div class="ECA-container-right-box">
          <Title :positionIndex="3"></Title>
          <div class="ECA-container-right-box-radar">
            <div class="ECA-container-right-box-radar-left">
              <Radar></Radar> 
            </div>
            <div class="ECA-container-right-box-radar-right" v-if="ServiceStatistics.rightTop.length>0">
              <div class="ECA-container-right-box-radar-right-item" v-for="item in ServiceStatistics.rightTop">
                <div class="ECA-container-right-box-radar-right-item-label">{{ item.name }}</div>
                <div class="ECA-container-right-box-radar-right-item-number">
                  {{ !item.count && item.count!==0 ? '无' : item.count }}
                  <span class="ECA-container-right-box-radar-right-item-unit" v-show="!isNull(item.count)">{{ unitEnum[item.name] }}</span>  
                </div>
              </div>
            </div>
            <div class="ECA-container-right-box-radar-right" v-else>
              <div class="ECA-container-right-box-radar-right-empty">
              暂无数据
              </div>
            </div>


          </div>
        </div>
        <div class="ECA-container-right-box">
          <Title :positionIndex="4"></Title> 
          <div class="ECA-container-right-box-alarm">
          <Tab 
            v-if="!query"
            class="ECA-container-right-box-alarm-tab"
            :tabLsit="ServiceStatistics.rightMiddle.tabs" 
            :currentId="ServiceStatistics.rightMiddle.currentId"
            @currentIdChanged="rightCurrentIdChanged"
          ></Tab>
          <div class="ECA-container-right-box-alarm-state" v-if="ServiceStatistics.rightMiddle.header.length>0">
            <div class="ECA-container-right-box-alarm-state-header" >
              <div class="ECA-container-right-box-alarm-state-header-label">所有企业</div>
              <div>
                <span class="ECA-container-right-box-alarm-state-header-label">设备总数</span>
                <span class="ECA-container-right-box-alarm-state-header-value">
                  {{ !ServiceStatistics.rightMiddle.header[0] && ServiceStatistics.rightMiddle.header[0]!==0 ? '无' : ServiceStatistics.rightMiddle.header[0]}}
                  <span 
                    class="ECA-container-right-box-alarm-state-header-unit" 
                    v-show="!isNull(ServiceStatistics.rightMiddle.header[0])"
                  >台</span>
                </span>
              </div>
              <div>
                <span class="ECA-container-right-box-alarm-state-header-label">正常数</span>
                <span class="ECA-container-right-box-alarm-state-header-value">
                  {{ !ServiceStatistics.rightMiddle.header[1] && ServiceStatistics.rightMiddle.header[1]!==0 ? '无' :ServiceStatistics.rightMiddle.header[1] }}
                  <span 
                    class="ECA-container-right-box-alarm-state-header-unit"
                    v-show="!isNull(ServiceStatistics.rightMiddle.header[1])"
                  >台</span>
                </span>
              </div>
              <div>
                <span class="ECA-container-right-box-alarm-state-header-label">正常率</span>
                <span class="ECA-container-right-box-alarm-state-header-value">
                  {{ !ServiceStatistics.rightMiddle.header[2] && ServiceStatistics.rightMiddle.header[2]!==0 ? '无' : ServiceStatistics.rightMiddle.header[2]}}
                  <span 
                    class="ECA-container-right-box-alarm-state-header-unit"
                    v-show="!isNull(ServiceStatistics.rightMiddle.header[2])"
                  >%</span>
                </span>
              </div>
            </div>
            <div class="ECA-container-right-box-alarm-state-body" v-if="ServiceStatistics.rightMiddle.process.length>0">
              <Process v-for="(item,index) in ServiceStatistics.rightMiddle.process" :key="index" :item="item"></Process>
            </div>
          
          </div>
          <div class="ECA-container-right-box-alarm-state" v-else>
              <div class="ECA-container-right-box-alarm-state-empty">
                暂无数据
              </div>
            </div>
          </div>
        </div>
        <div class="ECA-container-right-box">
          <Title :positionIndex="5"></Title> 
          <div class="ECA-container-right-box-maintain" v-if="ServiceStatistics.rightBottom.length>0">
            <div 
              class="ECA-container-right-box-maintain-item" 
              :class="{'warning':item.label=='缺陷总数'}"
              v-for="(item,index) in ServiceStatistics.rightBottom" 
              :key="index"
            >
              <img :src="urlEnum2[item.label]" alt="">
              <div class="ECA-container-right-box-maintain-item-right">
                <div class="ECA-container-right-box-maintain-item-right-label">
                  {{ item.label }}
                </div>
                <div class="ECA-container-right-box-maintain-item-right-value">
                  {{ !item.value && item.value!==0 ? '无' : item.value}}
                  <span class="ECA-container-right-box-maintain-item-right-value-unit" v-show="!isNull(item.value)">{{ item.label.includes('缺陷') ? '例' : item.label.includes('体检') ? '台次' : '次' }}</span>
                </div>
              </div>
            </div>
          </div> 

          <div class="ECA-container-right-box-maintain" v-else>
            <div class="ECA-container-right-box-maintain-empty">
              暂无数据
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ECA-footer">
      <div class="ECA-footer-btn" v-if="!query">
        <div class="ECA-footer-btn-item" :class="{'active':ServiceStatistics.id==0}" @click="handleMap(0)">
          <span>紫金在海外</span> 
        </div>
        <div class="ECA-footer-btn-item" :class="{'active':ServiceStatistics.id==1}" @click="handleMap(1)">
          <span>紫金在中国</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script  lang='ts' setup>
// import { api_jsc_project_group_bjzt, api_jsc_project_group_map } from '@/api/EquipmentComprehensiveAdministration.ts';
import moment from 'moment';
import { computed, reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Grade from './components/GradeItem.vue';
import Process from './components/Process.vue';
import Radar from './components/Radar.vue';
import Tab from './components/Tab.vue';
import Title from './components/Title.vue';
import { backgroundUrl as BG, dealFun as Fun, center, leftBottom, rightBottom, unitEnum, urlEnum, urlEnum1, urlEnum2 } from './config';
import { alarm, alarm1, choose, equipment, equipment1, factory, level, maintain, maintain1, mapJsonData, monitor, ownership, range, target, target1 } from './mock';

const route = useRoute()
const router = useRouter()
const query = computed(()=>{
  return route.query ? Object.keys(route.query).length>0 && route.query.level!=='group' : true
})

const backgroundUrl = computed(()=>{
  return !query.value ? BG[0] : BG[1]
})

const isNull = (val:any) => {
  return val === null
}

const dealFun = new Fun()
// 存放左中数据
const map = new Map()
// 存放右中数据
const map1 = new Map()

// 主页面容器
const ServiceStatistics = reactive({
  id:1,
  center:[] as Array<center>,
  // 雷达图数据
  rightTop:[] as Array<center>,
  // 报警状态 alarmState
  rightMiddle:{
  tabs:[
    {
      label:'所有企业',
      id:0
    },
    {
      label:'巨龙',
      id:1
    },
    {
      label:'紫铜',
      id:2
    },
  ],
  currentId:0,
  header:[] as Array<number>,
  process:[] as Array<rightBottom>
  },
  rightBottom:[] as Array<rightBottom>,
  leftTop:{
    title: '',
    type:16,
    data: [] as Array<rightBottom>,
    total:0,
    unit: '家',
    color:['#559FF4','#F6A354','#53EBD1','#EDE561'],
  },
  leftMiddle:{
  tabs:[
    {
      label:'所有设备',
      id:0
    },
    {
      label:'采厂设备',
      id:1
    },
    {
      label:'选厂设备',
      id:2
    },
  ],
  currentId:0,
  equipmQuantity:[] as Array<rightBottom>,
  total:0
  },
  leftBottom:[] as Array<leftBottom>,
  mapData:{
    type:5,
    data:[] as Array<Object>
  }
})

const leftCurrentIdChanged = (id:number) => {
  ServiceStatistics.leftMiddle.currentId = id
  if(map.get(id)){
    ServiceStatistics.leftMiddle.equipmQuantity = JSON.parse(map.get(id))
    ServiceStatistics.leftMiddle.total = ServiceStatistics.leftMiddle.equipmQuantity[0]?.total || 0
  }
}

const rightCurrentIdChanged = (id:number) => {
  ServiceStatistics.rightMiddle.currentId = id
  rightMiddleFun(id)
}

const initGrounp = (type:string='1') => {
  init(0)
  Fun1(type)
  Fun2(type)
  Fun3(type)
  Fun4(type)
  Fun5(type)
  Fun6(type)
  Fun7(type)
}

// 集团设备
const Fun1 = async(type:string='1') => {
  ServiceStatistics.leftTop.total = ownership.reduce((a,b)=> a + b.index_value,0)    
  ServiceStatistics.leftTop.data = ownership.map(i=>{
    return{
      name:i.index_name_1,
      value:i.index_value,
      unit:ServiceStatistics.leftTop.unit
    }
  })
}

// 设备数量
const Fun2 = async(type:string='1') => {
  map.clear()
  ServiceStatistics.leftMiddle.tabs.forEach(i=>{
    const arr = dealFun.filter(equipment,'index_name_2',i.label)
    const total = dealFun.total(arr,'index_value')
    const item = arr.map(item=>{
      return {
        label:item.index_name_1,
        value:item.index_value,
        unit:'台',
        url:urlEnum[item.index_name_1],
        total
      }
    })

    map.set(i.id,JSON.stringify(item))
  })
  ServiceStatistics.leftMiddle.equipmQuantity = JSON.parse(map.get(ServiceStatistics.leftMiddle.currentId)) || []
  ServiceStatistics.leftMiddle.total = ServiceStatistics.leftMiddle.equipmQuantity[0].total
}

// 设备管理等级分布
const Fun3 = async(type:string='1') => {
  const list = dealFun.deWeight(level,'index_name_1')
  const M = {
    'label':"index_name_2",
    'value':'index_value'
  }
  ServiceStatistics.leftBottom = list.map(i=>{
    const arr = dealFun.map(dealFun.filter(level,'index_name_1',i),M)
    const total = dealFun.total(arr,'value')
    const item = {label:'所有设备',value:total}
    return {
      name:i,
      icon:urlEnum1[i],
      array:[item,...arr]
    }
  })   
}

const Fun4 = async(type:string='1') => {
  const M = {
    'name':"index_name_1",
    'count':'index_value'
  }
  ServiceStatistics.center = dealFun.map(target,M)
}

const Fun5 = async(type:string='1')=>{
  const M = {
    'name':"index_name_1",
    'count':'index_value'
  }
  ServiceStatistics.rightTop = dealFun.map(monitor,M)
}

const Fun6 = async(type:string='1')=>{
  const M = {
    'label':"index_name_1",
    'value':'index_value'
  }
  ServiceStatistics.rightBottom = dealFun.map(maintain,M)
}

// 设备报警状态
const Fun7 = (type:string='1') => {
  map1.clear()
  ServiceStatistics.rightMiddle.tabs.forEach(i=>{
    const item = dealFun.filter(alarm,'index_name_1',i.label)
    map1.set(i.id,JSON.stringify(item))
  })
  const id = ServiceStatistics.rightMiddle.currentId
  rightMiddleFun(id)
}

const loading = ref(false)
const getMap = () => {
  loading.value = false
  setTimeout(()=>{
    loading.value = true
    ServiceStatistics.mapData.data = mapJsonData.filter(i=>i.company_abroad_type ===ServiceStatistics.id.toString()).map(i=>{
      return{
        name:i.company_short_name,
        coord:[i.longitude,i.latitude]
      }
    })
    loading.value = false
  },0)
}

!query.value && getMap()

const getCurrentItem = (val:any)=>{
  if(val){
  router.push(
    {
      path:`EquipmentComprehensiveAdministration`,
      query:{
        level:'新疆紫金锌业有限公司'
      }
    }
  )
  } 
}

const rightMiddleFun = (id:number) => {
  if(!map1.get(id))return
  const arr = JSON.parse(map1.get(id)) || []
  const total = dealFun.filter(arr,'index_name_2','合计')[0]
  const other = dealFun.filter(arr,'index_name_2','合计',true) 
  ServiceStatistics.rightMiddle.header = [total.index_value_1,total.index_value_2,total.index_rate]
  ServiceStatistics.rightMiddle.process = other.map(i=>{
    return {
      label:i.index_name_2,
      value:i.index_value_3,
      value1:i.index_rate
    }
  }).sort((a,b)=>{
    const num = a.label.slice(0,1) == '一' ? 1 : 0
    const num1 = b.label.slice(0,1) == '一' ? 1 : 0
    return num1 - num
  })
}

const handleBtn = (id:number) => {
  const name = ['group','新疆紫金锌业有限公司'][id]
  router.push({path:`Visual`,query:{
    level:name
  }})
  !id && getMap()
}

const handleMap = (id:number)=>{
  ServiceStatistics.id=id
  ServiceStatistics.mapData.type = id ? 5 : 6
}


// 数据初始化 --- 归零
const init = (type:number) => {
  ServiceStatistics.rightTop = []
  ServiceStatistics.rightMiddle.header = []
  ServiceStatistics.rightMiddle.process = []
  ServiceStatistics.rightBottom = []
  if(!type){
    ServiceStatistics.leftTop.total = 0
    ServiceStatistics.leftTop.data = []
    ServiceStatistics.leftMiddle.total = 0
    ServiceStatistics.leftMiddle.equipmQuantity = []
    ServiceStatistics.leftBottom = []
    ServiceStatistics.center = []
    ServiceStatistics.mapData.data = []
  }else{
    overshipStatistics.leftTop.total = 0
    overshipStatistics.leftTop.array = []
    overshipStatistics.leftCenter.total = 0
    overshipStatistics.leftCenter.data = []
    overshipStatistics.leftBottom.data = []
    overshipStatistics.center = []
  }
}

// --------------------------------------------- 二级页面业务逻辑 --------------------------------------------------------------
const overshipStatistics = reactive({
  center:[] as Array<rightBottom>,
  currentOvership:'新疆紫金锌业有限公司',
  leftTop:{
    total:0,
    array:[] as Array<rightBottom>
  },

  leftCenter:{
    title: '',
    type:16,
    data: [] as Array<rightBottom>,
    total:0,
    unit: '台',
    color:['#559FF4','#F6A354','#53EBD1','#EDE561'],
  },

  leftBottom:{
    type:13,
    data:[] as Array<rightBottom>, 
    unit:'台'
  }
})


// 权属层数据初始化
const initOvershipStatistics = (val?:string) => {
  init(1)
  const name = val || route.query.level
  if(!name || name === 'group')return
  Fun8(name)
  Fun9(name)
  Fun10(name)
  Fun11(name)
  Fun12(name)
  Fun13(name)
  Fun14(name)
}
// 权属---左上
const Fun8 = async(name:any) =>{
  const M = {
    'label':"index_name_1",
    'value':'index_value'
  }
  overshipStatistics.leftTop.total = dealFun.total(equipment1,'index_value')
  overshipStatistics.leftTop.array = dealFun.map(equipment1,M)
}

// 权属---左中
const Fun9 = async(name:any)=>{
  const M = {
    'label':"index_name_1",
    'value':'index_value'
  }
  overshipStatistics.leftCenter.total = dealFun.total(factory,'index_value')
  overshipStatistics.leftCenter.data = dealFun.map(factory,M)
}

const Fun10 = async(name:any)=>{
  const M = {
    'label':"index_name_1",
    'value':'index_value'
  }
  overshipStatistics.leftBottom.data = dealFun.map(choose,M)
}

const Fun11 = async(name:any)=>{
  const M = {
    'label':"index_name_1",
    'value':'index_value'
  }
  overshipStatistics.center = dealFun.map(target1,M)
}

const Fun12 = async(name:any)=>{
  const M = {
    'name':"index_name_1",
    'count':'index_value'
  }
  ServiceStatistics.rightTop = dealFun.map(range,M)
}

const Fun13 = async(name:any)=>{
  const M = {
    'label':"index_name_1",
    'value':'index_value'
  }
  ServiceStatistics.rightBottom = dealFun.map(maintain1,M)
}

const Fun14 = (name:any) => {
    ServiceStatistics.rightMiddle.tabs.forEach(i=>{
      const item = dealFun.filter(alarm1,'index_name_1',i.label)
      map1.set(i.id,JSON.stringify(item))
    })
    const id = ServiceStatistics.rightMiddle.currentId
    rightMiddleFun(id)
}


watch(
()=>route.query,
()=>{
!query.value ? initGrounp(ServiceStatistics.id.toString()) : initOvershipStatistics()
},
{
immediate:true
}
)

watch(
()=>ServiceStatistics.id,
()=>{
  getMap()
  initGrounp(ServiceStatistics.id.toString())
}
)


</script>

<style lang='scss' scoped>
  @mixin boxBG {
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 33px);
    background-image: linear-gradient(230deg, #2c69af03 0%, #1a2f4c69 26%, #192e4cab 71%);
  }

  @mixin empty {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-family: PingFang-SC-Bold;
    font-weight: 700;
    font-size: 13px;
    color: #C0DAFF;
  }

  @mixin linearGradientText ($color,$color1){
    color: transparent;
    background: linear-gradient(180deg, $color,$color1);
    background: -webkit-linear-gradient(180deg, $color,$color1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .ECA{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: cover;
    padding: 0 24px;
   .ECA-header{
      display: flex;
      justify-content: space-between;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 8.63%;
      background: url('@/assets/EquipmentComprehensiveAdministration/header1.png') no-repeat;
      background-size: contain;
      background-position: 50% 100%;
      text-align: center;
      font-size: 46px;
      font-weight: 400;
      color:#fff;
      font-family: PangMenZhengDaoBiaoTiTiMianFeiBan-2;

      &-center{
        position: relative;
        width: 60%;
        &::after{
          position: absolute;
          top: 20%;
          margin-left: 5px;
          content: '(试运行)';
          font-size: 26px;
          color:#fff;
        }
      }
    

      &-left,
      &-right{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom:2px;
        width: 10%;
        height: 60%;

        &-btn{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 92px;
          height: 22px;
          border: 1px solid #6a8dbe80;
          border-radius: 1.2px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          font-size: 12px;
          color: #FFFFFF;
          background-image: linear-gradient(180deg, #7f8c9e 0%, #bcc0ff29 100%);
          &.active{
            background-image: linear-gradient(180deg, #8CBCFF 0%, #1552B4 100%);
          }

          &-icon{
            width: 9px;
            height: 12px;
            border-radius: 2px;
            margin-left: 26px;
            background: url('@/assets/EquipmentComprehensiveAdministration/btnIcon.png') no-repeat;
            background-size: contain;
            background-position: center;
          }
        }
      }

      &-left{
        margin-left: 24px;
      }

      &-right{
        margin-right: 24px;
        &-btn:hover{
          cursor: pointer;
        }
      }
   }
   .ECA-container{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    &-left,
    &-right{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 406px;
      height: 90.34%;

      .ECA-container-right-box,
      .ECA-container-left-box{
        height: 33%;
        width: 100%;
        box-sizing: border-box;
      
        // 左上
        &-echarts{
          display: flex;
          justify-content: space-between;
          @include boxBG;
          box-sizing: border-box;

          &-pie{
            width: 50%;
            height:100%;

            &::after{
              position: absolute;
              content: attr(data-attr);
              top: 35%;
              left:50%;
              transform: translateX(-50%);
              font-family: PangMenZhengDaoBiaoTiTiMianFeiBan-4;
              font-size: 34px;
              font-weight: 400;
              color: #d8e6f9;
              text-align: center;
              z-index: 3;
            }

            &::before{
              position: absolute;
              content: attr(data-unit);
              top: 53%;
              left:50%;
              transform: translateX(-50%);
              font-family: PangMenZhengDaoBiaoTiTiMianFeiBan-4;
              font-size: 14px;
              font-weight: 400;
              color: #d8e6f9;
              text-align: center;
              z-index: 3;
            }
          }

          &-legend{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 50%;
            height: 100%;
            box-sizing: border-box;
            padding: 56px 12px;

            &-item{
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              height: 20%;
              box-sizing: border-box;
              box-shadow: inset 0 0 4px 1px #6387af80;
              border-radius: 2px;
              margin-bottom: 12px;
              padding: 10px 12px;

              &-left{
                display: flex;
                align-items: center;
                font-family: PingFang-SC-Bold;
                font-weight: 700;
                font-size: 14px;
                color: #C0DAFF;

                &-icon{
                  width: 14px;
                  height: 14px;
                  border-radius: 2px;
                  margin-right: 12px;
                }
              }

              &-right{
                color: #ffffff;
                font-size: 18px;
                font-weight: 700;
                font-family: DINAlternate;

                &-unit{
                  color: #ffffff;
                  font-size: 14px;
                  font-family: PingFang-SC;
                  font-weight: 700;
                }
              }
            }
          }

          &-empty{
            @include empty;
          }
        }

        // 右上
        &-radar{
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 20px;
          @include boxBG;

          &-left{
            width: 200px;
            height: 200px;
          }
          

          &-right{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: calc(100% - 220px);
            height: 80%;
            &-item{
              position: relative;
              
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              height: 25%;

              &::after{
                position: absolute;
                content: '';
                width: 100%;
                height: 13px;
                background: url('@/assets/EquipmentComprehensiveAdministration/rightTop.png') no-repeat;
                background-size: 100% 200%;
                background-position: center;
                bottom: 0;
                left: 0;
              }

              &-label{
                font-family: PingFang-SC-Bold;
                font-weight: 700;
                font-size: 13px;
                color: #C0DAFF;
              }

              &-number{
                color: #ffffff;
                font-size: 18px;
                font-family: DINAlternate;
                font-weight: 700;
                text-align: left;
              }

              &-unit{
                color: #ffffff;
                font-size: 14px;
                font-family: PingFang-SC;
                font-weight: 700;
                margin-left: 2px;
              }
            }

            &-empty{
              @include empty;
            }
          }
        }

        // 右中
        &-alarm{
          @include boxBG;
          padding-top: 9px;

          &-tab{
            margin-right: 2.805%;
          }

          &-state{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height:calc(100% - 35px);
          
          &-header{
            display: flex;
            justify-content: space-around;
            width: 94.39%;
            height: 64px;
            background: #266dd133;
            border-radius: 2px;
            border-top: 2px solid #2169D1;
            font-weight: 600;
            font-size: 13px;
            color: #C0DAFF;
            padding: 10px 0 7px 0;
           
            div:not(:first-child){
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: right;

              .ECA-container-right-box-alarm-state-header-label{
                font-size: 13px;
                margin-bottom: 8px;
              }

              .ECA-container-right-box-alarm-state-header-value{
                font-size: 18px;
                font-weight: 700;
              }

              .ECA-container-right-box-alarm-state-header-unit{
                font-size: 13px;
                font-weight: 700;
              }
            }
          }
          &-body{
            display: flex;
            flex-direction: column;
            width: 94.39%;
            height: 100%;

           
          }

          &-empty{
              @include empty;
            }
         
        }
        }

        // 右下
        &-maintain{
          display: flex;
          flex-wrap: wrap;
          @include boxBG;
          padding: 20px 12px;
          &-item{
            position: relative;
            display: flex;
            box-sizing: border-box;
            width: calc(50% - 12px - 6px);
            height: 68px;
            margin: 0 12px 17px 0;
            border-radius: 3px;
            overflow: hidden;
            border-left: 1px solid;
            border-color: rgba(107, 176, 249,0.51);

            @mixin after{
              position: absolute;
              left: 0;
              top:0;
              content: '';
              width: 100%;
              height: 1px;
            }

            @mixin before{
              position: absolute;
              left: 0;
              bottom:0;
              content: '';
              width: 100%;
              height: 1px;
            }

            @mixin right($bgc,$bgc1,$color1,$color2){
              flex:1;
              background-image: $bgc;
              border-radius: 2px;
              padding-left: 10px;

              &-label{
                background-image: $bgc1;
                // font-family: PingFang-SC-Bold;
                font-weight: 700;
                font-size: 13px;
                color: $color1;
                padding-left: 6px;
                margin-top: 11px;
                height:20px;
                line-height:20px;
              }

              &-value{
                font-family: DINAlternate-Bold;
                font-weight: 700;
                font-size: 24px;
                color: $color2;
                margin-top: 5px;

                &-unit{
                  font-family: PingFangSC-Regular;
                  font-weight: 400;
                  font-size: 13px;
                }
              }
            }

            &::after{
              @include after;
              background: linear-gradient(to right,rgba(107, 176, 249,0.51),rgba(45, 105, 246,0.09));
            }

            &::before{
              @include before;
              background: linear-gradient(to right,rgba(107, 176, 249,0.51),rgba(45, 105, 246,0.09));
            }

            img{
              width: 84px;
              height: 68px;
              background-image: linear-gradient(to right,rgba(107, 176, 249,0.41),rgba(107, 176, 249,0.21));
            }

            &-right{
              @include right(linear-gradient(to right,rgba(107, 176, 249,0.21),rgba(45, 105, 246,0.02)),linear-gradient(90deg,rgba(81, 131, 217,0.02),rgba(81, 131, 217,0.3),rgba(81, 131, 217,0.41),rgba(45, 105, 246,0.02)),#EAF3FF,#C0DAFF);
            }

            &.warning{
              border-color: rgba(159, 112, 66,1);

              &::after{
                @include after;
                background: linear-gradient(to right,rgba(159, 112, 66,0.51),rgba(159, 112, 66,0.09));
              }

              &::before{
                @include before;
                background: linear-gradient(to right,rgba(159, 112, 66,0.51),rgba(159, 112, 66,0.09));
              }

              img{
                flex:1;
                background-image: linear-gradient(to right,rgba(137, 93, 62, 0.41),rgba(137, 93, 62,0.21));
              }

              .ECA-container-right-box-maintain-item-right{
                @include right(linear-gradient(to right,rgba(137, 93, 62,0.21),rgba(137, 93, 62,0.02)),linear-gradient(90deg,rgba(115, 72, 62,0.02),rgba(115, 72, 62,0.8),rgba(115, 72, 62,1),rgba(115, 72, 62,0.61),rgba(115, 72, 62,0.02)), #FFE4E0, #FFC9C0);
              }
            }
          }

          &-empty{
            @include empty;
          }

        } 

        // 左中
        &-equipm{
          @include boxBG;
          padding-top: 9px;

          &-tab{
            margin-right: 2.805%;
          }

          &-quantity{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;
            height: calc(100% - 35px);

            &-item:nth-child(3){
              position: relative;
            }

            &-item{
              display: flex;
              justify-content: flex-start;
              align-items: center;
              width: calc(50% - 12px - 3px - 4px);
              height: 96px;
              border: 1px solid rgba(107, 176, 249,0.51);
              background-image: linear-gradient(124deg, #4ea5ff4d 0%, #4ea5ff42 25%, #006aff05 100%);
              border-radius: 3px;
              padding-left: 12px;
              margin: 3px 2px;
              z-index:1;

              &:nth-child(2n){
                transform: scaleX(-1);

                .ECA-container-left-box-equipm-quantity-item-content{
                  transform: scaleX(-1);
                  &-label{
                    text-align: right;
                  }
                }
              }
              img{
                width: 3.375rem;
                height: 3.5rem;
                margin-right: 10px;
              }

              &-content{
                
                &-label{
                  font-family: PingFangSC-SNaNpxibold;
                  font-weight: 600;
                  font-size: 13px;
                  color: #C0DAFF;
                }

                &-value{
                  font-family: DINAlternate-Bold;
                  font-weight: 700;
                  font-size: 24px;
                  color: #FFFFFF;
                }

                &-unit{
                  font-family: PingFangSC-Regular;
                  font-weight: 400;
                  font-size: 13px;
                  color: #C0DAFF;
                }
              }

              &-circle{
                position: absolute;
                top: 0;
                right: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 133.28px;
                height: 133.28px;
                border-radius: 50%;
                box-sizing: border-box;
                transform: translate(50%,-50%);

                &-label{
                  font-family: PingFangSC-SNaNpxibold;
                  font-weight: 600;
                  font-size: 14px;
                  color: #C0DAFF;
                  text-align: center;
                  z-index: 4;
                  transform: scaleX(-1) translateY(-7px);
                }

                &-number{
                  font-family: DINAlternate-Bold;
                  font-weight: 700;
                  font-size: 32px;
                  color: #E3EEFF;
                  text-align: center;
                  text-shadow: 0 0 7px #bbd7ffc9;
                  z-index: 4;
                  transform: scaleX(-1) translateY(-7px);
                }

                &-1{
                  position: absolute;
                  top: -6px;
                  left: -2px;
                  width: 100%;
                  height: 100%;
                  box-sizing: border-box;
                  background: url('@/assets/EquipmentComprehensiveAdministration/leftCenter5.png') no-repeat;
                  background-size: contain;
                  animation: running 6s infinite linear;
                  z-index: 2;
                }

                &-2{
                  position: absolute;
                  bottom: 25%;
                  right: 20%;
                  width: 55%;
                  height: 55%;
                  box-sizing: border-box;
                  background-image: radial-gradient(#1b3352,#244e85);
                  filter: blur(3px);
                  border-radius: 50%;
                  z-index: 3;
                }

                @keyframes running {
                  0% {
                    transform: scale(0.9);
                  }
                  25%{
                    transform: scale(1);
                  }
                  50%{
                    transform: scale(0.95);
                  }
                  75%{
                    transform: scale(1);
                  }
                  100%{
                    transform: scale(0.9);
                  }
                }
              }
            } 

            &-empty{
              @include empty;
            }
          }         
        }

        // 左下
        &-grade{
          display:flex;
          flex-direction: column;
          justify-content:space-around;
          @include boxBG;
          padding: 12px;

          &-item{
            margin-bottom: 8px;
          }

          &-empty{
            @include empty;
          }
        }

        // 权属左上
        &-number{
          display: flex;
          flex-direction: column;
          align-items: center;
          @include boxBG;
          padding-top: 12px;

          &-title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 24px 0 16px;
            width: 80%;
            height:74px;
            background-image: linear-gradient(249deg, #2c69af00 0%, #2c69af45 100%);
            font-family: PingFangSC-Regular;
            font-weight: 400;
            font-size: 13px;
            color: #C0DAFF;
            margin-bottom: 24px;

            &-right{
              display: flex;
              align-items: center;
              &-value{
                font-family: DINAlternate-Bold;
                font-weight: 700;
                font-size: 36px;
                color: #45FFF7;
                margin-right: 5px;
              }
            }
          }

          &-content{
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 90%;
            height: calc(100% - 74px);

            &-item{
              width: 154px;
              height: 100%;

              &-label{
                width: 100%;
                height: 32px;
                line-height: 32px;
                margin-bottom: 16px;
                background: url('@/assets/EquipmentComprehensiveAdministration/subLeftTop.png') no-repeat;
                background-size: contain;
                background-position: center;
                text-align: center;
                font-family: PingFangSC-SNaNpxibold;
                font-weight: 600;
                font-size: 16px;
                color: #51E7FF;
              }

              &-value{
                width: 100%;
                height: 100px;
                line-height: 60px;
                text-align: center;
                background: url('@/assets/EquipmentComprehensiveAdministration/subLeftTop1.png') no-repeat;
                background-size: contain;
                background-position: center;
                font-family: DINAlternate-Bold;
                font-weight: 700;
                font-size: 36px;
                color: #45FFF7;
              }
            }

            &-empty{
              @include empty;
            }
          }
        }

        // 权属左下
        &-echarts1{
          position: relative;
          @include boxBG;
          box-sizing: border-box;

          &-bar{
            width: 100%;
            height: 100%;
          }

          &-legend{
            display: flex;
            justify-content: space-around;
            align-items: center;
            position:absolute;
            top: 28px;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            height: 28px;

            &-item{
              width:90px;
              height: 28px;
              line-height: 28px;
              background: url('@/assets/EquipmentComprehensiveAdministration/subLeftTop.png') no-repeat;
              background-size: contain;
              background-position: center;
              text-align: center;
              color:#fff;
              font-family: PingFang-SC;
              font-weight: 700;
              font-size: 14px;

                span{
                  font-size: 18px;
                  font-family: DINAlternate;
                  color:#fff;
                  margin-right: 4px;
                }
            }
          }

          &-empty{
            @include empty;
          }
        }  
      }
    }

    &-center{
      flex:1;
      height: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;

      &-header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 180px;
        width: 80%;
        margin-top: calc(8.6% - 35px);

        &-item{
          position: relative;
          text-align: center;
          width: 33%;
          height: 100%;
          background: url('@/assets/EquipmentComprehensiveAdministration/centerTop.png') no-repeat;
          background-size: 50% 120%;
          background-position: 50% 0%;

          &-number{
            font-family: PangMenZhengDaoBiaoTiTiMianFeiBan-4;
            font-size: 28px;
            color: #C0DAFF;
            font-weight: 400;
          }

          &-label{
            font-family: SourceHanSansCN-Regular;
            font-weight: 400;
            font-size: 18px;
            color: #C0DAFF;
          }
        }
      }

      &-body{
        width: 100%;
        height: 100%;
        &-map{
          width: 100%;
          height: 100%;
        }
      }
    }

    &-submain{
      position: relative;
      flex:1;
      height: 90%;
      background: url('@/assets/EquipmentComprehensiveAdministration/subCenterMain.png') no-repeat;
      background-size: contain;
      background-position: 100% 50%;

      &-item{
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 169px;
        height:180px;
        background: url('@/assets/EquipmentComprehensiveAdministration/subCenterItem.png') no-repeat;
        background-size: contain;
        background-position: 50% 100%;

        &-label{
          font-family: PingFangSC-Regular;
          font-weight: 400;
          font-size: 18px;
          color: #C0DAFF;
        }

        &-value{
          font-family: PangMenZhengDaoBiaoTiTiMianFeiBan-4;
          font-weight: 700;
          font-size: 36px;
          color: #45FFF7;
          margin-top: 30px;
        }
      }

      @keyframes move {
        0% {
          transform: translateY(0%);
        }
        25%{
          transform: translateY(-5%);
        }
        50%{
          transform: translateY(0%);
        }
        75%{
          transform: translateY(5%);
        }
        100%{
          transform: translateY(0%);
        }
      }

      &-item:nth-child(odd){
        left: 165px;
      }
      &-item:nth-child(even){
        right: 165px;
      }
      &-item:nth-child(1),
      &-item:nth-child(2){
        top: 5%;
      }
      &-item:nth-child(3),
      &-item:nth-child(4){
        top: 40%;
      }

      &-item:nth-child(1){
        animation: move 6s infinite linear;
      }
      &-item:nth-child(2){
        animation: move 5s infinite linear;
      }
      &-item:nth-child(3){
        animation: move 7s infinite linear;
      }
      &-item:nth-child(4){
        animation: move 6s infinite linear;
      }

      &-btn{
        position: absolute;
        bottom: 2%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        width:30.19%;
        height:46px;
        background-image: linear-gradient(180deg, #8CBCFF 0%, #1552B4 100%);
        border: 2px solid #6a8dbe80;
        border-radius: 3px;
        font-family: PingFangSC-SNaNpxibold;
        font-weight: 600;
        font-size: 22px;
        color: #FFFFFF;

        &-icon{
          width: 18px;
          height: 24px;
          background: url('@/assets/EquipmentComprehensiveAdministration/btnIcon.png') no-repeat;
          background-size: contain;
          background-position: center;
          margin-left: 23px;
        }
      }
    }
   }
   .ECA-footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width:100%;
    height: 8.63%;
    background: url('@/assets/EquipmentComprehensiveAdministration/footer.png') no-repeat;
    background-size: contain;
    background-position: 50% 100%;

    &-btn{
      position:fixed;
      left: 50%;
      bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 18.17%;
      transform: translateX(-50%);
      z-index:2;

      &-item{
        width: 45.8%;
        height:45px;
        font-family: PingFang-SC-Bold;
        font-weight: 700;
        font-size: 24px;
        text-align: center;
        line-height: 45px;
        background: url('@/assets/EquipmentComprehensiveAdministration/btn.png') no-repeat;
        background-size: 100% 100%;

        span{
          @include linearGradientText(#C7D6F2,#7B8CA9)
        }

        &:hover{
          cursor: pointer;
        }

        &.active{
          background: url('@/assets/EquipmentComprehensiveAdministration/btn1.png') no-repeat;
          background-size: 100% 100%;
          span{
            @include linearGradientText(#B6E6FF,#50ACFF)
          }
        }
      }

      
    }
   }
  }
</style>