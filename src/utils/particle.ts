/**
 * 获取范围内随机数
 * @param { number } min
 * @param { number } max
 */
const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

class Particle {
  x: number;
  y: number;
  size: number;
  canvas: any;
  ctx: any;
  startTime: any;

  constructor(canvas: any, ctx: any) {
    this.canvas = canvas;

    this.ctx = ctx;

    this.startTime = Date.now();

    // 时钟半径
    const r = Math.min(canvas.value.width, canvas.value.height) / 2;

    // 时钟中心点
    const cx = canvas.value.width / 2;
    const cy = canvas.value.height / 2;

    // 随机角度
    const rad = (getRandom(0, 360) * Math.PI) / 180;

    // 小圆点位置
    this.x = cx + r * Math.cos(rad);
    this.y = cy + r * Math.sin(rad);

    // 小圆点尺寸
    this.size = getRandom(2 * devicePixelRatio, 7 * devicePixelRatio);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "#5500ff";
    this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  moveTo(tx: number, ty: number) {
    // 运动持续时间
    const duration = 500;
    // 运动开始位置
    const sx = this.x,
      sy = this.y;
    // 运动速度
    const xSpeed = (tx - sx) / duration;
    const ySpeed = (ty - sy) / duration;

    const _move = () => {
      // 时间差
      const t = Date.now() - this.startTime;
      const x = sx + xSpeed * t,
        y = sy + ySpeed * t;

      this.x = x;
      this.y = y;

      if (t >= duration) {
        this.x = tx;
        this.y = ty;
        return;
      }

      requestAnimationFrame(_move);
    };
    _move();
  }
}

export default Particle;
