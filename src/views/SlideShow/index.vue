<template>
  <div class="product">
    <div class="product-title">
      金属产量轮播大屏
    </div>
    <div class="product-time">
      2024-07-15
    </div>
  </div>
  <div class='product-out-put'>
    <div class="product-out-put-nav">
      <DepartmentCard 
        v-if="Array.from(bodyInfo.allInfo.banner.values()).length>0"
        :CardData="Array.from(bodyInfo.allInfo.banner.values())" 
        :currModel="bodyInfo.allInfo.currModel"
        :isSlideShow="isSlideShow"
      ></DepartmentCard>
    </div>
    <div class="product-out-put-main">
      <div class="product-out-put-main-bottom">
        <div class="product-out-put-main-bottom-left">
          <CardView 
            v-loading=" bodyInfo.allInfo.loading"
            :CardData="{...bodyInfo.allInfo.currentProducOut,descriptionCon:bodyInfo.allInfo.tips.get(2)}"
          >
            <template v-slot:headerRight>
              <span 
                class="btn"
                :class="{'active':bodyInfo.allInfo.currentBtnIndex === 0}"
                >完成率</span>
                <span 
                class="btn"
                :class="{'active':bodyInfo.allInfo.currentBtnIndex === 1}"
                >同环比</span>
            </template>
            <template v-slot:main>
              <chart-bar-line 
                class="chart"
                :key="bodyInfo.allInfo.id + bodyInfo.allInfo.currentProducOut.id"
                :data="bodyInfo.allInfo.currentProducOut"
              ></chart-bar-line>
            </template>
          </CardView>
          <CardView 
            v-loading=" bodyInfo.allInfo.loading"
            :CardData="{...bodyInfo.allInfo.currentTrend,descriptionCon:bodyInfo.allInfo.tips.get(3)}"
          >
            <template v-slot:headerRight>
              <Switch 
                v-show="bodyInfo.allInfo.currentBtnIndex!==1"
                :currentText="bodyInfo.allInfo.currentText"
                :activeText="bodyInfo.allInfo.activeText"
                :inactiveText="bodyInfo.allInfo.inactiveText"
              />
            </template>
            <template v-slot:main>
              <chart-bar-line 
                class="chart"
                :data="bodyInfo.allInfo.currentTrend"
                :key="bodyInfo.allInfo.id + bodyInfo.allInfo.currentTrend.id"
              ></chart-bar-line>
            </template>
          </CardView>
        </div>
        <div class="product-out-put-main-bottom-right">
          <CardView 
            v-loading="bodyInfo.allInfo.loading"
            :CardData="{...bodyInfo.allInfo.currentTable,descriptionCon:bodyInfo.allInfo.tips.get(4)}"
          >
            <template v-slot:headerRight>
            单位:{{ bodyInfo.allInfo.currentTable.unit || '' }}
          </template>
          <template v-slot:main>
            <CommonTable 
              :key="bodyInfo.allInfo.id + bodyInfo.allInfo.currentTable.id"
              :table="bodyInfo.allInfo.currentTable"
              :heightlight="bodyInfo.allInfo.companyIndex"
            >
            <template v-slot:short_name="{value}">
              <div style="color:#4B67F8;">{{value}}</div>
            </template>
            <template v-slot:month_progress="{value}">
              <div>{{
                value ? myFixed(value,'rate') + '%' : '--'
                }}</div>
            </template>
            <template v-slot:year_progress="{value}">
              <div >{{
                value ? myFixed(value,'rate') + '%' : '--'
                }}</div>
            </template>
            <template v-slot:month_progress_complete="{value}">
              <div >{{
                value ? myFixed(value,'rate') + '%' : '--'
                }}</div>
            </template>
            <template v-slot:year_progress_complete="{value}">
              <div >{{
                value ? myFixed(value,'rate') + '%' : '--'
                }}</div>
            </template>
            <template v-slot:cur_day_accu="{value}">
              <div>{{
                value ? myFixed(value,'acc') : '--'
                }}</div>
            </template>
            <template v-slot:cur_week_accu="{value}">
              <div>{{
                value ? myFixed(value,'acc') : '--'
                }}</div>
            </template>
            <template v-slot:cur_month_accu="{value}">
              <div>{{
                value ? myFixed(value,'acc') : '--'
                }}</div>
            </template>
            <template v-slot:lastmonth_month_acc="{value}">
              <div>{{
                value ? myFixed(value,'acc') : '--'
                }}</div>
            </template>
            <template v-slot:cur_month_accu_plan="{value}">
              <div>{{
                value ? myFixed(value,'acc') : '--'
                }}</div>
            </template>
            <template v-slot:cur_year_accu_plan="{value}">
              <div>{{
                value ? myFixed(value,'acc') : '--'
                }}</div>
            </template>
            <template v-slot:cur_month_complete="{value}">
              <div>{{
                value ? myFixed(value,'rate') + '%' : '--'
                }}</div>
            </template>
            <template v-slot:cur_year_complete="{value}">
              <div>{{
                value ? myFixed(value,'rate') + '%' : '--'
                }}</div>
            </template>
            <template v-slot:cur_year_accu="{value}">
              <div>{{
                value ? myFixed(value,'acc') : '--'
                }}</div>
            </template>
            <template v-slot:cur_year_yoy="{value}">
              <div>{{
                value ? myFixed(value,'rate') + '%' : '--'
                }}</div>
            </template>
            <template v-slot:cur_month_mom="{value}">
              <div>{{
                value ? myFixed(value,'rate') + '%' : '--'
                }}</div>
            </template>
            <template v-slot:cur_month_yoy="{value}">
              <div>{{
                value ? myFixed(value,'rate') + '%' : '--'
                }}</div>
            </template>
          </CommonTable>
          </template>
          </CardView>
          <div class="product-out-put-main-bottom-right-week_date_note">
            周产量统计周期:<span>{{ note }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script  lang='ts' setup>
import DepartmentCard from '@/components/DepartmentCard/index.vue'
import Switch from '@/components/Switch/index.vue'
import myFixed from '@/utils/toFixed'
import { ElMessage } from 'element-plus'
import { computed, onMounted, reactive, ref } from 'vue'
import { SlideShow, dealHeader } from './config'
import { getDiggingsInfo, getProductOutputTrend, localStorageItem, slideShowInfo } from './mock'

const isSlideShow = ref(true)

const bodyInfo = reactive({
  allInfo:new SlideShow(),
  time:0
})

const note = computed(()=>{
  return bodyInfo.allInfo.currentTable.data[bodyInfo.allInfo.companyIndex]?.week_date_note || '--'
})

const getCompanyInfo = async(type:string,date:string,short_name:string,factory:string,element_name:string,where:string,index?:number) => {
  bodyInfo.allInfo.loading = true

  const res = await getDiggingsInfo(type,date,short_name,factory,element_name)

  if(where==='header'){
    
    const banner = Array.isArray(res.content) ? dealHeader(res.content,bodyInfo.allInfo.tips) : []

    bodyInfo.allInfo.setBanner(banner)
    
    getCompanyInfo('产品产量',bodyInfo.allInfo.time,'1','0','1','company',index)
  }else{

    if(res.content && Array.isArray(res.content)){

      bodyInfo.allInfo.setProductOutput(res.content)

      const firstMetal = Array.from(bodyInfo.allInfo.banner.values())[0].name || '金'

      bodyInfo.allInfo.getCurrentProductOutput(firstMetal)

      bodyInfo.allInfo.getCurrentTable(firstMetal) 

      getTrend(date,firstMetal)
    }else{

      if(bodyInfo.time<=2){

        getCompanyInfo('产品产量',bodyInfo.allInfo.time,'1','0','1','company',index)

        bodyInfo.time++

      }else{

        ElMessage({
          message: '数据加载异常...',
          type: 'warning',
        })
      }
    }
}
}

const getTrend = async(biz_date:string,metal:String) => {
  const Day = await getProductOutputTrend(biz_date,null,null,'日')
  const Month = await getProductOutputTrend(biz_date,null,null,'月')

  if(Day.content && Array.isArray(Day.content)){
    bodyInfo.allInfo.setTrend(Day.content,'Day')
  }

  if(Month.content && Array.isArray(Month.content)){
    bodyInfo.allInfo.setTrend(Month.content,'Month')
  }

  const name = bodyInfo.allInfo.currentProducOut.names[0]

  bodyInfo.allInfo.getCurrentTrend(metal,name)

  bodyInfo.allInfo.dealCache(bodyInfo.allInfo)

  bodyInfo.allInfo.loading = false

  bodyInfo.allInfo.begin()
  
}

onMounted(()=>{
  localStorage.setItem('mapInfo',localStorageItem)
  localStorage.setItem('slideShowInfo',slideShowInfo)
  if(!bodyInfo.allInfo.dealCache()){
    getCompanyInfo('产品产量','2024-07-14','0','0','1','header')
  }else{
    bodyInfo.allInfo = new SlideShow(bodyInfo.allInfo.dealCache())
       
    bodyInfo.allInfo.begin()
  }

})



</script>

<style lang='scss' scoped>
@import "@/styles/mixin.scss";
.product{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding-right: 20px;
  .product-title{
    position:relative;
    width: 35%;
    height: 94px;
    line-height: 94px;
    background: url('@/assets/sunleft.png') no-repeat;
    background-size: 100% 100%;
    font-size: 50px;
    color: #0b0f5a;
    letter-spacing: 4px;
    text-shadow: 0 6px 10px #0b0f5a3d;
    padding-left: 30px;

    &::after{
      content: '';
      position: absolute;
      top: 20px;
      right: 0;
      width: 141px;
      height: 46.7px;
      display: block;
      background: url('@/assets/shakedown-period-sub.png') no-repeat;
      background-size: 100% 100%;
    }
  }

  .product-time{
    font-size: 36px;
    margin-right: 20px;
		color: #0b0f5a;
    font-weight: 700;
  }
}


.product-out-put{
  .product-out-put-nav{
    margin-bottom: 30px;
  }

  .product-out-put-main{
    border-radius: 6px;

    .product-out-put-main-top{
      display:flex;
      justify-content:center;
      align-items:center;
      height:70px;
      box-sizing:border-box;

      .btn{
        @include btn_2_0;
      }
    }

    .product-out-put-main-bottom{
      display: flex;
      justify-content: space-between;
      width:100%;

      .product-out-put-main-bottom-left{
        display: flex;
        flex-direction: column;
        width: 46.5%;

        .btn{
          @include btn_2_0;
        }

        .chart{
          width: 100%;
          height: 250px;
        }
      }

      .product-out-put-main-bottom-right{
        position: relative;
        width: 52.5%;
        ::v-deep .common-table {
          display: flex;
          justify-content: center;

          .el-table__header .cell{
            font-size: 16px!important;
          }

          .el-table__row:hover{
            cursor: pointer;
          }
          .el-table{
            width: 96%;
            border-collapse: collapse;

            .cell{
              padding: 0 5px;
            }
          }
        }

        .product-out-put-main-bottom-right-week_date_note{
          @include card_count_blank;
          position: absolute;
          bottom: 45px;
          right: 2%;
          z-index: 999;
          font-size: 18px;
          span{
            @include card_text;
            margin-left: 10px;
          }
        }
      
      }
    }
  }
}

</style>