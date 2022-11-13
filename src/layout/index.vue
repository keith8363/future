<template>
  <FuHeader></FuHeader>
  <UserOper></UserOper>
  <div
    class="main"
    @mousemove="addHover"
    @mouseleave="removeHover"
    @mousedown="removeHover"
  >
    <router-view />
    <div class="btn-left" v-show="btnShow">
      <el-icon :size="40"><ArrowLeftBold /></el-icon>
    </div>
    <div class="btn-right" v-show="btnShow">
      <el-icon :size="40"><ArrowRightBold /></el-icon>
    </div>
  </div>
  <FuFooter></FuFooter>
</template>
<script lang="ts" name="Layout" setup>
import FuHeader from "./components/FuHeader/index.vue";
import UserOper from "./components/UserOper/index.vue";
import FuFooter from "./components/FuFooter/index.vue";

components: {
  FuHeader;
  UserOper;
  FuFooter;
}
//  主屏幕左右按钮
const btnShow = ref(false);

const addHover = () => {
  btnShow.value = true;
};

const removeHover = () => {
  btnShow.value = false;
};
</script>

<style scoped lang="scss">
@import "@/styles/mixin.scss";

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
    &:hover {
      background-color: rgba(000, 000, 000, 0.3);
      color: #fff;
      cursor: pointer;
    }
  }

  .btn-left {
    left: 5%;
  }

  .btn-right {
    right: 5%;
  }
}
</style>
