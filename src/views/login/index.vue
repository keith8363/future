<template>
    <div class='app-container'>
      <div class="box">
      <div class="title">Future</div>
       <div class="login">

       </div>
       </div>
    </div>

</template>

<script  lang='ts'>

export default defineComponent({
name:'Login',
components:{},
setup(){
const state = reactive({})
watchEffect(() => {})
return {
...toRefs(state)
}
}
})
</script>

<style lang='scss' scoped>
  .app-container{
    width: 100%;
    height: 100%;
    background-image: url('../../assets/girl.png');
    background-position: center;
    box-sizing: border-box;
    overflow: hidden;

    .box{
      display: flex;
      justify-content: space-between;
      margin: 100px;
      width: 80%;
      height: 80%;
      background-color: #fff;

      .title{
        width: 40%;
        height: 100%;
        background-color: #0ac78f;
      };
      .login{
        margin-top: 60px;
        border-radius: 5px;
        width: 40%;
        height: 80%;
        background-color: #ccc;
      }
    }
    
  }
    
</style>