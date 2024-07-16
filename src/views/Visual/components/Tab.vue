<template>
    <div class='tab'>
      <span 
        class="tab-item" 
        v-for="item in tabLsit" 
        :key="item.id" 
        :class="{'active':item.id === currentId}"
        @click.capture="handleClick(item.id)"
      >
        {{ item.label }}
      </span>
    </div>
</template>

<script  lang='ts' setup>
  interface item {
    label:string,
    id:number
  }
  const props = defineProps({
    tabLsit:{
      type:Array<item>,
    },
    currentId:{
      type:Number
    }
  })

  const emits = defineEmits(['currentIdChanged'])

  const handleClick = (id) =>{
    emits('currentIdChanged',id)
  }
</script>

<style lang='scss' scoped>
  .tab{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 12px;

    &-item{
      position: relative;
      width: 82px;
      height: 23px;
      text-align: center;
      line-height: 23px;
      font-family: PingFang-SC-Heavy;
      font-weight: 900;
      font-size: 13px;
      color: #67ABFF;
      text-shadow: 0 3px 5px #1D1707;

      &:hover{
        cursor: pointer;
      } 
      
      &::after{
        position: absolute;
        content: '';
        top: 10 px;
        left: 0;
        width: 82px;
        height: 23px;
        z-index: 2;
        background: url('@/assets/EquipmentComprehensiveAdministration/leftCenter7.png') no-repeat;
        background-size: contain;
      }
      
      &.active{
        color: #67CEFF;
        &::after{
          position: absolute;
          content: '';
          top: 10 px;
          left: 0;
          width: 82px;
          height: 23px;
          z-index: 2;
          background: url('@/assets/EquipmentComprehensiveAdministration/leftCenter6.png') no-repeat;
          background-size: contain;
        }
      }
    }
  }
</style>