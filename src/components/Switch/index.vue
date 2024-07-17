<template>
  <div class='switch'>
     <div 
      class="switch-item" 
      :class="{'active' : currentText===inactiveText}"
      @click="currentTextChanged(inactiveText)"
     >{{ inactiveText }}</div>
     <div 
      class="switch-item" 
      :class="{'active' : currentText===activeText}"
      @click="currentTextChanged(activeText)"
     >{{ activeText }}</div>
  </div>
</template>
<script lang='ts' setup>

const emits = defineEmits(['currentTextChanged'])
const props = defineProps({
  currentText:{
    type:String,
    default:'是'
  },
  activeText:{
    type:String,
    default:'是'
  },
  inactiveText:{
    type:String,
    default:'否'
  }
})

const currentTextChanged = (val:string) => {
  emits('currentTextChanged',val)
}
</script>

<style lang='scss' scoped>
  .switch{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100px;
    height: 36px;
    line-height: 36px;
    border-radius: 18px;
    border: 2px solid #bdc4f9;
    background-color: #bcc0ff29;
    cursor:pointer;

    .switch-item{
      display:flex;
      align-items:center;
      justify-content:center;
      width: 48px;
      height: 32px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      font-size: 22px;
      color:#6871E9;

      &.active{
        background-image: linear-gradient(180deg, #8C97FF 0%, #707CF7 100%);
        border: 2px solid #6a70be80;
        border-radius: 16px;
        color:#fff;
      }
    }
  }
</style>