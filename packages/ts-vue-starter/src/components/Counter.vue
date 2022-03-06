<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const props = defineProps<{
  foo: string
  bar?: number
}>()
</script>

<template>
    <IxButton @click="count++">{{count}}</IxButton>
    <span>{{props.foo}}</span>
    <span>{{++props.bar}}</span>
    <span>{{props.bar}}</span>
</template>