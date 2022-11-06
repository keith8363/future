<template>
    <div ref="container" class="app-container">
      <!-- 流星元素 -->
      <div class="shooting_star" v-for="item in 12" :key="item" />

      <div class="box">
        <div class="title">
          <img src="../../assets/future.png" />
          <div class="contant">{{ana.text}}</div>
          <div class="author" v-if="ana.author">{{'--' + ana.author}}</div>
        </div>
        <div class="login">
          <h1>Login</h1>
          <el-form ref="ruleFormRef" :model="form" label-width="120px" label-position="top" :rules="rules">
            <el-form-item label="账号:" prop="name" required>
              <el-input v-model.trim="form.name" placeholder="UserName" clearable prefix-icon="User" />
            </el-form-item>
            <el-form-item label="密码:" prop="password" required>
              <el-input v-model.trim="form.password" placeholder="Password" type="password" clearable prefix-icon="Lock"/>
            </el-form-item>
            <el-form-item label="忘记密码?">
              <a href=":javascrpt;"></a>
            </el-form-item>
            <el-form-item class="btn">
              <el-button type="primary" @click="submitForm()">登 录</el-button>
              <el-button type="primary">注 册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
       
    </div>

</template>

<script  lang='ts' setup name="Login">
    import { anaList } from '@/utils/get-ana'

    const ruleFormRef = ref<FormInstance>()
  
    const validatePass = (rule: any, value: any, callback: any) => {
      if (value === '') {
        callback(new Error('Please input the password'))
      } else {
        callback()
      }
    }

    const num = Math.floor(Math.random() * 6)

    const ana = anaList[num]

    const form = reactive({
      name:'',
      password:''
    })

    const rules = reactive({
      name:[
        { required:true, trigger: 'blur',message:'Please select Your Name' }
      ],
      password: [
        { required:true, trigger: 'blur',message:'Please select Your password' },
        { validator: validatePass, trigger: 'blur' }
      ]
    })
   
    const submitForm = () => {
      if (!ruleFormRef.value) return
        ruleFormRef.value.validate((valid) => {
        if (valid) {
          console.log('submit!')
        } else {
          return false
        }
      })
    }

  

</script>

<style lang='scss' scoped>
    .app-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('../../assets/girl.png');
      background-position: center;
      background-size: cover;
      animation: girl 50s linear infinite;
      box-sizing: border-box;
      overflow: hidden;


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
        background-color: rgba(50,50,50,0.3);
        border-radius: 10px;
        border: 1px solid rgba(255,255,255,0.2);
        overflow: hidden;

        .title{
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          width: 50%;
          height: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 30px 10px;

          img {
            margin-left: 430px;
          }

          .contant{
            margin-top: -20px;
            width: 300px;
            color:#75767a;
            text-indent: 2rem;
            font-size: includes(font-size-base);
          }

          .author{
            margin-top: 20px;
            width: 300px;
            color:#75767a;
            text-align: right;
            font-size: includes(font-size-base);
          }
        };

        .login{
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 5px;
          width: 50%;
          background-color: rgba(255, 255, 255, 0.9);
          padding: 30px 10px;


          h1 {
            text-align: center;
            font-family:'Times New Roman', Times, serif;
            font-size:40px;
            margin-bottom: 10px;
            color: includes(text-color);
          }

          :deep(.el-form .el-form-item .el-form-item__label) {
            color: includes(text-color-secondary);
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