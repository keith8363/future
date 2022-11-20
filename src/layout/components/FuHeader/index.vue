<template>
  <div class="fu-header">
    <div class="module">
      <img src="../../../assets/logo.png" alt="" />
      {{ $CONFIG.TITLE }}
      <span class="page-break">/</span>
      <span class="page-title">{{ $route.meta.title }}</span>
    </div>
    <div class="toolbar">
      <el-icon style="vertical-align: middle" @click="screenfull.toggle()">
        <FullScreen />
      </el-icon>

      <el-dropdown>
        <span class="el-dropdown-link">
          {{ userStore.userName }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="(item, index) in menuList"
              :key="index"
              @click="go(item)"
              >{{ item }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup name="FuHeader">
import screenfull from "screenfull";
import { useUserStore } from "@/stores/modules/user";
import { useCurrentInstance } from "@/utils/use-currentInstance";

// 全屏处理
const userStore = useUserStore();
screenfull.onchange(() => {
  userStore.isScreenfull = screenfull.isFullscreen;
});

// 获取全局配置
const { proxy } = useCurrentInstance();
const { $CONFIG } = proxy;

// 用户操作按钮
const menuList = reactive(["个人中心", "退出登录"]);
const go = (where: string) => {
  console.log(where);
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.fu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0 10px;
  background-image: linear-gradient(to bottom, #30ffff, #f2f2f2);
  border-bottom: none;

  .module {
    font-size: 24px;
    font-weight: 700;
    @include text-famliy-base;
    color: #3641ff;
    img {
      width: 50px;
      height: 50px;
      vertical-align: bottom;
    }
    .page-break {
      color: #acdddd;
      margin: 0 10px;
    }
    .page-title {
      font-size: 16px;
      font-weight: 500;
    }
  }

  .toolbar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    padding: 0 10px;
    line-height: 50px;
    text-align: center;

    .el-dropdown,
    .el-icon {
      margin-left: 10px;
    }

    .el-icon {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
