<script setup lang="ts">
import ComputedComponent from '@/components/ComputedComponent.vue';
import EventComponent from '@/components/EventComponent.vue';
import PropsComponent from '@/components/PropsComponent.vue';
import ReactiveComponent from '@/components/ReactiveComponent.vue';
import RefComponent from '@/components/RefComponent.vue'
</script>


<template>
  <main>
    <!-- <RefComponent /> -->
    <!-- <ReactiveComponent /> -->
    <!-- <EventComponent /> -->
    <!-- <ComputedComponent /> -->
    <PropsComponent v-bind:id=1 name="hgoe"  />
  </main>
</template>
