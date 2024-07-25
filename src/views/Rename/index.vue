<template>
    <div class='app-container'>
      <div class="keys">
        <span>关键字</span>
        <el-input v-model="keys" aria-placeholder="文件名关键字"></el-input>
      </div>
      <input type="file" id="fileInput" multiple >
    </div>
</template>

<script  lang='ts' setup>
import { onMounted, ref } from 'vue';
  const keys = ref(['【无水印】', '（无水印）', '[无水印]', '(无水印)', '无水印'])
  const num = ref(0)
  const download = (file) => {
    const a = document.createElement('a')
    a.style.display = 'none'
    a.href = URL.createObjectURL(file)
    const postfix = file.name.split('.')
    const name = rename(postfix[0]) || '未命名'
    a.download = name +`.${postfix[1]}`
    num.value++
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const rename = (name) => {
    let n = ''
    keys.value.forEach(i=>{
      n = name.includes(i) ? name.replace(i,'') : name
    })

    return n
  }

  onMounted(()=>{
    const fileInput = document.getElementById('fileInput')

    fileInput?.addEventListener('change',function(){
      const files = fileInput.files;
      Object.values(files).forEach(file=>{
       
        download(file)
      })

      fileInput.outerHTML=fileInput.outerHTML;
    })

  


   
  })

</script>

<style lang='scss' scoped>
    .app-container{
      .keys{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;
        
        span{
          width: 100px;
        }

        .el-input{
          width: calc(100% - 200px);
        }
      }
    }
</style>