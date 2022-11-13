<template>
  <div class="fu-header">
    <div class="language">简体中文</div>
    <div class="module">{{ $route.meta.title }}</div>
    <div class="toolbar">
      <el-icon style="vertical-align: middle" @click="screenfull.toggle()">
        <FullScreen />
      </el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup name="FuHeader">
import screenfull from "screenfull";
import { useUserStore } from "@/stores/modules/user";
const userStore = useUserStore();

screenfull.onchange(() => {
  userStore.isScreenfull = screenfull.isFullscreen;
});
</script>

<style lang="scss" scoped>
.fu-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: #30ffff;

  .language,
  .toolbar {
    width: 100px;
    height: 100%;
    padding: 0 10px;
    line-height: 50px;
    text-align: center;

    .el-icon {
      &:hover {
        cursor: pointer;
      }
    }
  }

  .module {
    flex: 1;
    text-align: center;
  }
}
</style>
