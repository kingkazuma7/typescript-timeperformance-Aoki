<script setup lang="ts">
// Composition API、リアクティビティシステム
import { ref, computed } from 'vue'
// import type { ComputedRef } from 'vue'

const amount = ref<number>(0)

// computed コールバック
const subTotal = computed<number>(() => amount.value * 5000)
// const subTotal: ComputedRef<number> = computed(() => amount.value * 5000)

console.log(subTotal);

</script>

<template>
  <h2>Computed</h2>
  単価: 5000<br>
  商品数: <input type="number" v-model="amount"><br>
  小計: {{ subTotal }}
</template>