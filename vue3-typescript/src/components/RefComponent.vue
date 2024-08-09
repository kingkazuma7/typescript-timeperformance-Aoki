<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
const count = ref<number>(0)
const count2 : Ref<number> = ref(0)

</script>

<template>
  <h2>Ref</h2>
  <p>count</p>
  {{ count }}<br>
  <button @click="$event => count++">カウントアップ</button>
  <p>count2</p>
  {{ count2 }}
  <button @click="$event => count2++">カウントアップ</button>
</template>