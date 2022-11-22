<template>
  <div class="echarts">echarts</div>
</template>

<script lang="ts" setup name="Echarts">
// import * as echarts from "echarts"; // 引入echarts
// import "echarts-gl"; // 引入echarts-gl
import { getMap } from "@/api/echarts/echarts";

const initMap = async () => {
  await getMap().then((res: any) => {
    console.log(res);
  });
};
initMap();
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
  background: url("@/assets/girl.png") no-repeat center;
  background-size: cover;
}
</style>
