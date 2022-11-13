<template>
  <FuHeader></FuHeader>
  <UserOper></UserOper>
  <div
    class="main"
    @mousemove="addHover"
    @mouseleave="removeHover"
    @mousedown="removeHover"
  >
    <div class="btn-left btn"></div>
    <router-view />
    <div class="btn-right btn"></div>
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
const dom = document.getElementsByClassName("btn");

const addHover = () => {
  dom[0]?.classList.add("hover");
  dom[1]?.classList.add("hover");
};

const removeHover = () => {
  dom[0]?.classList.remove("hover");
  dom[1]?.classList.remove("hover");
};
</script>

<style scoped lang="scss">
@import "@/styles/mixin.scss";

.main {
  @include relative;
  flex: 1;

  .btn-left,
  .btn-right {
    position: fixed;
    top: 30%;
    width: 50px;
    height: 300px;
    color: transparent;
  }

  .hover {
    @include border-radius-base;
    @include border-color-base;
    @include box-shadow-base;
    background-color: rgba(000, 000, 000, 0.2);

    &:hover {
      background-color: rgba(000, 000, 000, 0.3);
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
