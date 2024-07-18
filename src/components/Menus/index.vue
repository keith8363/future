<template>
  <div class="custom-menus" :style="multipleBoxShadow()">
    <span
      v-for="(item, index) in menuList"
      :key="index"
      name="candy"
      @click.prevent="go(item)"
      >{{ item.name }}</span
    >
  </div>
</template>

<script lang="ts">
import menuList from "@/router/asyncRoutes";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Menus",
  components: {},
  setup() {
    // 糖果盒子样式
    const multipleBoxShadow = () => {
      const height = window.outerHeight;
      let value = "box-shadow:";
      for (let i = 1; i < 4; i++) {
        value += `0 0 0px ${height}px rgba(0,0,0,0.8);`;
      }
      return value;
    };

    // 糖果颜色
    const candiesColor = [
      "#ffc4e5",
      "#efc272",
      "#e98d7e",
      "#f7a95f",
      "#fa897d",
      "#9bbeda",
    ];
    // 糖果角弧度
    const candiesBorderRadius = [
      "5px 5px 50%",
      "50% 10px / 100% 10px",
      "10px 10px 2em 2em/10px 10px 2em 2em",
    ];
    // 糖果底边框颜色
    const candiesBorderBottomColor = [
      "#9e3474",
      "#a97314",
      "#e98d7e",
      "#f7a95f",
      "#fa897d",
      "#9bbeda",
    ];
    // 糖果渐变背景
    const candiesGradientColor = [
      "#fffffab,transparent",
      "180deg,#ffffffab,transparent",
    ];
    // 糖果文字颜色
    const candiesTextColor = ["#ca449a", "#966817"];
    onMounted(() => {
      // 糖果样式
      const candies = document.getElementsByName("candy");

      candies.forEach((item, index) => {
        const IDX = Math.floor(Math.random() * 6);
        const IDX_1 = index * Math.random() > 1 ? 0 : 1;
        const IDX_2 = Math.floor(Math.random() * 3);
        const IDX_3 = Math.floor(Math.random() * 6);
        const IDX_4 = index * Math.random() > 1 ? 0 : 1;
        const deg = Math.ceil(Math.random() * 45);
        const sign = Math.sign(Math.floor(Math.random() * 10) - 5);
        const margin = Math.floor(Math.random() * 10);
        item.style.background = candiesColor[IDX];
        item.style.color = candiesTextColor[IDX_1];
        item.style.borderRadius = candiesBorderRadius[IDX_2];
        item.style.borderBottom = `3px solid ${candiesBorderBottomColor[IDX_3]}`;
        item.style.backgroundImage = `linear-gradient(${candiesGradientColor[IDX_4]});`;
        item.style.margin = `${margin}px`;
        item.style.transform = `rotate(${sign + deg}deg) translateY(${
          sign + deg
        }px)`;
      });
    });

    // 菜单路由跳转
    const router = useRouter();
    const go = (item: any) => {
      router.push({ path: item.path });
    };

    return {
      multipleBoxShadow,
      menuList,
      candiesColor,
      candiesBorderRadius,
      candiesBorderBottomColor,
      candiesTextColor,
      go,
      router,
    };
  },
});
</script>

<style lang="scss" scoped>
.custom-menus {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 40%;
  border-radius: 50% 30% 40% 35%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background: url(../../assets/candies_menus_bg.jpeg) repeat;
  background-position: cover;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: 10px double silver;
  z-index: 9999;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }

  span {
    padding: 5px 10px;
    border: none;
    text-shadow: 0 1px 0 white;
    box-shadow: 0 -2px 2px 2px rgba(0, 0, 0, 0.1) inset;
    box-sizing: border-box;

    &:hover {
      cursor: pointer;
      scale: 1.2;
    }
  }
}
</style>
