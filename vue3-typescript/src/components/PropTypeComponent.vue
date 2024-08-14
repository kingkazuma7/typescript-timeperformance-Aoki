<script setup lang="ts">
import type { PropType } from 'vue'

type Items = {
  id: number;
  name: string;
}[];

const props = defineProps({
  items: Array as PropType<Items>,
});
console.log(props.items);
</script>

<template>
  <h2>PropTypeComponent</h2>
  <ul>
    <li v-for="item in props.items" :key="item.id">id: {{ item.id }}, name:{{ item.name }}</li>
  </ul>
</template>
