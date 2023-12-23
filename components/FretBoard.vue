<template>
  <table>
    <tr v-for="string in BasicGuitarStrings" :key="string.number">
      <td>{{ string.number }}弦</td>
      <td v-for="fret in maxFret+1" :key="fret">
        <FretBoardPosition v-if="isScalePitch(resolveFretPitch(string, fret-1))" :string="string" :fret="fret-1" :scale="scale" :show-interval="showInterval" />
      </td>
    </tr>
    <tr>
      <td></td>
      <td v-for="fret in maxFret+1" :key="fret">
        <span v-if="isVisibleFretNumber(fret-1)">{{ fret-1 }}</span>
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import type { Scale } from '~/lib/scale'
import type { Pitch } from '~/lib/pitch'
import { BasicGuitarStrings } from '~/lib/string'
import { resolveScalePitches, resolveFretPitch } from '~/lib/pitch'

const maxFret = 22
const showInterval = true
const isVisibleFretNumber = (num: number) => {
  return [0, 3, 5, 7, 9, 12, 15, 17, 19, 21].includes(num)
}

const props = defineProps<{
  scale: Scale
}>()

const scalePitches = computed(() => {
  return resolveScalePitches(props.scale)
})
const isScalePitch = (v: Pitch) => {
  return scalePitches.value.some((p) => {
    return p.name === v.name
  })
}
</script>
