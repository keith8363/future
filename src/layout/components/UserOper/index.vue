<template>
  <div class="user-oper" v-show="!userStore.isScreenfull">
    <div class="user-oper-tips">
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
  </div>
</template>

<script lang="ts" setup name="UserOper">
import menuList from "@/router/asyncRoutes";
import { useUserStore } from "@/stores/modules/user";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

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
  border-radius: 0 0 20px 20px;
  overflow: hidden;

  .user-oper-tips {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    padding: 0 10px;

    .el-tag {
      margin-left: 5px;
      &:hover {
        cursor: pointer;
        border: 1px solid #5cc5fc;
      }
    }
  }
}
</style>
