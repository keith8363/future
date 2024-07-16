<template>
    <div class='process'>
       <div class="process-header">
          <span class="process-header-left">
            <span class="process-header-left-icon" :style="{'borderColor':colorEnum[item.label]}"></span>
            {{ item.label }}
          </span>
          <span class="process-header-right">
            <span class="process-header-right-1">
              {{ item.value }}台
            </span>
            <span class="process-header-right-2">
              {{ item.value1 }}%
            </span>
          </span>
       </div>
       <div class="process-body">
          <span 
          class="process-body-bar" 
          :style="{'width':`${item.value1}%`, 'backgroundColor':colorEnum[item.label]}"
          ></span>
       </div>
    </div>
</template>

<script  lang='ts' setup>
  import { PropType } from 'vue';

  interface item {
    color:string,
    label:string,
    value:number,
    value1:number,
    unit:string,
    unit1:string
  }

  const colorEnum = {
    '一级报警':'#E0CA2D',
    '二级报警':'#E0982D',
    '三级报警':'#E0712D',
    '四级报警':'#E0712D'
  }

  const props = defineProps({
    item:{
      type:Object as PropType<item>,
      default:{
        color:'#E0712D',
        label:'三级报警',
        value:0,
        unit:'台',
        value1:0.00,
        unit1:'%'
      }
    }
  })
</script>

<style lang='scss' scoped>
    .process{
      width: 100%;
      height: 27px;
      margin-top: 12px;
      &-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        height: 18px;
        font-family: PingFangSC-SNaNpxibold;
        font-weight: 600;
        font-size: 13px;
        color: #C0DAFF;

        &-left{
          width:50%;
          &-icon{
            display: inline-block;
            width: 7px;
            height: 7px;
            border-radius:50%;
            border: 1px solid;
          }
        }

        &-right{
          width:50%;
          text-align: right;
          &-2{
            display: inline-block;
            width: 50%;
          }
        }
      }

      &-body{
        display: flex;
        align-items: center;
        width: 100%;
        height: 4px;
        background: #266dd133;
        border-radius: 2px;
        margin-top: 5px;

        &-bar{
          display: inline-block;
          height: 100%;
          border-radius: 2px;
        }
      }
    }
</style>