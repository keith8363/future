<template>
    <div class='title' id="title" :key="positionIndex" :style="{'backgroundImage':`url(${currentUrl})`}"></div>
</template>

<script  lang='ts' setup>
import { computed } from 'vue';
  const props = defineProps({
    positionIndex:{
      required:true,
      type:Number,
      default:0
    }
  })

  const urlList = [
    new URL('@/assets/EquipmentComprehensiveAdministration/title.png', import.meta.url).href,
    new URL('@/assets/EquipmentComprehensiveAdministration/title1.png', import.meta.url).href,
    new URL('@/assets/EquipmentComprehensiveAdministration/title2.png', import.meta.url).href,
    new URL('@/assets/EquipmentComprehensiveAdministration/title3.png', import.meta.url).href,
    new URL('@/assets/EquipmentComprehensiveAdministration/title4.png', import.meta.url).href,
    new URL('@/assets/EquipmentComprehensiveAdministration/title5.png', import.meta.url).href,
    new URL('@/assets/EquipmentComprehensiveAdministration/title6.png', import.meta.url).href,
    new URL('@/assets/EquipmentComprehensiveAdministration/title7.png', import.meta.url).href,
    new URL('@/assets/EquipmentComprehensiveAdministration/title8.png', import.meta.url).href,
  ]

  const currentUrl = computed(()=>{
    return urlList[props.positionIndex]
  })

</script>

<style lang='scss' scoped>
    .title{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 33px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: 100% 100%;
    }
</style>