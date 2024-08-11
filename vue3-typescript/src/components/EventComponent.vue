<script setup lang="ts">
const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  console.log(target.value);
}
</script>

<template>
  <h2>イベント</h2>
  <input type="text" @change="handleChange">
</template>