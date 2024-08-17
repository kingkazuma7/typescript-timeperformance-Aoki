<script setup lang="ts">

const emit = defineEmits<{
  (e: 'btnClick', message: string, age: number): void
}>()

const buttonClick = (message: string, age: number): void => {
  emit('btnClick', message, age); // 親へ
}

</script>

<template>
  <h2>EmitComponent</h2>
  <button @click="event => buttonClick('子でクリックされた', 18)">クリック</button>
</template>