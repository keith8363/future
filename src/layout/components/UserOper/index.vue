<template>
  <div class="user-oper" v-show="!userStore.isScreenfull">
    <el-dropdown>
      <span class="el-dropdown-link">
        菜单
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="(item, index) in menuList"
            :key="index"
            @click="$router.push(item.path)"
            >{{ item.name }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <div class="Tips"></div>
    <div class="userBtn">个人中心</div>
  </div>
</template>

<script lang="ts" setup name="UserOper">
import menuList from "@/router/asyncRoutes";
import { useUserStore } from "@/stores/modules/user";
const userStore = useUserStore();
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";

.user-oper {
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #f2f2f2;
  .el-dropdown,
  .userBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100%;
    @include box-shadow-base;
    @include text;
  }
  .Tips {
    flex: 1;
  }
}
</style>
