<template>
    <div class='export'>
      <CommonTable 
         v-if="show"
        :table="tableData.currentTable"
      >
         <template v-slot:short_name="{value}">
              <div style="color:#4B67F8;">{{value}}</div>
         </template>å
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
      <el-tooltip 
         effect="dark" 
         content="导出" 
         placement="top-start"
      >
         <img class="image" :src="image" @click="handleImg()" />  
      </el-tooltip>
    </div>
</template>

<script lang='ts' setup>
import { decrypt } from '@/utils/crypto';
import exportToExcel from '@/utils/export/index.ts';
import myFixed from '@/utils/toFixed.ts';
import { SlideShow } from '@/views/SlideShow/config.ts';
import { localStorageItem, slideShowInfo } from '@/views/SlideShow/mock';
import { onMounted, ref } from 'vue';

   const tableData = new SlideShow()
   const image = new URL('@/assets/import.png',import.meta.url).href
   const show = ref(false)

   const handleImg = () => {
      exportToExcel(tableData.currentTable.tr,tableData.currentTable.data,'自定义样式表格导出示例')
   }
   
   onMounted(()=>{
      localStorage.setItem('mapInfo',localStorageItem)
      localStorage.setItem('slideShowInfo',slideShowInfo)
      tableData.getCurrentTable('金')
      tableData.currentTable.tr.forEach(i=>{
         i.width = i.label.length * 34.25
      })
      const newMapInfo = decrypt(localStorage.getItem('mapInfo'))
      tableData.currentTable.data = newMapInfo.productOutput[0][1] 
      show.value = true
   })
</script>

<style lang='scss' scoped>
   .export{
      position: relative;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, #beabcb,#201f45);
      box-sizing: border-box;

      :deep(.common-table){
          width: 80%;
          margin: auto;
          border-radius: 5px;
          padding-top: 100px;
      }

      .image{
         position: fixed;
         right: calc(10% - 44px - 10px);
         top: 19%;
         cursor: pointer;
         &:hover{
            transform: scale(1.2);
         }
      }
   } 
</style>