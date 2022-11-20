<template>
  <div class="user-oper" v-show="!userStore.isScreenfull">
    <el-dropdown>
      <span class="el-dropdown-link">
        案例菜单
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
    <div class="Tips">
      <el-tag
        :type="list[Math.floor(Math.random() * 6)]"
        v-for="(item, index) in collectList"
        :key="index"
        closable
        round
        @click="go(item)"
        @close="close(item)"
        >{{ item }}</el-tag
      >
    </div>
    <div class="userBtn">个人中心</div>
  </div>
</template>

<script lang="ts" setup name="UserOper">
import menuList from "@/router/asyncRoutes";
import { useUserStore } from "@/stores/modules/user";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const router = useRouter();
const { collectList } = storeToRefs(userStore);

const list = ["", "success", "info", "warning", "danger"];

const go = (item: string) => {
  menuList.forEach((i) => {
    i.name === item && router.push(i.path);
  });
};

const close = (item: string) => {
  const index = collectList.value.indexOf(item);
  collectList.value.splice(index, 1);
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";

.user-oper {
  display: flex;
  width: 100%;
  height: 50px;
  background-image: linear-gradient(to bottom, #f2f2f2, #fff);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  .el-dropdown,
  .userBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100%;
    @include text;
  }
  .Tips {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    .el-tag {
      margin-left: 5px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
