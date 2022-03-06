<template>
  <p>Default size of form: {{ formConfig.size }}</p>
  <IxSpace>
    <IxButton @click="changeFormConfig({ size: 'sm' })">Small</IxButton>
    <IxButton @click="changeFormConfig({ size: 'md' })">Medium</IxButton>
    <IxButton @click="changeFormConfig({ size: 'lg' })">Large</IxButton>
  </IxSpace>
  <IxForm>
    <IxFormItem><IxInput /></IxFormItem>
    <IxFormItem><IxInput /></IxFormItem>
    <Hello/>
    <Counter foo="test foo" bar="3"/>
  </IxForm>
</template>

<script setup lang="ts">
import { useGlobalConfig } from '@idux/components/config'
import Hello from './components/Hello.vue'
import Counter from './components/Counter.vue'

interface Book {
  title: string
  author: string
  year: number
}

const book : Book = {
  title: 'Vue 3 Guide',
  author: 'Vue Team',
  year: 2020
};

const [formConfig, changeFormConfig] = useGlobalConfig('form', { size: 'lg' })
</script>