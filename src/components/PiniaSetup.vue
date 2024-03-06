<template>
  <div>
    <h1>Pinia composition 模式!</h1>
    <p>
      Pinia state:count=<b>{{ count }}</b>
    </p>
    <p>
      Pinia state:doubleCount=<b>{{ doubleCount }}</b>
    </p>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import appStore from '../stores'

const { count, doubleCount } = storeToRefs(appStore.useCounter)

const { increment, decrement } = appStore.useCounter
</script>

<style lang="scss" scoped></style>
