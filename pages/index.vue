<template>
  <div class="container">
    <div class="container__items">
      <div class="selectors">
        <KeySelect v-model="selectedKeyPitchName" />
        <ScaleTypeSelect v-model="selectedScaleTypeName" />
      </div>
      <div class="scale-table-container">
        <ScaleTable :scale="scale" />
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
const cookieMaxAge = 60 * 60 * 24 * 365

const selectedKeyPitchName = useCookie<Pitch['name']>('selectedKeyPitchName', {
  default: () => 'C',
  maxAge: cookieMaxAge,
})
const selectedKeyPitch = computed(() => {
  const keyPitch = Pitches.find((p) => p.name === selectedKeyPitchName.value)
  if (!keyPitch) {
    throw new Error('invalid key pitch')
  }
  return keyPitch
})

const selectedScaleTypeName = useCookie<ScaleType['name']>('selectedScaleTypeName', {
  default: () => 'MajorScale',
  maxAge: cookieMaxAge,
})
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container__items {
  > * {
    margin: 0.5rem auto;
  }
}

.selectors {
  display: flex;
  justify-content: center;
  align-items: center;
}
.scale-table-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
