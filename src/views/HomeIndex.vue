<template>
  <p>name: {{ user.name }}</p>
  <p>age: {{ user.age }}</p>
  <p>count: {{ user.count }}</p>
  <p>countDouble: {{ user.countDouble }}</p>
  <button class="btn" @click="user.countAdd()">增加</button>
</template>

<script setup lang="ts">
import { userStore } from '@/stores/index'
import { login } from '@/http/api/user.ts'
const user = userStore()
async function loginAsync() {
  let params = {
    email: '123',
    password: '12321'
  }
  let data = await login(params)
  console.log(data)
}
loginAsync()
</script>

<style scoped lang="scss">
.btn {
  background: #535bf2;
}
</style>
