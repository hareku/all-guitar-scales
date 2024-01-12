import type { Pitch } from './pitch'
import type { Interval } from './interval'
import {
  Interval_P1,
  Interval_M2,
  Interval_m3,
  Interval_M3,
  Interval_P4,
  Interval_P5,
  Interval_m6,
  Interval_M6,
  Interval_m7,
  Interval_M7,
} from './interval'

export type ScaleTypeNames = 'MajorScale' | 'MinorScale' | 'MajorPentatonicScale' | 'MinorPentatonicScale'

export interface ScaleType {
  name: ScaleTypeNames
  intervals: Interval[]
}

export const MajorScale: ScaleType = {
  name: 'MajorScale',
  intervals: [
    Interval_P1,
    Interval_M2,
    Interval_M3,
    Interval_P4,
    Interval_P5,
    Interval_M6,
    Interval_M7,
  ],
}

export const MinorScale: ScaleType = {
  name: 'MinorScale',
  intervals: [
    Interval_P1,
    Interval_M2,
    Interval_m3,
    Interval_P4,
    Interval_P5,
    Interval_m6,
    Interval_m7,
  ],
}

export const MajorPentatonicScale: ScaleType = {
  name: 'MajorPentatonicScale',
  intervals: [
    Interval_P1,
    Interval_M2,
    Interval_M3,
    Interval_P5,
    Interval_M6,
  ],
}

export const MinorPentatonicScale: ScaleType = {
  name: 'MinorPentatonicScale',
  intervals: [
    Interval_P1,
    Interval_m3,
    Interval_P4,
    Interval_P5,
    Interval_m7,
  ],
}

export const ScaleTypes: ScaleType[] = [
  MajorScale,
  MinorScale,
  MajorPentatonicScale,
  MinorPentatonicScale,
]

export interface Scale {
  type: ScaleType
  rootPitch: Pitch
}
