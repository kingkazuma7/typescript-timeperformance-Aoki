<script setup lang="ts">
import ComputedComponent from '@/components/ComputedComponent.vue';
import EmitComponent from '@/components/EmitComponent.vue';
import EventComponent from '@/components/EventComponent.vue';
import PropsComponent from '@/components/PropsComponent.vue';
import PropTypeComponent from '@/components/PropTypeComponent.vue';
import ReactiveComponent from '@/components/ReactiveComponent.vue';
import RefComponent from '@/components/RefComponent.vue'

const propTypeTest = [
  { id: 1, name: '商品1' },
  { id: 2, name: '商品2' }
]

const emitTest = (message: string): void => {
  console.log(message);
}

</script>


<template>
  <main>
    <!-- <RefComponent /> -->
    <!-- <ReactiveComponent /> -->
    <!-- <EventComponent /> -->
    <!-- <ComputedComponent /> -->
    <!-- <PropsComponent v-bind:id=1 name="hgoe"  /> -->
    <!-- <PropTypeComponent :items=propTypeTest /> -->
    <EmitComponent @btn-click="emitTest" />
  </main>
</template>
