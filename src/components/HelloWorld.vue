<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <el-icon :size="20" color="#000"><Plus /></el-icon>
  <svg-icon prefix="icon" name="check"></svg-icon>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
