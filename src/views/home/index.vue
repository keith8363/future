<template>
  <div class="home">
    <p class="describle">{{ describle }}</p>
    <div class="author">
      <span class="title">Author:</span>
      <span class="name">{{ userName }}</span>
    </div>
    <Pot></Pot>
  </div>
</template>

<script lang="ts" setup name="Home">
import Pot from "./components/Pot/index.vue";
import { useUserStore } from "@/stores/modules/user";
import { storeToRefs } from "pinia";
components: {
  Pot;
}
const userStore = useUserStore();
const { userName, describle } = storeToRefs(userStore);
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.home {
  @include relative;
  width: 100%;
  height: 100%;
  background: url(../../assets/pie.jpeg) no-repeat center;
  background-size: cover;
  .describle {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 50%;
    @include ellipsisBasic(2);
    @include text;
    font-size: 18px;
  }
  .author {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    height: 50px;
    line-height: 50px;
    .title {
      @include heading-color;
      margin-right: 10px;
      font-size: 36px;
      font-weight: 700;
    }
    .name {
      @include text-color-secondary;
    }

    .title,
    .name {
      font-size: 36px;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    }
  }
}
</style>
