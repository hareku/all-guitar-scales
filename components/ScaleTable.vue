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
        {{ p.flatName || p.name }}
      </td>
    </tr>

    <template v-if="showChords">
      <tr v-for="(chord, pitchIndexOfChordRoot) in chords" :key="chord.name">
        <th>{{ scalePitches[pitchIndexOfChordRoot].flatName || scalePitches[pitchIndexOfChordRoot].name }}{{ chord.name }}</th>
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
