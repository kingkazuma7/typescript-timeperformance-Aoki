<script setup lang="ts">

const emit = defineEmits<{
  (e: 'btnClick', message: string): void
}>()

const buttonClick = (message: string): void => {
  emit('btnClick', message); // 親へ
}

</script>

<template>
  <h2>EmitComponent</h2>
  <button @click="event => buttonClick('子でクリックされた')">クリック</button>
</template>