<template>
    <div class='radar'>
      <i v-for="item in 8"></i>
       <div class="radar-bg1">
          <div class="radar-bg1-axle">
          </div>
       </div>
    </div>
</template>

<script  lang='ts' setup>
</script>

<style lang='scss' scoped>
    @mixin star($x,$y,$size){
      position: absolute;
      left:$x;
      top:$y;
      width: $size;
      height: $size;
      border-radius:50%;
      // background: #6FF3FF;
      filter: blur(0.95px);
    }

    @keyframes axle {
      from{
        transform: rotate(0deg);
      }
      to{
        transform: rotate(360deg);
      }
    }

    @keyframes twinking {
      from {
        background: #6FF3FF;
      }
      to{
        background:transparent;
      }
    }

    .radar{
      position: relative;
      width: 100%;
      height: 100%;
      background: url('@/assets/EquipmentComprehensiveAdministration/radar.png') no-repeat;
      background-position: center;
      background-size: contain;

      i:nth-child(1){
        @include star(107.62px,42.86px,9.52px);
        animation: twinking 3s 0.4s linear infinite;
      }
      i:nth-child(2){
        @include star(110.48px,65.71px,6.67px);
        animation: twinking 3s 0.3s linear infinite;
      }
      i:nth-child(3){
        @include star(80px,76.19px,5.71px);
        animation: twinking 3s 0.3s linear infinite;
      }
      i:nth-child(4){
        @include star(53.33px,101.9px,9.52px);
        animation: twinking 1s 0.2s linear infinite;
      }
      i:nth-child(5){
        @include star(58.1px,155.24px,10.48px);
        animation: twinking 1s 0s linear infinite;
      }
      i:nth-child(6){
        @include star(101.9px,133.33px,4.76px);
        animation: twinking 1s 0.5s linear infinite;
      }
      i:nth-child(7){
        @include star(108.25px,109.52px,2.54px);
        animation: twinking 1s 0.3s linear infinite;
      }
      i:nth-child(8){
        @include star(152.38px,123.54px,2.54px);
        animation: twinking 1s 0.1s linear infinite;
      }

      &-bg1{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: url('@/assets/EquipmentComprehensiveAdministration/radar1.png') no-repeat;
        background-position: center;
        background-size: contain;

        &-axle{
          width: 85%;
          height: 85%;
          background: url('@/assets/EquipmentComprehensiveAdministration/radar2.png') no-repeat;
          background-position: 100% 100%;
          background-size: contain;
          animation: axle 3s linear infinite;

        
        }

      }
    }
</style>