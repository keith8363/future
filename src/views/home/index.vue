<template>
    <div class='app-container'>
       首页
    </div>
</template>

<script  lang='ts'>
// const router = useRouter()
// const route = useRoute()
import {reactive,computed, toRefs,defineComponent,  ref, watchEffect,} from 'vue'
export default defineComponent({
name:'Home',
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
    
</style>