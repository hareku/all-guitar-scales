<template>
  <select v-model="model">
    <option v-for="s in ScaleTypes" :key="s.name" :value="s.name">
      {{ s.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
import type { ScaleType } from '~/lib/scale'
import { ScaleTypes } from '~/lib/scale'

const model = defineModel<ScaleType['name']>({
  required: true,
})
</script>
