<template>
  <div class="fu-footer" v-show="!userStore.isScreenfull"></div>
</template>

<script lang="ts" setup name="FuFooter">
import { useUserStore } from "@/stores/modules/user";
const userStore = useUserStore();
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.fu-footer {
  height: 50px;
  width: 100%;
  background-image: linear-gradient(to bottom, #fff, #30ffff);
  @include box-shadow-base;
  @include border-color-base;
}
</style>
