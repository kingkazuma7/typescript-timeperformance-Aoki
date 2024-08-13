<script setup lang="ts">
type Props = {
  id: number,
  name: string
}
const props = defineProps<Props>()
console.log(props);

</script>

<template>
  <h2>PropsComponent</h2>
  id: {{ props.id }}
  name: {{ props.name }}
</template>