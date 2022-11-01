<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :xlink:href="symbolId"  />
  </svg>
</template>
<script lang="ts">
  export default {
    name:"SvgIcon"
  }
</script>

<script setup lang="ts">
  const props = defineProps({
    prefix: {
      type: String,
      default: 'icon'
    },
    name: {
      type: String,
      required: true
    },
  })
  const symbolId = computed(() => `#${props.prefix}-${props.name}`)

</script>
<style lang="scss" scoped>
  .svg-icon {
    width: 16px;
    height: 16px;
    fill: #000;
    overflow: hidden;
  }
</style>
