<script setup lang="ts">
import { reactive } from 'vue' // Composition API

type User = { // User型を自作
  id: number,
  name: string,
  age: number
}
const user1: User = { // user1オブジェクトを定義
  id: 1,
  name: 'ゾロ',
  age: 20
}

const user2 = reactive({} as User) // User型として使う、型アサーション、動的に設定
user2.id = 1;
user2.name = '波';

</script>

<template>
  <h2>リアクティブ</h2>
  {{ user1.name }}
  {{ user2.name }}
</template>