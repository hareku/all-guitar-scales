<template>
  <table>
    <tr>
      <th>Interval</th>
      <td v-for="interval in scale.type.intervals" :key="interval.name">
        {{ interval.name }}
      </td>
    </tr>
    <tr>
      <th>Pitch</th>
      <td v-for="p in scalePitches" :key="p.name">
        {{ p.name }}
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import type { Scale } from '~/lib/scale'
import { resolveScalePitches, resolveFretPitch } from '~/lib/pitch'

const props = defineProps<{
  scale: Scale
}>()

const scalePitches = computed(() => {
  return resolveScalePitches(props.scale)
})
</script>
