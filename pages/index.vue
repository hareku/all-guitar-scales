<template>
  <div class="fret-board-container">
    <div>
      <div class="selectors">
        <KeySelect v-model="selectedKeyPitchName" />
        <ScaleTypeSelect v-model="selectedScaleTypeName" />
      </div>
      <FretBoard :scale="scale" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Pitch } from '~/lib/pitch'
import { Pitches } from '~/lib/pitch'
import type { Scale, ScaleType } from '~/lib/scale'
import { ScaleTypes } from '~/lib/scale'

const selectedKeyPitchName = ref<Pitch['name']>('C')
const selectedKeyPitch = computed(() => {
  const keyPitch = Pitches.find((p) => p.name === selectedKeyPitchName.value)
  if (!keyPitch) {
    throw new Error('invalid key pitch')
  }
  return keyPitch
})

const selectedScaleTypeName = ref<ScaleType['name']>('MajorScale')
const selectedScaleType = computed<ScaleType>(() => {
  const scaleType = ScaleTypes.find((s) => s.name === selectedScaleTypeName.value)
  if (!scaleType) {
    throw new Error('invalid scale type')
  }
  return scaleType
})

const scale = computed<Scale>(() => {
  return {
    type: selectedScaleType.value,
    rootPitch: selectedKeyPitch.value,
  }
})
</script>

<style scoped>
.fret-board-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.selectors {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
