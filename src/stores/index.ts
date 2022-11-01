import { createPinia } from 'pinia'
// pinia持久化处理，避免数据刷新丢失的问题
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

export default pinia;