<template>
  <div class="app-container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script lang="ts">
import Particle from "@/utils/particle";
export default defineComponent({
  name: "Canvas",
  components: {},
  setup() {
    let canvas = ref();
    let particles: Array<any> = [];
    let ctx = ref<CanvasRenderingContext2D>();

    onMounted(() => {
      initCanvasSize();
    });

    // 初始化canvas(使用devicePixelRatio提高清晰度)
    const initCanvasSize = () => {
      canvas.value.width = window.innerWidth * devicePixelRatio;
      canvas.value.height = window.innerHeight * devicePixelRatio;

      // 获取上下文、设置只读模式提高性能
      ctx = canvas.value?.getContext("2d", {
        willReadFrequently: true,
      }) as CanvasRenderingContext2D;

      begin();
    };

    const begin = () => {
      clear();

      update();

      particles.forEach((P) => P.draw());

      // 注册动作，刷新回调
      requestAnimationFrame(begin);
    };

    const getTime = () => {
      return new Date().toTimeString().substring(0, 8);
    };

    let time = getTime();

    // 更新时间
    const update = () => {
      // 获取当前时间的字符串格式
      const timeText = getTime();

      if (time === timeText) {
        return;
      }

      clear();

      time = timeText;

      const { width, height } = canvas.value;

      ctx.fillStyle = "#000";
      ctx.textBaseline = "middle";
      ctx.font = `${140 * devicePixelRatio}px 'DS-Digital',sans-serif`;
      const timeWidth = ctx.measureText(time).width;
      ctx.fillText(time, (width - timeWidth) / 2, height / 2);

      const points = getPoints();

      clear();

      points.forEach((i, index) => {
        let p = particles[index];

        if (!p) {
          p = new Particle(canvas, ctx);
          particles.push(p);
        }
        const [x, y] = points[index];
        p.moveTo(x, y);
      });

      if (points.length < particles.length) {
        particles.splice(points.length);
      }
    };

    const clear = () => {
      // 清空画布
      ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
    };

    // 获取文本中像素点的位置
    const getPoints = () => {
      const { width, height, data } = ctx.getImageData(
        0,
        0,
        canvas.value.width,
        canvas.value.height
      );

      const points: Array<Array<any>> = [];

      // 设置获取像素点的间隔距离，避免过于密集
      const gap = 6;

      for (let i = 0; i < width; i += gap) {
        for (let j = 0; j < height; j += gap) {
          const index = (i + j * width) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];
          const a = data[index + 3];
          if (r === 0 && g === 0 && b === 0 && a === 255) {
            points.push([i, j]);
          }
        }
      }

      return points;
    };

    return {
      canvas,
      initCanvasSize,
      particles,
      begin,
      ctx,
      update,
      time,
      getPoints,
      getTime,
      clear,
    };
  },
});
</script>

<style lang="scss" scoped>
.app-container {
  width: 100%;
  height: calc(100% - 50px - 24px);
  canvas {
    background: -webkit-radial-gradient(#fff, #8c738c);
    // background-color: red;
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
