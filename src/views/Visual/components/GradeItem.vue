<template>
    <div class='grade-item'>
       <div class="grade-item-left">
          <img :src="item?.icon" alt="">
          <div class="grade-item-left-name">{{ item?.name }}</div>
       </div>
       <div class="grade-item-right">
          <div class="grade-item-right-item" v-for="(i,index) in item?.array" :key="index">
            <div class="grade-item-right-item-label">
              {{i.label}}
            </div>
            <div class="grade-item-right-item-value">
              {{ i.value || '--' }} <span class="grade-item-right-item-unit">台</span>
            </div>
          </div>
       </div>
    </div>
</template>

<script  lang='ts' setup>
import { PropType } from 'vue';

interface item {
  label:string,
  value:string,
}

interface grade {
  name:string,
  icon:string,
  array:Array<item>
}

const props = defineProps({
  item:{
    type:Object as PropType<grade>,
  }
})
</script>

<style lang='scss' scoped>
    .grade-item{
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 3.625rem;

      &-left{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 86px;
        height: 100%;
        margin-right: .4375rem;
        background: url('@/assets/EquipmentComprehensiveAdministration/leftBottom.png') no-repeat;
        background-size: 100% 100%;
        font-family: PingFangSC-SNaNpxibold;
        font-weight: 600;
        font-size: 13px;
        color: #E3FCFF;
        padding: 7px 0 10px 0;
        box-sizing: border-box;

        img{
          width: 1.375rem;
          height: 1.25rem;
          margin: .3125rem 0 .1875rem 0;
        }
      }

      &-right{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        height: 100%;
        background-image: linear-gradient(-89deg, #4ea5ff4d 0%, #006aff05 100%);
        border-radius: 0 6.25rem 6.25rem 0;
        border-right: .0625rem solid rgba(107, 176, 249,1);
        border-top: none;
        border-bottom: none;

        &::after{
          position: absolute;
          left: 0;
          top:0;
          content: '';
          width: calc(100% - 1.375rem);
          height: 1px;
          background: linear-gradient(to left,rgba(107, 176, 249,0.51),rgba(45, 105, 246,0.09));
        }

        &::before{
          position: absolute;
          left: 0;
          bottom:0;
          content: '';
          width: calc(100% - 1.375rem);
          height: 1px;
          background: linear-gradient(to left,rgba(107, 176, 249,0.51),rgba(45, 105, 246,0.09));
        }

        
        &-item{
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
          height: 100%;

          &-label{
            font-family: PingFangSC-Regular;
            font-weight: 400;
            font-size: 13px;
            color: #E3EEFF;
            margin-bottom: .25rem;
          }

          &-value{
            font-family: DINAlternate-Bold;
            font-weight: 700;
            font-size: 18px;
            color: #C0DAFF;
            text-align: right;
          }

          &-unit{
            font-family: PingFangSC-Regular;
            font-weight: 400;
            font-size: 13px;
            color: #C0DAFF;
          }

          &:not(:last-child)::after{
            position: absolute;
            top: 50%;
            right: 0;
            content: '';
            width: .0625rem;
            height: 80%;
            transform: translateY(-50%);
            background-image: linear-gradient(to top,rgba(109, 154, 178,0.2),#5f9bb5,rgba(109, 154, 178,0.5));
            border-radius: 50%;
            filter: blur(.0313rem);
          }

        }
      }
    }
</style>