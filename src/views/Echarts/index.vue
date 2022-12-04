<template>
  <div class="echarts">
    <div class="myEcharts" ref="myEcharts"></div>
    <div class="btn" @click="change">
      <div class="slide" :class="{ toRight: isright }">
        {{ isright ? "3D视图" : "2D视图" }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="Echarts">
import * as echarts from "echarts"; // 引入echarts
import { getMap } from "@/api/echarts/echarts";
import "echarts-gl";
import { getEchartsConfig } from "@/utils/get-echarts-config";

const myEcharts = ref();
let echartsData = ref();
const getData = async () => {
  await getMap().then((res: any) => {
    initMap("中国地图", res, "map");
    echartsData = res;
  });
};

onMounted(() => {
  getData();
});

let myChart: any = null;

const initMap = (name: string, data: any, type: string) => {
  if (myChart !== null) {
    myChart.dispose();
  }
  echarts.registerMap(name, data);
  myChart = echarts.init(myEcharts.value);
  const config = getEchartsConfig(type, name, myChart);

  const option = {
    title: {
      text: "中国地图",
      left: "center",
      textStyle: {
        color: "#fff",
      },
    },

    tooltip: {
      trigger: "item",
    },

    series: [config],
  };
  myChart.setOption(option);
};

const isright = ref(false); // 默认为2D模式
const change = () => {
  isright.value = !isright.value;
};
watch(isright, (value) => {
  value
    ? initMap("中国地图", echartsData, "map3D")
    : initMap("中国地图", echartsData, "map");
});
</script>

<style lang="scss" scoped>
.echarts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  .myEcharts {
    width: 90%;
    height: 90%;
  }

  .btn {
    position: relative;
    width: 150px;
    height: 40px;
    background-color: pink;
    border-radius: 10px;
    border: none;
    padding: 0 20px;
    color: #fff;
    font-weight: 500;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    &:hover {
      cursor: pointer;
    }

    .toRight {
      right: 20px;
    }

    .slide {
      position: absolute;
      top: -5px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      width: 60px;
      background-color: skyblue;
      opacity: 0.7;
      border-radius: 10px;
    }
  }
}
</style>
