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
        {{ shouldUseFlatName ? (p.flatName || p.name) : p.name }}
      </td>
    </tr>

    <template v-if="showChords">
      <th v-for="p in scalePitches" :key="p.name">
        {{ shouldUseFlatName ? (p.flatName || p.name) : p.name }}
      </th>
    
      <tr v-for="(chord, pitchIndexOfChordRoot) in chords" :key="chord.name">
        <td v-for="p in scalePitches" :key="p.name">
          <span v-if="isChordPitch(chord, pitchIndexOfChordRoot, p)">x</span>
        </td>
      </tr>
    </template>
  </table>
</template>

<script setup lang="ts">
import type { Scale } from '~/lib/scale'
import type { Chord } from '~/lib/chord'
import type { Pitch } from '~/lib/pitch'
import { MajorDiatonicChords } from '~/lib/chord'
import { resolveScalePitches, resolveChordPitches } from '~/lib/pitch'
const showChords = false

const props = defineProps<{
  scale: Scale
}>()

const scalePitches = computed(() => {
  return resolveScalePitches(props.scale)
})

const shouldUseFlatName = computed(() => {
  for(let i = 1; i < scalePitches.value.length; i++) {
    if(scalePitches.value[i].name[0] == scalePitches.value[i - 1].name[0]) {
      return true
    }
  }
})

const chords = computed<Chord[]>(() => {
  if(props.scale.type.name == 'MajorScale') {
    return MajorDiatonicChords
  }
  return []
})

const isChordPitch = (chord: Chord, pitchIndexOfChordRoot: number, pitch: Pitch) => {
  const chordRootPitch = scalePitches.value[pitchIndexOfChordRoot]
  const chordPitches = resolveChordPitches(chord, chordRootPitch)
  return chordPitches.some(p => p.name == pitch.name)
}
</script>
