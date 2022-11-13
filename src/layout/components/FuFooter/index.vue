<template>
  <div class="fu-footer" v-show="!userStore.isScreenfull"></div>
</template>

<script lang="ts" setup name="FuFooter">
import { useUserStore } from "@/stores/modules/user";
const userStore = useUserStore();
</script>

<style lang="scss" scoped>
.fu-footer {
  height: 50px;
  width: 100%;
  background-color: #30ffff;
}
</style>
