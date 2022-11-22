<template>
  <div class="layout">
    <FuHeader></FuHeader>
    <UserOper></UserOper>
    <div class="main" @mousemove="addHover" @mouseleave="removeHover">
      <router-view :key="key" />
      <div
        class="btn-left"
        v-show="btnShow"
        @click="go($router.currentRoute.value.path, 'left')"
      >
        <el-icon :size="40"><ArrowLeftBold /></el-icon>
      </div>
      <div
        class="btn-right"
        v-show="btnShow"
        @click="go($router.currentRoute.value.path, 'right')"
      >
        <el-icon :size="40"><ArrowRightBold /></el-icon>
      </div>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="收藏"
        placement="right"
      >
        <i
          v-if="isloading"
          class="iconfont"
          :class="isCollected ? 'icon-shoucang1' : 'icon-shoucang'"
          @click="collect"
          v-show="showbtn"
        ></i>
      </el-tooltip>
      <!-- <el-tooltip
        class="box-item"
        effect="dark"
        content="案例入口"
        placement="right"
      >
        <i
          class="iconfont icon-icon_rukou"
          @click="entrance"
          v-show="showbtn"
        ></i>
      </el-tooltip> -->
    </div>
    <FuFooter></FuFooter>
  </div>
</template>
<script lang="ts" name="Layout" setup>
import FuHeader from "./components/FuHeader/index.vue";
import UserOper from "./components/UserOper/index.vue";
import FuFooter from "./components/FuFooter/index.vue";
import menuList from "@/router/asyncRoutes";
import { useRouter, useRoute } from "vue-router";
import { getPath } from "@/utils/get-path";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/modules/user";
components: {
  FuHeader;
  UserOper;
  FuFooter;
}

//  主屏幕左右按钮及其功能
const btnShow = ref(false);

const addHover = () => {
  btnShow.value = true;
};

const removeHover = () => {
  btnShow.value = false;
};

let menu = new Map();

menuList.forEach((i) => {
  menu.set(i.name, i.path);
});

const newMenu = [...menu.values()];

newMenu.unshift("/home");

const router = useRouter();
const route = useRoute();

const key = computed(() => {
  return route.path;
});

const go = (currentRoute: string, diraction: string) => {
  const currentIndex = newMenu.indexOf(currentRoute);
  if (currentIndex === -1) {
    return;
  } else {
    router.push({ path: getPath(currentIndex, newMenu, diraction) });
  }
};

// 收藏按钮
const userStore = useUserStore();
const { collectList } = storeToRefs(userStore);

const isCollected = computed(() => {
  const name = router.currentRoute.value.name as string;
  return collectList.value.includes(name);
});

const showbtn = computed(() => router.currentRoute.value.path !== "/");
const collect = () => {
  const name = router.currentRoute.value.name as string;
  if (isCollected.value) {
    const index = collectList.value.indexOf(name);
    collectList.value.splice(index, 1);
  } else {
    collectList.value.push(name);
  }
};

let isloading = true;

// 动态局部刷新dom
watch(
  () => router.currentRoute.value.path,
  () => {
    isloading = false;
    nextTick(() => {
      isloading = true;
    });
  }
);
</script>

<style scoped lang="scss">
@import "@/styles/mixin.scss";
.layout {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  height: 100%;

  .main {
    @include relative;
    flex: 1;

    .btn-left,
    .btn-right {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 30%;
      width: 50px;
      height: 300px;
      @include border-radius-base;
      @include border-color-base;
      @include box-shadow-base;
      background-color: rgba(000, 000, 000, 0.2);
      color: #fff;
      &:hover {
        background-color: rgba(000, 000, 000, 0.3);
        cursor: pointer;
      }
    }

    .btn-left {
      left: 5%;
    }

    .btn-right {
      right: 5%;
    }
    .iconfont {
      position: absolute;
      right: 60px;
      font-size: 26px;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      font-weight: 500;
      &:hover {
        cursor: pointer;
      }
    }

    .icon-icon_rukou {
      bottom: 30px;
    }

    .icon-shoucang1 {
      color: red;
    }

    .icon-shoucang,
    .icon-shoucang1 {
      top: 30px;
    }
  }
}
</style>
