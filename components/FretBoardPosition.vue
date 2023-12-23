<template>
  <span
    :class="classes"
    >{{ displayValue }}</span>
</template>

<script setup lang="ts">
import type { Pitch } from '~/lib/pitch';
import type { Scale } from '~/lib/scale'
import type { GuitarString } from '~/lib/string'
import type { Interval } from '~/lib/interval'
import { resolveFretPitch } from '~/lib/pitch'

const props = defineProps<{
  string: GuitarString
  scale: Scale
  fret: number
  showInterval?: boolean
}>()

const pitch = computed<Pitch>(() => {
  return resolveFretPitch(props.string, props.fret)
})
const interval = computed<Interval>(() => {
  let semitonesFromRoot = pitch.value.semitonesFromC - props.scale.rootPitch.semitonesFromC
  if(semitonesFromRoot < 0) {
    semitonesFromRoot += 12
  }

  const f = props.scale.type.intervals.find((i) => i.semitones === semitonesFromRoot)
  if (!f) {
    throw new Error('invalid interval')
  }
  return f
})

const displayValue = computed<string>(() => {
  if (props.showInterval) {
    return interval.value.name
  } else {
    return pitch.value.name
  }
})

const classes = computed(() => {
  return {
    tonic: interval.value === props.scale.type.intervals[0],
  }
})
</script>

<style scoped>
.tonic {
  color: red;
  font-weight: bold;
}
</style>
