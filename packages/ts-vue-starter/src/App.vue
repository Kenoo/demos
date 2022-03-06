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
  </IxForm>
</template>

<script setup lang="ts">
import { useGlobalConfig } from '@idux/components/config'

const [formConfig, changeFormConfig] = useGlobalConfig('form', { size: 'lg' })
</script>