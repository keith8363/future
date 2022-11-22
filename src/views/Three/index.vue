<template>
  <div class="app-container">three</div>
</template>

<script lang="ts" setup name="three">
import { useRouter } from "vue-router";
const router = useRouter();
console.log(router.currentRoute.value);
</script>

<style lang="scss" scoped></style>
