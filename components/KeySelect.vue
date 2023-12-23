<template>
  <select v-model="model">
    <option v-for="p in Pitches" :key="p.name" :value="p.name">
      {{ p.name }}
      <template v-if="p.flatName">({{ p.flatName }})</template>
    </option>
  </select>
</template>

<script setup lang="ts">
import type { Pitch } from '~/lib/pitch'
import { Pitches } from '~/lib/pitch'

const model = defineModel<Pitch['name']>({
  required: true,
})
</script>
