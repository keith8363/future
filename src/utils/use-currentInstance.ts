// 获取全局挂载配置文件对象
// 搭配mian.ts中app.config.globalProperties.$CONFIG = config的使用
import { ComponentInternalInstance } from "vue";

export const useCurrentInstance = () => {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  const proxy = appContext.config.globalProperties;
  return {
    proxy,
  };
};
