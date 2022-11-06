<template>
    <div class='app-container' ref="container">
      <!-- 流星元素 -->
      <div class="shooting_star" v-for="item in 12" :key="item"></div>
      
      <div class="box">
        <div class="title">
          <img src="../../assets/future.png" >
        </div>
        <div class="login">
          <h1>Login</h1>
          <el-form :model="form" label-width="140px" label-position="top" size="large">
            <el-form-item label="账号:">
              <el-input v-model="form.name" placeholder="UserName" clearable />
            </el-form-item>
            <el-form-item label="密码:">
              <el-input v-model="form.password" placeholder="Password" type="password" clearable/>
            </el-form-item>
            <el-form-item label="忘记密码?">
              <a href=":javascrpt;"></a>
            </el-form-item>
            <el-form-item class="btn">
              <el-button type="primary">登 录</el-button>
              <el-button type="primary">注 册</el-button>
            </el-form-item>
          </el-form>
        </div>
       </div>
    </div>

</template>

<script  lang='ts'>
export default defineComponent({
  name:'Login',
  setup(){
    const state = reactive({
      form:{
        name:'',
        password:''
      }
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang='scss' scoped>
    .app-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: url('../../assets/girl.png');
      background-position: center;
      background-size: cover;
      animation: girl 50s linear infinite;


    .shooting_star {
       position: absolute;
       top: 50%;
       left: 50%;
       width: 4px;
       height: 4px;
       background: #f7f7f7;
       border-radius: 50%;
       box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1)
                   0 0 0 8px rgba(255, 255, 255, 0.1)
                   0 0 0 40px #ff643c;
       -webkit-animation: shooting 3s linear infinite;
       animation: shooting 3s linear infinite;
    }   
    
    .shooting_star::before {
      content: '';
      position: absolute;
      top: 50%;
      width: 300px;
      height: 2px;
      transform: translateY(-50%); 
      background: linear-gradient(90deg,#f7f7f7,transparent);  
    }

   
      .box{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        justify-content: space-between;
        width: 60%;
        height: 80%;
        background-color: rgba(50,50,50,0.5);
        border-radius: 10px;
        border: 1px solid rgba(255,255,255,0.2);
        overflow: hidden;

        .title{
          width: 50%;
          height: 100%;
          background-color: #0ac78f;
          overflow: hidden
        };

        .login{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 60px;
          border-radius: 5px;
          width: 50%;
          height: 80%;
          color: rgba(255,255,255);


          h1 {
            text-align: center;
            font-family:'Times New Roman', Times, serif;
            font-size:40px;
            margin-bottom: 10px;
          }

          :deep(.el-form .el-form-item .el-form-item__label) {
            color: #fff;
            font-family: 'Times New Roman', Times, serif;
            margin-top: 20px;
            width: 300px;
          }
          :deep(.el-form .el-form-item .el-form-item__content) {
            display: flex;
            justify-content: center;
          }
        }
      }
    
  }

    @keyframes girl 
    {
        0%, 100%{
          transform: scale(1);
        }
        50%{
          transform: scale(1.1);
        }
      
    }

    @keyframes shooting {
        0%{
          transform: rotate(315deg) translateX(0);
          opacity:1;
        }
        70%{
          transform: rotate(315deg) translateX(-1000px);
          opacity:0;
        }
        100%{
          transform: rotate(315deg) translateX(0);
          opacity:0;
        }
    }

    .shooting_star:nth-child(1){
      top:0px;
      right: 0px;
      left: initial;
      animation-delay: 0;
      animation-duration: 4s;
    }

    .shooting_star:nth-child(2){
      top:0px;
      right: 80px;
      left: initial;
      animation-delay: 0.25s;
      animation-duration: 3.5s;
    }

    .shooting_star:nth-child(3){
      top:80px;
      right: 0px;
      left: initial;
      animation-delay: 0.7s;
      animation-duration: 4.5s;
    }

    .shooting_star:nth-child(4){
      top:0px;
      right: 600px;
      left: initial;
      animation-delay: 0.4s;
      animation-duration: 5s;
    }

    .shooting_star:nth-child(5){
      top:0px;
      right: 300px;
      left: initial;
      animation-delay: 0.8s;
      animation-duration: 4s;
    }

    .shooting_star:nth-child(6){
      top:0px;
      right: 180px;
      left: initial;
      animation-delay: 0.6s;
      animation-duration: 3.75s;
    } 

    .shooting_star:nth-child(7){
      top:40px;
      right: 0px;
      left: initial;
      animation-delay: 1.3s;
      animation-duration: 4.5s;
    } 

    .shooting_star:nth-child(8){
      top:0px;
      right: 1200px;
      left: initial;
      animation-delay: 0.9s;
      animation-duration: 5.25s;
    } 

    .shooting_star:nth-child(9){
      top:120px;
      right: 0px;
      left: initial;
      animation-delay: 0.9s;
      animation-duration: 7s;
    } 

    .shooting_star:nth-child(9){
      top:400px;
      right: 0px;
      left: initial;
      animation-delay: 1.2s;
      animation-duration: 6.5s;
    } 

    .shooting_star:nth-child(10){
      top:800px;
      right: 0px;
      left: initial;
      animation-delay: 0.8s;
      animation-duration: 2.5s;
    }

    .shooting_star:nth-child(11){
      top:0px;
      right: 800px;
      left: initial;
      animation-delay: 0.6s;
      animation-duration: 6.5s;
    }

    .shooting_star:nth-child(12){
      top:0px;
      right: 1400px;
      left: initial;
      animation-delay: 1.5s;
      animation-duration: 4s;
    }


 
    
</style>