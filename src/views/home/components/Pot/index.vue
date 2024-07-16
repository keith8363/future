<template>
  <div class="pot">
    <a
      v-for="(item, index) in tecList"
      :key="index"
      target="_blank"
      :href="item.site"
    >
      {{ item.name }}
    </a>
  </div>
</template>

<script lang="ts" setup name="Pot">
const tecList = reactive([
  {
    name: "Vue3",
    site: "https://cn.vuejs.org/",
  },
  {
    name: "vite",
    site: "https://vitejs.cn/",
  },
  {
    name: "Element-Plus",
    site: "https://element-plus.gitee.io/zh-CN/",
  },
  {
    name: "Pinia",
    site: "https://pinia.web3doc.top/",
  },
  {
    name: "TypeScript",
    site: "https://www.tslang.cn/docs/Home.html",
  },
]);
</script>

<style lang="scss" scoped>
.pot {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: transparent;
    box-shadow: inset 0 0 10px #fff;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 16px;
    font-weight: 700;
  }

  a:nth-child(1) {
    background: radial-gradient(transparent, transparent, #cec2d6);
    animation: rhythm 4s infinite 0ms linear;
    &:hover {
      animation-play-state: paused;
    }
  }

  a:nth-child(2) {
    background: radial-gradient(transparent, transparent, #e98d7e);
    animation: rhythm 4s infinite 300ms linear;
    &:hover {
      animation-play-state: paused;
    }
  }

  a:nth-child(3) {
    background: radial-gradient(transparent, transparent, #f7a95f);
    animation: rhythm 4s infinite 600ms linear;
    &:hover {
      animation-play-state: paused;
    }
  }

  a:nth-child(4) {
    background: radial-gradient(transparent, transparent, #fa897d);
    animation: rhythm 4s infinite 900ms linear;
    &:hover {
      animation-play-state: paused;
    }
  }

  a:nth-child(5) {
    background: radial-gradient(transparent, transparent, #9bbeda);
    animation: rhythm 4s infinite 1200ms linear;
    &:hover {
      animation-play-state: paused;
    }
  }

  @keyframes rhythm {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-15%);
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(15%);
    }
    100% {
      transform: translateY(0);
    }
  }
}
</style>
